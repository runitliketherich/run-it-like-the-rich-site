#!/usr/bin/env python3
"""Build Laura's connected sites.

  python3 build.py            -> preview/ (one artifact, pages link to each other)
                                 deploy/<domain>/index.html (one standalone file per domain)

Edit CONFIG below, run again, re-upload. Blank values fall back safely:
  booking/join links fall back to the contact form on laurapoincot.com,
  phone/chat buttons hide themselves.
"""
import base64, html, json, pathlib, re, shutil, sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
sys.path.insert(0, str(SRC))
from tools import TOOLS, FREEBIE

CONFIG = {
    "email": "support@thehq.online",
    "phone": "",          # mobile for texts, e.g. "407-555-0123"
    "chatUrl": "",        # instant chat link, e.g. WhatsApp wa.me/1407..., Messenger m.me/..., or a live-chat page
    "bookingUrl": "https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support",
    "joinUrl": "",        # HQ Club checkout / payment link
    # Every form on every site posts here. One Apps Script, one spreadsheet,
    # one tab per form type. See _source/../radar/lead-catcher-apps-script.gs
    "formCatcher": "https://script.google.com/macros/s/AKfycbx5KL4TPVBKPqiPIPQvIVYM-Ri819CEbT5kloJ3_enwWXv9SxBVECrlfzzIlWyu6rboAA/exec",
    "formEndpoint": "",   # legacy Formspree slot; formCatcher takes precedence
    "qboInviteEmail": "laurapoincot@gmail.com",  # email clients invite as their QuickBooks accountant
    "waitlistEndpoint": "",  # optional: where waitlist sign-ups are sent (e.g. the Apps Script URL)
    "intakeEndpoint": "", # Google Apps Script web app URL for the HQ Club intake (see _source/intake-apps-script.gs)
    "substackUrl": "https://runitliketherich.substack.com/",
    "youtubeUrl": "https://www.youtube.com/@RunItLikeTheRich",
    "instagramUrl": "https://www.instagram.com/runitliketherich/",
    "facebookUrl": "https://www.facebook.com/profile.php?id=61583470245237",
    "linkedinUrl": "https://www.linkedin.com/in/run-it-like-the-rich-with-laura-poincot/",
    "tiktokUrl": "",
    "shopUrl": "",
    "signupEndpoint": "",  # optional: email-list endpoint; blank = send people to the Substack subscribe page
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
    ("hq", "thehq.online", "The HQ Club", "Coming soon. Join the waitlist to hear first.",
     "The HQ Club", "Early access to the HQ Club: every Admin, Books and Compliance system built for your business."),
    ("vhq", "virtualhq.online", "Virtual HQ", "One operating map that connects the tools you already use.",
     "Virtual HQ", "Virtual HQ: one controlled operating environment for your business."),
    ("riltr", "runitliketherich.com", "Run It Like the Rich", "The operator mindset: articles, the Reset, and merch.",
     "Run It Like the Rich", "Admin, Books, Compliance. Keep it lean. Keep it clean. Run it like the rich."),
    ("gaap", "trainthegaap.com", "Train the GAAP", "Bookkeeper oversight: GAAP, best practices and the why.",
     "Train the GAAP", "Train the GAAP is a bookkeeper oversight program: an ABC Review, a review of your books, then a meeting to explain every error and change. GAAP (Generally Accepted Accounting Principles) plus business and industry best practices."),
    ("exit", "storybookexit.com", "StoryBook Exit", "Get your business ready to sell, years before you sell it.",
     "StoryBook Exit", "A 24–30 month pre-sale operating program for owners 5–10 years from retirement."),
]
BY_KEY = {s[0]: s for s in SITES}

# Sites that still build and stay reachable at their own domain, but are not
# promoted in the "Our sites" strip, the footer grid or the nav.
#   hub — keeps Laura's name off every page of the network
#   hq  — HQ Club has no checkout yet, so every link to it dead-ends
HIDDEN = {"hub", "hq"}
SHOWN = [s for s in SITES if s[0] not in HIDDEN]
NUMWORD = {2: "two", 3: "three", 4: "four", 5: "five", 6: "six"}

def b64(p):
    return "data:image/png;base64," + base64.b64encode((SRC / p).read_bytes()).decode()

MARK_GOLD = b64("mark-navy.png")  # light look: navy script on cream
MARK_NAVY = b64("mark-navy.png")
CSS = (SRC / "shared.css").read_text() + "\n" + (SRC / "established.css").read_text()

