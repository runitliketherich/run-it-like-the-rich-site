#!/usr/bin/env python3
"""Build Laura's connected sites.

  python3 build.py            -> preview/ (one artifact, pages link to each other)
                                 deploy/<domain>/index.html (one standalone file per domain)

Edit CONFIG below, run again, re-upload. Blank values fall back safely:
  booking/join links fall back to the contact form on laurapoincot.com,
  phone/chat buttons hide themselves.
"""
import base64, html, json, pathlib, re, shutil

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"

CONFIG = {
    "email": "support@thehq.online",
    "phone": "",          # mobile for texts, e.g. "407-555-0123"
    "chatUrl": "",        # instant chat link, e.g. WhatsApp wa.me/1407..., Messenger m.me/..., or a live-chat page
    "bookingUrl": "https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support",
    "joinUrl": "",        # HQ Club checkout / payment link
    "formEndpoint": "",   # Formspree (or similar) endpoint so the form sends without an email app
    "intakeEndpoint": "", # Google Apps Script web app URL for the HQ Club intake (see _source/intake-apps-script.gs)
    "substackUrl": "https://runitliketherich.substack.com/",
    "youtubeUrl": "https://www.youtube.com/@RunItLikeTheRich",
    "instagramUrl": "https://www.instagram.com/runitliketherich/",
    "facebookUrl": "https://www.facebook.com/profile.php?id=61583470245237",
    "linkedinUrl": "https://www.linkedin.com/in/run-it-like-the-rich-with-laura-poincot/",
    "tiktokUrl": "",
    "shopUrl": "",
}

SOCIAL = [("Substack", "substackUrl"), ("YouTube", "youtubeUrl"), ("Instagram", "instagramUrl"),
          ("Facebook", "facebookUrl"), ("LinkedIn", "linkedinUrl"), ("TikTok", "tiktokUrl"), ("Shop", "shopUrl")]

def social_links(cls="soc"):
    return "".join(f'<a class="{cls}" href="{CONFIG[k]}" target="_blank" rel="noopener">{label}</a>'
                   for label, k in SOCIAL if CONFIG[k])

SITES = [
    # key, domain, name, one-liner, title, description
    ("hub", "laurapoincot.com", "Laura Poincot", "Message, email or book a call. Every program in one place.",
     "Laura Poincot", "Contact Laura Poincot and see every Run It Like the Rich program in one place."),
    ("hq", "thehq.online", "The HQ Club", "Early access is open. Build every system, then keep it running.",
     "The HQ Club", "Early access to the HQ Club: every Admin, Books and Compliance system built for your business."),
    ("vhq", "virtualhq.online", "Virtual HQ", "One operating map that connects the tools you already use.",
     "Virtual HQ", "Virtual HQ: one controlled operating environment for your business."),
    ("riltr", "runitliketherich.com", "Run It Like the Rich", "The operator mindset: articles, the Reset, and merch.",
     "Run It Like the Rich", "Admin, Books, Compliance. Keep it lean. Keep it clean. Run it like the rich."),
    ("gaap", "trainthegaap.com", "Train the GAAP", "Backup and the why behind the books, for your bookkeeper.",
     "Train the GAAP", "Your bookkeeper is the most unsupported person in your business. Train the GAAP gives them the why behind the work and an ally to call."),
    ("exit", "storybookexit.com", "StoryBook Exit", "Build the business you can retire from.",
     "StoryBook Exit", "A 24–30 month pre-sale operating program for owners 5–10 years from retirement."),
]
BY_KEY = {s[0]: s for s in SITES}

def b64(p):
    return "data:image/png;base64," + base64.b64encode((SRC / p).read_bytes()).decode()

MARK_GOLD = b64("mark-gold.png")
MARK_NAVY = b64("mark-navy.png")
CSS = (SRC / "shared.css").read_text()

def url_for(key, mode, anchor=""):
    if mode == "preview":
        f = "index.html" if key == "hub" else f"{key}.html"
        return f + (f"#{anchor}" if anchor else "")
    return f"https://{BY_KEY[key][1]}/" + (f"#{anchor}" if anchor else "")

