/* Run It Like the Rich — download gate
 *
 * One gate for every free download on every site. Drop this in and mark
 * any download link with data-gated:
 *
 *   <a href="/proactive-bookkeeper-checklist.pdf"
 *      data-gated="Proactive Bookkeeper Checklist" download>Download</a>
 *
 * The value of data-gated is what gets recorded as "Which download", so
 * the spreadsheet shows which magnet is actually pulling.
 *
 * Rules this follows on purpose:
 *   - The download is NEVER withheld. Submit and it starts, every time.
 *     Even if the network call fails. Even if they tick nothing.
 *   - No box is pre-ticked. Pre-ticked consent is not consent.
 *   - The opt-ins are separate from the download, and the form says so.
 *     That is the difference between asking for an email and upselling.
 *   - Nothing here depends on the fetch succeeding, because the endpoint
 *     answers with an opaque no-cors response we cannot read.
 */
(function () {
  "use strict";

  var ENDPOINT = window.RILTR_FORM_ENDPOINT || "";
  var KEY = "riltr-known";          // remembers them so we only ask once
  var open = null;

  /* ---------- remember a returning visitor ---------- */
  function known() {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); }
    catch (e) { return null; }      // private mode, blocked storage — just ask again
  }
  function remember(o) {
    try { localStorage.setItem(KEY, JSON.stringify({ name: o.name, email: o.email, business: o.business })); }
    catch (e) {}
  }

  /* ---------- styles ---------- */
  var CSS = [
    '.rg-back{position:fixed;inset:0;background:rgba(10,20,32,.62);z-index:9998;',
    '  display:flex;align-items:flex-start;justify-content:center;padding:24px 16px;overflow:auto}',
    '.rg{background:#0C1F33;color:#E8F0F7;max-width:460px;width:100%;border-radius:14px;',
    '  padding:26px 26px 22px;position:relative;z-index:9999;margin:auto;',
    '  font:15px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;',
    '  box-shadow:0 24px 70px rgba(0,0,0,.45)}',
    '.rg h2{font-size:21px;line-height:1.25;margin:0 0 6px;font-weight:700;color:#fff}',
    '.rg .rg-sub{color:#9FB3C6;font-size:14px;margin:0 0 18px}',
    '.rg label.f{display:block;margin-bottom:11px;font-weight:600;font-size:14px}',
    '.rg input[type=text],.rg input[type=email]{width:100%;margin-top:5px;padding:11px 13px;',
    '  border-radius:9px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);',
    '  color:#E8F0F7;font:inherit;font-weight:400}',
    '.rg input:focus{outline:none;border-color:#F2C73D;background:rgba(255,255,255,.1)}',
    '.rg .rg-opts{margin:16px 0 4px;padding:14px 15px;border:1px solid rgba(255,255,255,.14);border-radius:11px}',
    '.rg .rg-opts > p{margin:0 0 10px;font-size:13px;color:#9FB3C6}',
    '.rg label.c{display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;',
    '  font-size:14px;cursor:pointer;font-weight:400}',
    '.rg label.c:last-child{margin-bottom:0}',
    '.rg label.c input{margin-top:3px;accent-color:#F2C73D;width:16px;height:16px;flex:none}',
    '.rg button.go{width:100%;margin-top:16px;padding:13px;border:0;border-radius:9px;',
    '  background:#F2C73D;color:#0C1F33;font:700 16px/1 inherit;cursor:pointer}',
    '.rg button.go:hover{background:#C9A227}',
    '.rg button.go:disabled{opacity:.6;cursor:default}',
    '.rg .rg-fine{color:#9FB3C6;font-size:12.5px;margin-top:11px;text-align:center}',
    '.rg .rg-x{position:absolute;top:12px;right:14px;background:none;border:0;color:#9FB3C6;',
    '  font-size:24px;line-height:1;cursor:pointer;padding:4px 8px}',
    '.rg .rg-x:hover{color:#fff}',
    '@media (max-width:480px){.rg{padding:22px 18px 18px}}'
  ].join("");

  function styles() {
    if (document.getElementById("rg-css")) return;
    var s = document.createElement("style");
    s.id = "rg-css"; s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ---------- the one thing that must always happen ---------- */
  function deliver(a) {
    var url = a.getAttribute("href");
    var link = document.createElement("a");
    link.href = url;
    if (a.hasAttribute("download")) link.setAttribute("download", "");
    else { link.target = "_blank"; link.rel = "noopener"; }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function close() {
    if (!open) return;
    open.remove(); open = null;
    document.removeEventListener("keydown", onKey);
  }
  function onKey(e) { if (e.key === "Escape") close(); }

  /* ---------- the gate ---------- */
  function show(a) {
    styles();
    var what = a.getAttribute("data-gated") || "Download";
    var prev = known() || {};

    var back = document.createElement("div");
    back.className = "rg-back";
    back.innerHTML =
      '<div class="rg" role="dialog" aria-modal="true" aria-label="Get this download">' +
        '<button class="rg-x" type="button" aria-label="Close">&times;</button>' +
        '<h2>Where should I send it?</h2>' +
        '<p class="rg-sub">' + esc(what) + ' &mdash; free, and yours either way.</p>' +
        '<form novalidate>' +
          '<label class="f">Name<input type="text" name="name" autocomplete="name" value="' + esc(prev.name || '') + '"></label>' +
          '<label class="f">Email <span style="color:#F2C73D">*</span>' +
            '<input type="email" name="email" required autocomplete="email" value="' + esc(prev.email || '') + '" placeholder="you@yourbusiness.com"></label>' +
          '<label class="f">Business <span style="color:#9FB3C6;font-weight:400">(optional)</span>' +
            '<input type="text" name="business" autocomplete="organization" value="' + esc(prev.business || '') + '"></label>' +
          '<div class="rg-opts">' +
            '<p>Want anything else? Tick what you want. Nothing is required, and your download is not affected.</p>' +
            '<label class="c"><input type="checkbox" name="opt" value="Weekly letter"><span>The free weekly letter</span></label>' +
            '<label class="c"><input type="checkbox" name="opt" value="Course updates"><span>Course updates</span></label>' +
            '<label class="c"><input type="checkbox" name="opt" value="New downloads"><span>New free downloads when I make them</span></label>' +
            '<label class="c"><input type="checkbox" name="opt" value="Live YouTube sessions"><span>Live YouTube sessions</span></label>' +
          '</div>' +
          '<button class="go" type="submit">Get the download</button>' +
          '<p class="rg-fine">No pitch, and I don\'t sell or share your address. Unsubscribe any time.</p>' +
        '</form>' +
      '</div>';

    document.body.appendChild(back);
    open = back;
    document.addEventListener("keydown", onKey);

    back.querySelector(".rg-x").addEventListener("click", close);
    back.addEventListener("click", function (e) { if (e.target === back) close(); });

    var form = back.querySelector("form");
    var email = form.querySelector('input[name=email]');
    (prev.email ? form.querySelector('input[name=name]') : email).focus();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var btn = form.querySelector("button.go");
      btn.disabled = true; btn.textContent = "Sending…";

      var opts = [].slice.call(form.querySelectorAll('input[name=opt]:checked'))
                   .map(function (c) { return c.value; });
      var o = {
        form: "download",
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        business: form.business.value.trim(),
        which: what,
        wants: opts.join(" · "),
        site: location.hostname,
        source: "Download gate",
        submittedAt: new Date().toISOString()
      };
      remember(o);

      if (ENDPOINT) {
        try {
          fetch(ENDPOINT, { method: "POST", mode: "no-cors", body: new URLSearchParams(o) })
            .catch(function () {});
        } catch (err) {}
      }

      // Opaque response: we can never know if that worked, so never make the
      // download wait on it.
      close();
      deliver(a);
    });
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[data-gated]") : null;
    if (!a) return;
    e.preventDefault();
    show(a);
  });
})();