def url_for(key, mode, anchor=""):
    if key == "clean":
        return "https://claude.ai/artifact/Sc7ySwDKDSyn73bFjAPsm3" if mode == "preview" else "https://runitliketherich.com/clean-start"
    if key in TOOLS:
        t = TOOLS[key]
        return f"{t['slug']}.html" if mode == "preview" else f"https://{BY_KEY[t['site']][1]}/{t['slug']}"
    if mode == "preview":
        f = "index.html" if key == "hub" else f"{key}.html"
        return f + (f"#{anchor}" if anchor else "")
    return f"https://{BY_KEY[key][1]}/" + (f"#{anchor}" if anchor else "")

def link_attrs(href):
    return ' target="_blank" rel="noopener"' if href.startswith("http") else ""

def header(key, mode):
    s = BY_KEY[key]
    join = CONFIG["substackUrl"]
    cur = ' aria-current="page"'
    strip = "".join(
        f'<a href="{url_for(k, mode)}"{cur if k == key else ""}>{dom}</a>' for k, dom, *_ in SHOWN)
    # Verbs, not product names. A visitor reads "Train" faster than
    # "Train the GAAP" and does not have to decode a brand first.
    links = [("vhq", "Build"), ("gaap", "Train"), ("exit", "Exit"), ("riltr", "Read")]
    # On runitliketherich.com the first two go to the pages on this site, not
    # across to the other domains; a visitor should be able to read about
    # everything without leaving.
    local = {"vhq": "virtual-hq", "gaap": "train-the-gaap"}
    def href(k):
        if key == "riltr" and k in local:
            return ("/" if mode == "deploy" else "") + local[k] + (".html" if mode == "preview" else "")
        return url_for(k, mode)
    nav = "".join(
        f'<a class="lnk" href="{href(k)}">{t}</a>' for k, t in links if k != key)
    about_href = ("/about" if mode == "deploy" else "about.html")
    nav = f'<a class="lnk" href="{about_href}">About</a>' + nav if key == "hub" else nav
    if key == "riltr":
        shop_href = ("/products" if mode == "deploy" else "products.html")
        nav = f'<a class="lnk" href="{shop_href}">Shop</a>' + nav
    contact = url_for("hub", mode, "contact")
    home_name = "Laura Poincot" if key == "hub" else s[2]
    return f'''<div class="strip"><div class="wrap"><span>Our sites</span>{strip}</div></div>
<header class="top"><div class="wrap">
  <a class="home" href="{url_for(key, mode)}"><b>{home_name}</b><span>Run It Like the Rich</span></a>
  <nav aria-label="Sites">{nav}<a class="lnk" href="{contact}">Talk</a>
  <a class="btn btn-gold btn-sm" href="{join}"{link_attrs(join)}>Free weekly letter</a></nav>
</div></header>'''