def link_attrs(href):
    return ' target="_blank" rel="noopener"' if href.startswith("http") else ""

def header(key, mode):
    s = BY_KEY[key]
    join = url_for("hq", mode, "join")
    cur = ' aria-current="page"'
    strip = "".join(
        f'<a href="{url_for(k, mode)}"{cur if k == key else ""}>{dom}</a>' for k, dom, *_ in SITES)
    links = [("hq", "HQ Club"), ("vhq", "Virtual HQ"), ("gaap", "Train the GAAP"), ("exit", "StoryBook Exit"), ("riltr", "Articles")]
    nav = "".join(
        f'<a class="lnk" href="{url_for(k, mode)}">{t}</a>' for k, t in links if k != key)
    contact = url_for("hub", mode, "contact")
    home_name = "Laura Poincot" if key == "hub" else s[2]
    return f'''<div class="strip"><div class="wrap"><span>Our sites</span>{strip}</div></div>
<header class="top"><div class="wrap">
  <a class="home" href="{url_for(key, mode)}"><b>{home_name}</b><span>Run It Like the Rich</span></a>
  <nav aria-label="Sites">{nav}<a class="lnk" href="{contact}">Contact</a>
  <a class="btn btn-gold btn-sm" href="{join}"{link_attrs(join)}>Join the HQ Club</a></nav>
</div></header>'''

def footer(key, mode):
    cards = []
    for k, dom, name, line, *_ in SITES:
        cls = ' class="here"' if k == key else ""
        cards.append(f'<a{cls} href="{url_for(k, mode)}"><span>{dom}</span><b>{name}</b><em>{line}</em></a>')
    book = CONFIG["bookingUrl"] or url_for("hub", mode, "book")
    return f'''<footer class="family on-navy"><div class="wrap">
  <p class="eyebrow" style="color:var(--gold)">One system, six front doors</p>
  <h2>Every site leads to the same place: a business that runs without you.</h2>
  <div class="fam-grid">{"".join(cards)}</div>
  <div class="follow">
    <div class="stack" style="gap:8px"><b>Follow along</b><div class="socs">{social_links()}</div></div>
    <div class="row"><a class="btn btn-gold btn-sm" href="{book}"{link_attrs(book)}>Book a call</a><a class="btn btn-line btn-sm" href="{url_for("hub", mode, "message")}">Send a message</a></div>
  </div>
  <div class="signoff">
    <img class="mk" src="{MARK_GOLD}" alt="Run it like the Rich">
    <p><b>Keep it lean. Keep it clean. Run it like the rich.</b><br>{CONFIG["email"]} · Orlando, Florida · © 2026 Laura Poincot</p>
  </div>
</div></footer>'''

JS = r'''
<script>
(function(){
  var C = __CONFIG__;
  // hide ways that have no link yet
  document.querySelectorAll('[data-need]').forEach(function(el){
    if(!C[el.getAttribute('data-need')]) el.hidden = true;
  });
  document.querySelectorAll('[data-fill]').forEach(function(el){
    var k = el.getAttribute('data-fill'), v = C[k] || '';
    if(el.tagName === 'A'){
      if(k === 'phone') el.href = 'sms:' + v.replace(/[^0-9+]/g,'');
      else el.href = v;
    } else el.textContent = v;
  });
  // copy buttons
  document.querySelectorAll('[data-copy]').forEach(function(b){
    b.addEventListener('click', function(){
      var v = C[b.getAttribute('data-copy')] || '', t = b.textContent;
      function done(msg){ b.textContent = msg; setTimeout(function(){ b.textContent = t; }, 1600); }
      try {
        navigator.clipboard.writeText(v).then(function(){ done('Copied'); }, function(){ done('Select and copy'); });
      } catch(e){ done('Select and copy'); }
    });
  });
  // topic preselect from #book / #join / #message
  var form = document.getElementById('cf');
  function pick(){
    if(!form) return;
    var map = {book:'Book a call', join:'Join the HQ Club', fullservice:'Full-service options', message:'Quick question'};
    var h = (location.hash || '').slice(1), want = map[h];
    if(!want) return;
    var r = form.querySelector('input[name="topic"][value="' + want + '"]');
    if(r){ r.checked = true; }
  }
  pick(); window.addEventListener('hashchange', pick);
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var st = document.getElementById('cf-status');
      if(!form.reportValidity()) return;
      var fd = new FormData(form), o = {};
      fd.forEach(function(v,k){ o[k] = v; });
      function show(m){ st.textContent = m; st.hidden = false; }
      if(C.formEndpoint){
        show('Sending…');
        fetch(C.formEndpoint, {method:'POST', body:fd, headers:{'Accept':'application/json'}})
          .then(function(r){ if(!r.ok) throw 0; form.reset(); show('Got it. Your message is in Laura\'s inbox.'); })
          .catch(function(){ show('That didn\'t send. Please email ' + C.email + ' directly.'); });
      } else {
        var body = 'Name: ' + o.name + '\nEmail: ' + o.email + '\nPhone: ' + (o.phone||'') +
          '\nBusiness: ' + (o.business||'') + '\nBest way to reach me: ' + (o.reach||'') + '\n\n' + (o.message||'');
        location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent((o.topic||'Hello') + ' – ' + o.name) +
          '&body=' + encodeURIComponent(body);
        show('Your email app should open with this message ready to send. If it didn\'t, email ' + C.email + ' directly.');
      }
    });
  }
})();
</script>'''

