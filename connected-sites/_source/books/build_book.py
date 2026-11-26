#!/usr/bin/env python3
"""Build a Run It Like the Rich workbook PDF from its markdown source.

    python3 build_book.py a-admin.md "A - Admin" "Get Your Office Back"

Writes <slug>.html (print-styled) and <slug>.pdf next to the source.
The same markdown is the source for the Kindle/EPUB edition later.
"""
import sys, pathlib, subprocess, re, json
import markdown

HERE = pathlib.Path(__file__).resolve().parent

CSS = """
@page {
  size: Letter;
  margin: 22mm 20mm 20mm 20mm;
}
@page :first { margin: 0 }

:root{
  --navy:#0f2740; --red:#B3272D; --ink:#22313f;
  --grey:#f3f6f8; --line:#d7dee4; --muted:#5b6a76;
}
*{box-sizing:border-box}
body{
  font-family:Georgia,'Times New Roman',serif;
  font-size:11.3pt; line-height:1.52; color:var(--ink); margin:0;
}

/* ---------- cover ---------- */
.cover{
  height:100vh; page-break-after:always; background:var(--navy); color:#fff;
  padding:30mm 22mm; display:flex; flex-direction:column;
}
.cover .letter{
  font-size:150pt; line-height:.85; font-weight:700; color:#fff; margin:0 0 6mm;
}
.cover .rule{width:46mm;height:3.2mm;background:var(--red);margin:0 0 9mm}
.cover h1{font-size:34pt;line-height:1.1;margin:0 0 4mm;color:#fff;border:0;padding:0}
.cover h2{font-size:17pt;font-weight:400;color:#c3d2df;margin:0;border:0;padding:0}
.cover .spacer{flex:1}
.cover .who{font-size:14pt;color:#fff;margin:0 0 1.5mm}
.cover .brand{font-size:11pt;color:#9fb4c7;letter-spacing:.06em;text-transform:uppercase}
.cover .book{
  font-size:9.5pt;letter-spacing:.18em;text-transform:uppercase;color:var(--red);
  font-weight:700;margin:0 0 4mm;
}

/* ---------- headings ---------- */
h1{
  font-size:21pt;line-height:1.15;color:var(--navy);margin:0 0 5mm;
  padding-top:4mm;border-top:2.4pt solid var(--navy);
  page-break-before:always; page-break-after:avoid;
}
h1:first-of-type{page-break-before:avoid}
h2{font-size:15pt;color:var(--navy);margin:9mm 0 3mm;page-break-after:avoid}
h3{font-size:12.4pt;color:var(--red);margin:7mm 0 2mm;page-break-after:avoid}
p{margin:0 0 3.4mm}
em{color:var(--muted)}
strong{color:var(--navy)}
hr{border:0;border-top:1pt solid var(--line);margin:8mm 0}

/* ---------- lists ---------- */
ul,ol{margin:0 0 4mm;padding-left:6mm}
li{margin-bottom:1.8mm}
ul{list-style:none;padding-left:6mm}
ul li{position:relative}
ul li::before{
  content:"";position:absolute;left:-5mm;top:2.1mm;
  width:2.6mm;height:0.9mm;background:var(--red);
}
/* checkbox lines keep their box, lose the dash */
ul li.cbx::before{display:none}

/* ---------- tables ---------- */
table{
  width:100%;border-collapse:collapse;margin:0 0 5mm;font-size:10.2pt;
  page-break-inside:avoid;
}
th{
  background:var(--navy);color:#fff;text-align:left;padding:2.4mm 2.6mm;
  font-size:9.6pt;font-weight:700;
}
td{border:0.6pt solid var(--line);padding:2.6mm;vertical-align:top}
tbody tr:nth-child(even) td{background:var(--grey)}
/* worksheet tables: tall empty rows to write in */
table.ws td{height:11mm;background:#fff}
table.ws tbody tr:nth-child(even) td{background:#fcfdfe}

/* ---------- fill-in rules ---------- */
.fill{display:block;border-bottom:0.8pt solid var(--line);height:7mm;margin:2mm 0 4mm}

blockquote{
  margin:5mm 0;padding:0 0 0 5mm;border-left:3pt solid var(--red);
  font-size:13pt;line-height:1.35;color:var(--navy);font-weight:700;
}
.pull{
  margin:6mm 0;padding:4mm 5mm;background:var(--grey);
  border-left:3pt solid var(--red);font-size:11.3pt;
}
"""