def footer(key, mode):
    cards = []
    for k, dom, name, line, *_ in SHOWN:
        cls = ' class="here"' if k == key else ""
        cards.append(f'<a{cls} href="{url_for(k, mode)}"><span>{dom}</span><b>{name}</b><em>{line}</em></a>')
    book = CONFIG["bookingUrl"] or url_for("hub", mode, "book")
    return f'''<footer class="family on-navy"><div class="wrap">
  <p class="eyebrow" style="color:var(--gold)">One system, {NUMWORD.get(len(SHOWN), len(SHOWN))} front doors</p>
  <h2>Every site leads to the same place: a business that runs without you.</h2>
  <div class="fam-grid">{"".join(cards)}</div>
  <div class="follow">
    <div class="stack" style="gap:8px"><b>Follow along</b><div class="socs">{social_links()}</div>
    <b style="margin-top:10px">Free checklists</b><div class="socs"><a class="soc" href="{url_for("clean", mode)}">Clean Start</a><a class="soc" href="{url_for("goals-vision", mode)}">Goals &amp; Vision</a><a class="soc" href="{url_for("qbo-learning", mode)}">QuickBooks Learning List</a><a class="soc" href="{url_for("exit-plan", mode)}">Exit Plan</a></div></div>
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
  // free checklist sign-up
  document.querySelectorAll('.fb-form').forEach(function(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      if(!f.reportValidity()) return;
      var em = f.querySelector('input[type=email]').value.trim();
      // Log it AND subscribe them. These used to be either/or, which meant
      // turning on logging would have quietly stopped the Substack sign-up.
      var ep = C.formCatcher || C.signupEndpoint;
      if(ep){
        fetch(ep, {method:'POST', mode:'no-cors', body: new URLSearchParams({
          form: 'freebie', email: em,
          which: f.getAttribute('data-source') || 'Free checklist',
          site: location.hostname, source: 'Free checklist'
        })}).catch(function(){});
      }
      // The Substack sign-up opens in a background tab. It used to open in
      // the foreground, which threw the reader onto Substack and left the
      // checklist sitting unseen on the tab they had just left.
      if(C.substackUrl){
        var sub = C.substackUrl.replace(/\/$/, '') + '/subscribe?email=' + encodeURIComponent(em);
        var w = window.open(sub, '_blank', 'noopener');
        if(w && w.blur){ try{ w.blur(); window.focus(); }catch(err){} }
      }
      f.hidden = true;
      var done = f.parentNode.querySelector('.fb-done');
      if(done) done.hidden = false;
      // Then take them straight to the checklist, which is what they asked for.
      var goal = done && done.querySelector('a[href]');
      if(goal){ setTimeout(function(){ location.href = goal.href; }, 400); }
    });
  });
  // topic preselect from #book / #join / #message
  var form = document.getElementById('cf');
  function pick(){
    if(!form) return;
    var map = {book:'Book a call', join:'HQ Club waitlist', fullservice:'Full-service options', message:'Quick question'};
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
      if(C.formCatcher){
        show('Sending…');
        o.form = 'call'; o.site = location.hostname; o.source = o.topic || 'Contact form';
        o.bestTime = o.reach || '';
        // no-cors: the Apps Script answers with a redirect no browser will
        // let us read, so we never learn if it worked. Showing the happy
        // message is the right call — the row lands either way, and a scary
        // error on a form that did send is worse than no confirmation.
        fetch(C.formCatcher, {method:'POST', mode:'no-cors', body: new URLSearchParams(o)})
          .catch(function(){});
        form.reset();
        show('Got it. Laura will come back to you — usually same day.');
      } else if(C.formEndpoint){
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
        "{{EMAIL}}": CONFIG["email"], "{{QBO_EMAIL}}": CONFIG["qboInviteEmail"], "{{SOCIAL}}": social_links("soc soc-light"), "{{SCORECARD}}": (SRC / "partials" / "scorecard.html").read_text(),
    }
    body = body.replace("{{CLEAN}}", url_for("clean", mode))
    body = body.replace("{{INTAKE}}", (SRC / "partials" / "waitlist.html").read_text().replace("__CONFIG__", json.dumps(CONFIG)))
    for part in ("offer", "fullservice", "cta"):
        body = body.replace("{{%s}}" % part.upper(), (SRC / "partials" / f"{part}.html").read_text())
    for k, v in reps.items():
        body = body.replace(k, v)
    body = re.sub(r"\{\{URL:(\w+)(?:#(\w+))?\}\}", lambda m: url_for(m.group(1), mode, m.group(2) or ""), body)
    return body

def page(key, mode, standalone, raw=None, title=None, desc=None, path=""):
    s = BY_KEY[key]
    is_tool = raw is not None
    if raw is None:
        raw = (SRC / "pages" / f"{key}.html").read_text()
    # hero: two columns, text left, free checklist sign-up right
    start = -1 if is_tool else raw.index('<section class="band hero"><div class="wrap">')
    end = 0 if is_tool else raw.index('</div></section>', start)
    tk, ft, fd, fbl = FREEBIE[key]
    if tk in TOOLS:
        t = TOOLS[tk]; ft, fd, fbl = t["title"], t["lead"].split(". ")[0] + ".", t["bullets"]
    fb = ((SRC / "partials" / "freebie.html").read_text().replace("{{FBID}}", key)
          .replace("{{FB_TITLE}}", html.escape(ft)).replace("{{FB_DESC}}", html.escape(fd))
          .replace("{{FB_BULLETS}}", "".join(f"<li>{html.escape(b)}</li>" for b in fbl))
          .replace("{{FB_LINK}}", url_for(tk, mode)))
    if not is_tool: raw = raw[:start] + raw[start:end].replace('<div class="wrap">', '<div class="wrap hero-grid">', 1) + fb + raw[end:]
    body = fill(raw, key, mode)
    head = f'''<title>{title or s[4]}</title>