def fill(body, key, mode):
    book = CONFIG["bookingUrl"] or url_for("hub", mode, "book")
    join = url_for("hq", mode, "join")
    reps = {
        "{{BOOK}}": book, "{{BOOK_ATTR}}": link_attrs(book),
        "{{JOIN}}": join, "{{JOIN_ATTR}}": link_attrs(join),
        "{{MARK_GOLD}}": MARK_GOLD, "{{MARK_NAVY}}": MARK_NAVY,
        "{{EMAIL}}": CONFIG["email"], "{{SOCIAL}}": social_links("soc soc-light"), "{{SCORECARD}}": (SRC / "partials" / "scorecard.html").read_text(),
    }
    body = body.replace("{{INTAKE}}", (SRC / "partials" / "intake.html").read_text().replace("__CONFIG__", json.dumps(CONFIG)))
    for part in ("offer", "fullservice", "cta"):
        body = body.replace("{{%s}}" % part.upper(), (SRC / "partials" / f"{part}.html").read_text())
    for k, v in reps.items():
        body = body.replace(k, v)
    body = re.sub(r"\{\{URL:(\w+)(?:#(\w+))?\}\}", lambda m: url_for(m.group(1), mode, m.group(2) or ""), body)
    return body

def page(key, mode, standalone):
    s = BY_KEY[key]
    body = fill((SRC / "pages" / f"{key}.html").read_text(), key, mode)
    head = f'''<title>{s[4]}</title>
<meta name="description" content="{html.escape(s[5])}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap">
<style>{CSS}</style>'''
    if mode == "deploy":
        head += f'\n<link rel="canonical" href="https://{s[1]}/">\n<meta property="og:title" content="{s[4]}">\n<meta property="og:description" content="{html.escape(s[5])}">'
    js = JS.replace("__CONFIG__", json.dumps(CONFIG))
    inner = f"{header(key, mode)}\n<main>{body}</main>\n{footer(key, mode)}\n{js}"
    if standalone:
        return f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n{head}\n</head><body>\n{inner}\n</body></html>\n'
    return f"{head}\n{inner}\n"

def main():
    for d in ("preview", "deploy"):
        shutil.rmtree(ROOT / d, ignore_errors=True)
    (ROOT / "preview").mkdir()
    for key, dom, *_ in SITES:
        # preview: the hub is the artifact's main page (no skeleton); the rest are full documents
        f = ROOT / "preview" / ("index.html" if key == "hub" else f"{key}.html")
        f.write_text(page(key, "preview", standalone=(key != "hub")))
        out = ROOT / "deploy" / dom
        out.mkdir(parents=True)
        (out / "index.html").write_text(page(key, "deploy", standalone=True))
    print("built", [p.name for p in (ROOT / "preview").iterdir()])

if __name__ == "__main__":
    main()