def main():
    src = HERE / sys.argv[1]
    letter = sys.argv[2] if len(sys.argv) > 2 else "A"
    sub = sys.argv[3] if len(sys.argv) > 3 else ""
    slug = src.stem
    raw = src.read_text()

    # pull the cover block off the front (everything before the first ---)
    parts = raw.split("\n---\n", 1)
    body_md = parts[1] if len(parts) > 1 else raw

    # Protect underscore runs from markdown's emphasis parser before converting.
    body_md = re.sub(r"_{4,}", "@@RULE@@", body_md)

    html_body = markdown.markdown(body_md, extensions=["tables", "sane_lists"])

    # checkbox lines: strip the bullet dash
    html_body = html_body.replace("<li>☐", '<li class="cbx">☐')
    # standalone ☐ lines that markdown left as plain paragraphs with <br>
    html_body = re.sub(r"(☐[^<\n]*)(<br\s*/?>)", r"\1<br>", html_body)

    # worksheet tables (the ones with empty cells) get the tall-row class
    def mark_ws(m):
        t = m.group(0)
        return t.replace("<table>", '<table class="ws">', 1) if t.count("<td></td>") > 6 else t
    html_body = re.sub(r"<table>.*?</table>", mark_ws, html_body, flags=re.S)

    # the protected runs become ruled fill-in lines
    html_body = html_body.replace("@@RULE@@", '<span style="display:inline-block;'
                                  'border-bottom:0.8pt solid #d7dee4;min-width:52mm">'
                                  "&nbsp;</span>")

    cover = f"""<section class="cover">
  <div class="book">Book One of the ABC Owner Reset</div>
  <div class="letter">{letter.split()[0]}</div>
  <div class="rule"></div>
  <h1>{letter.split('—')[-1].strip() if '—' in letter else letter}</h1>
  <h2>{sub}</h2>
  <div class="spacer"></div>
  <p class="who">Laura Poincot</p>
  <p class="brand">Run It Like the Rich</p>
</section>"""

    def wrap(inner):
        return (f'<!doctype html><html><head><meta charset="utf-8">'
                f"<title>{letter} — {sub}</title><style>{CSS}</style></head>"
                f"<body>{inner}</body></html>")

    # Cover and body render separately so the page footer never lands on the cover.
    html_path = HERE / f"{slug}.html"
    html_path.write_text(wrap(cover + html_body))
    cover_html = HERE / f"_{slug}-cover.html"
    cover_html.write_text(wrap(cover))
    body_html = HERE / f"_{slug}-body.html"
    body_html.write_text(wrap(html_body))

    pdf_path = HERE / f"{slug}.pdf"
    footer = (
        '<div style="width:100%;font-family:Georgia,serif;font-size:8pt;color:#5b6a76;'
        'padding:0 20mm;display:flex;justify-content:space-between;">'
        "<span>Run It Like the Rich &middot; __LETTER__</span>"
        '<span class="pageNumber"></span></div>'
    ).replace("__LETTER__", letter)
    cover_pdf = HERE / f"_{slug}-cover.pdf"
    body_pdf = HERE / f"_{slug}-body.pdf"
    cover_opts = json.dumps({
        "path": str(cover_pdf), "format": "Letter", "printBackground": True,
        "margin": {"top": "0", "bottom": "0", "left": "0", "right": "0"},
    })
    body_opts = json.dumps({
        "path": str(body_pdf), "format": "Letter", "printBackground": True,
        "displayHeaderFooter": True,
        "headerTemplate": "<div></div>", "footerTemplate": footer,
        "margin": {"top": "22mm", "bottom": "18mm", "left": "0", "right": "0"},
    })
    js = (
        "const {chromium}=require('playwright');\n"
        "(async()=>{\n"
        "  const b=await chromium.launch(); const p=await b.newPage();\n"
        "  await p.goto(" + json.dumps("file://" + str(cover_html)) + ",{waitUntil:'load'});\n"
        "  await p.pdf(" + cover_opts + ");\n"
        "  await p.goto(" + json.dumps("file://" + str(body_html)) + ",{waitUntil:'load'});\n"
        "  await p.pdf(" + body_opts + ");\n"
        "  await b.close();\n"
        "})();\n"
    )
    jp = HERE / "_render.cjs"
    jp.write_text(js)
    subprocess.run(["node", str(jp)], check=True)

    from pypdf import PdfWriter, PdfReader
    w = PdfWriter()
    for f in (cover_pdf, body_pdf):
        for pg in PdfReader(str(f)).pages:
            w.add_page(pg)
    w.add_metadata({"/Title": f"{letter} — {sub}", "/Author": "Laura Poincot",
                    "/Subject": "The ABC Owner Reset", "/Creator": "Run It Like the Rich"})
    with open(pdf_path, "wb") as fh:
        w.write(fh)

    for f in (jp, cover_pdf, body_pdf, cover_html, body_html):
        f.unlink(missing_ok=True)
    print(f"{pdf_path}  ({pdf_path.stat().st_size//1024} KB, "
          f"{len(PdfReader(str(pdf_path)).pages)} pages)")


if __name__ == "__main__":
    main()