<meta name="description" content="{html.escape(desc or s[5])}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&family=Oswald:wght@500;700&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&display=swap">
<style>{CSS}</style>'''
    if mode == "deploy":
        head += f'\n<link rel="canonical" href="https://{s[1]}/{path}">\n<meta property="og:title" content="{s[4]}">\n<meta property="og:description" content="{html.escape(s[5])}">'
    js = JS.replace("__CONFIG__", json.dumps(CONFIG))
    # The download gate. Served per-domain so every site can gate its own
    # downloads; the endpoint is set before the script so it can read it.
    gate = (f'<script>window.RILTR_FORM_ENDPOINT={json.dumps(CONFIG["formCatcher"])};</script>'
            f'\n<script src="/gate.js" defer></script>\n<script src="/pdf.js" defer></script>')
    inner = f"{header(key, mode)}\n<main>{body}</main>\n{footer(key, mode)}\n{js}\n{gate}"
    if standalone:
        return f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n{head}\n</head><body>\n{inner}\n</body></html>\n'
    return f"{head}\n{inner}\n"

def tool_raw(tk):
    t = TOOLS[tk]
    groups = []
    n = 0
    for gi, (gt, gintro, items) in enumerate(t["groups"]):
        lis = []
        for ii, (txt, why) in enumerate(items):
            iid = f"{tk}-{gi}-{ii}"; n += 1
            w = f"<em>{html.escape(why)}</em>" if why else ""
            lis.append(f'<li><label for="{iid}"><input type="checkbox" id="{iid}" data-g="{gi}" data-t="{html.escape(txt)}"><span><b>{html.escape(txt)}</b>{w}</span></label></li>')
        groups.append(f'<div class="tgroup" id="g{gi}"><div class="tg-head"><h2>{html.escape(gt)}</h2><span class="tg-count" data-gc="{gi}">0 / {len(items)}</span></div><p class="muted">{html.escape(gintro)}</p><ul class="titems">{"".join(lis)}</ul></div>')
    notes = "".join(f'<label class="fl" for="n-{tk}-{k}">{html.escape(lbl)}<textarea id="n-{tk}-{k}" data-n="{html.escape(lbl)}" rows="2"></textarea></label>' for k, lbl in t["notes"])
    return f'''<section class="band"><div class="wrap" style="padding-block:clamp(40px,7vw,80px)">
  <div class="hero-grid">
    <div class="stack-lg">
      <p class="eyebrow">{html.escape(t["eyebrow"])}</p>
      <h1>{html.escape(t["title"])}</h1>
      <p class="lead">{html.escape(t["lead"])}</p>
    </div>
    <aside class="freebie" aria-live="polite">
      <p class="eyebrow">Your progress</p>
      <div class="sc-total"><span id="t-done">0</span><small> / {n} checked</small></div>
      <div class="bar"><i id="t-bar"></i></div>
      <p class="small muted">Your checks save in this browser. Send the list to Laura when you're ready.</p>
      <a class="btn btn-navy" href="#send">Send my list to Laura</a>
    </aside>
  </div>
</div></section>
<section class="sec"><div class="wrap tool" data-tool="{tk}" data-label="{html.escape(t["check_label"])}">
  {"".join(groups)}
  <div class="tgroup" id="send">
    <div class="tg-head"><h2>Send it to Laura</h2></div>
    <p class="muted">Add a few notes, then email your list. Laura will reply with where to start.</p>
    <form class="cf" id="tool-send" novalidate>
      <div class="f2">
        <label class="fl" for="ts-name">Name<input id="ts-name" name="name" required autocomplete="name"></label>
        <label class="fl" for="ts-email">Email<input id="ts-email" name="email" type="email" required autocomplete="email"></label>
      </div>
      <label class="fl" for="ts-biz">Business<input id="ts-biz" name="business" autocomplete="organization"></label>
      {notes}
      <label class="fl" for="ts-sum">Your list<textarea id="ts-sum" rows="8" readonly></textarea></label>
      <div class="row"><button class="btn btn-gold" type="submit">Email my list to Laura</button><button class="btn btn-line" type="button" id="ts-copy">Copy my list</button><a class="btn btn-line" href="{{{{BOOK}}}}"{{{{BOOK_ATTR}}}}>Book a call</a></div>
      <p class="status" id="ts-status" role="status" hidden></p>
    </form>
  </div>
</div></section>
{{{{CTA}}}}
<script>
(function(){{
  var C = __CONFIG__, root = document.querySelector('[data-tool]'), key = 'riltr-' + root.dataset.tool, st = {{}};
  try {{ st = JSON.parse(localStorage.getItem(key) || '{{}}'); }} catch(e) {{}}
  var boxes = root.querySelectorAll('input[type=checkbox]'), notes = root.querySelectorAll('textarea[data-n]');
  boxes.forEach(function(b){{ b.checked = !!(st.c && st.c[b.id]); }});
  notes.forEach(function(t){{ t.value = (st.n && st.n[t.id]) || ''; }});
  function save(){{ var c = {{}}, n = {{}}; boxes.forEach(function(b){{ if(b.checked) c[b.id] = 1; }}); notes.forEach(function(t){{ n[t.id] = t.value; }}); try {{ localStorage.setItem(key, JSON.stringify({{c:c, n:n}})); }} catch(e) {{}} }}
  function summary(){{
    var out = [document.querySelector('h1').textContent, ''];
    root.querySelectorAll('.tgroup[id^=g]').forEach(function(g){{
      var on = g.querySelectorAll('input:checked'); if(!on.length) return;
      out.push(g.querySelector('h2').textContent + ' (' + root.dataset.label + '):');
      on.forEach(function(b){{ out.push('- ' + b.dataset.t); }}); out.push('');
    }});
    notes.forEach(function(t){{ if(t.value.trim()) out.push(t.dataset.n + ': ' + t.value.trim()); }});
    document.getElementById('ts-sum').value = out.join('\\n');
  }}
  function update(){{
    var d = 0; boxes.forEach(function(b){{ if(b.checked) d++; }});
    document.getElementById('t-done').textContent = d;
    document.getElementById('t-bar').style.width = (d / boxes.length * 100) + '%';
    root.querySelectorAll('[data-gc]').forEach(function(s){{ var g = s.dataset.gc, all = root.querySelectorAll('input[data-g="' + g + '"]'), on = root.querySelectorAll('input[data-g="' + g + '"]:checked'); s.textContent = on.length + ' / ' + all.length; }});
    summary(); save();
  }}
  root.addEventListener('change', update); root.addEventListener('input', function(e){{ if(e.target.dataset.n !== undefined) update(); }});
  update();
  var f = document.getElementById('tool-send'), msg = document.getElementById('ts-status');
  document.getElementById('ts-copy').addEventListener('click', function(){{
    var s = document.getElementById('ts-sum');
    try {{ navigator.clipboard.writeText(s.value).then(function(){{ msg.textContent = 'Copied.'; msg.hidden = false; }}, function(){{ s.select(); }}); }} catch(e) {{ s.select(); }}
  }});
  f.addEventListener('submit', function(e){{
    e.preventDefault(); if(!f.reportValidity()) return;
    var name = document.getElementById('ts-name').value, em = document.getElementById('ts-email').value, biz = document.getElementById('ts-biz').value;
    var list = document.getElementById('ts-sum').value;
    if(C.formCatcher){{
      fetch(C.formCatcher, {{method:'POST', mode:'no-cors', body: new URLSearchParams({{
        form: 'checklist', name: name, email: em, business: biz,
        which: document.querySelector('h1').textContent,
        list: list, site: location.hostname, source: 'Checklist page'
      }})}}).catch(function(){{}});
      msg.textContent = 'Sent. Laura has your list and will reply with where to start.'; msg.hidden = false;
      return;
    }}
    var body = 'Name: ' + name + '\\nEmail: ' + em + '\\nBusiness: ' + biz + '\\n\\n' + list;
    location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent(document.querySelector('h1').textContent + ' – ' + name) + '&body=' + encodeURIComponent(body);
    msg.textContent = 'Your email app should open with your list ready to send. If it didn\\'t, copy your list and email ' + C.email + '.'; msg.hidden = false;
  }});
}})();
</script>'''.replace("__CONFIG__", json.dumps(CONFIG))


# Subject pages on runitliketherich.com. Bodies live in src/pages/<slug>.html
# and are passed to page() as raw, so they skip the hero/freebie injection.
INFO_PAGES = {
    "products":       ("riltr", "Everything in one place", "The ABC Review, ABC Starter, Support Blocks, the Virtual HQ template, the Done-for-You Reset and the free checklists \u2014 every option and what it costs."),
    "about":          ("hub", "About Laura Poincot", "Twenty-seven years inside other people's books: financial system data repair, multi-entity accounting and exit-ready books."),
    "virtual-hq":     ("riltr", "Virtual HQ", "One owner-controlled place to run the business from, built inside the Google Workspace you already pay for."),
    "train-the-gaap": ("riltr", "Train the GAAP", "An oversight program that teaches your bookkeeper GAAP and gives them someone in their corner."),
    "abc-review":     ("riltr", "The ABC Review", "Score your back office across Admin, Books and Compliance, and see where it stands."),
    "retire-from":    ("riltr", "Building the Business You Can Retire From", "The series on getting a business ready to hand over, sell or step back from."),
    "slow-bleed":     ("riltr", "The Slow Bleed", "How going paperless cost small business owners control \u2014 and what it takes to get the back office back."),
    "mantras":        ("riltr", "Say them until they stick", "The operator lines worth repeating."),
}

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
        shutil.copy(SRC / "gate.js", out / "gate.js")   # every site gates its own downloads
        shutil.copy(SRC / "pdf.js", out / "pdf.js")     # "Save as PDF" on every results page
        if key == "riltr":
            PDFJS = '<script src="/pdf.js" defer></script>\n</body>'
            (out / "clean-start.html").write_text((SRC / "clean-start.html").read_text().replace("</body>", PDFJS, 1))
            (out / "ask.html").write_text((SRC / "ask.html").read_text().replace("</body>", PDFJS, 1))
            for f in ("proactive-bookkeeper-checklist.pdf", "radar.html"):
                shutil.copy(SRC / f, out / f)
            for m in ("laura-abc-framework.jpg", "ninetys-office.jpg"):
                src_m = SRC / "media" / m
                if src_m.exists():
                    shutil.copy(src_m, out / m)
                    shutil.copy(src_m, ROOT / "preview" / m)
            # Linked from the Substack welcome email. Standalone, so the
            # endpoint is injected here rather than hardcoded in the file.
            (out / "welcome.html").write_text(
                (SRC / "welcome.html").read_text()
                .replace("__ENDPOINT__", CONFIG["formCatcher"])
                .replace("</body>", '<script src="/pdf.js" defer></script>\n</body>', 1))
            # new-year.html is its own standalone document, so it never passes
            # through page(); inject the download gate on the way out.
            ny = (SRC / "new-year.html").read_text()
            if "gate.js" not in ny:
                ny = ny.replace("</body>",
                    f'<script>window.RILTR_FORM_ENDPOINT={json.dumps(CONFIG["formCatcher"])};</script>\n'
                    '<script src="/gate.js" defer></script>\n</body>')
            (out / "new-year.html").write_text(ny)
            # /start — the one page every product links from. Standalone too.
            (out / "start.html").write_text(
                (SRC / "start.html").read_text()
                .replace("__ENDPOINT__", CONFIG["formCatcher"]))
        if key == "vhq":
            for m in ("virtual-hq-tour.mp4", "virtual-hq-tour.jpg"):
                src = SRC / "media" / m
                if not src.exists():          # media is not committed; skip rather than die
                    print(f"  note: {m} not in _source/src/media, leaving the published copy alone")
                    continue
                shutil.copy(src, out / m)
                shutil.copy(src, ROOT / "preview" / m)
    for slug, (site, title, desc) in INFO_PAGES.items():
        src_body = SRC / "pages" / f"{slug}.html"
        if not src_body.exists():
            print(f"  note: pages/{slug}.html missing, skipped"); continue
        body = src_body.read_text()
        kw = dict(raw=body, title=title, desc=desc, path=slug)
        (ROOT / "preview" / f"{slug}.html").write_text(page(site, "preview", True, **kw))
        (ROOT / "deploy" / BY_KEY[site][1] / f"{slug}.html").write_text(page(site, "deploy", True, **kw))
    for tk, t in TOOLS.items():
        raw = tool_raw(tk)
        kw = dict(raw=raw, title=t["title"], desc=t["lead"], path=t["slug"])
        (ROOT / "preview" / f"{t['slug']}.html").write_text(page(t["site"], "preview", True, **kw))
        (ROOT / "deploy" / BY_KEY[t["site"]][1] / f"{t['slug']}.html").write_text(page(t["site"], "deploy", True, **kw))
    print("built", [p.name for p in (ROOT / "preview").iterdir()])

if __name__ == "__main__":
    main()
