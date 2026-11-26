/* Save as PDF — Run It Like the Rich
 *
 * Adds a "Save as PDF" button to every page where someone gets results:
 * the ABC Scorecard, the checklists, the Clean Start, and the question
 * forms. Clicking it opens the browser's print window with only that
 * section showing; "Save as PDF" is the destination on every modern
 * browser and phone. No library, no upload: the page never leaves their
 * device.
 */
(function () {
  var TARGETS = [
    // [what to print, where the button goes]
    ['.sc-grid', '.sc-res .stack'],                 // ABC Owner Scorecard
    ['[data-tool]', '#tool-send .row'],             // checklist pages
    ['main', '.resetrow'],                          // Clean Start checklist
    ['#f', '#f']                                    // ask / welcome question forms
  ];

  var css = '' +
    '.pdf-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:10px 20px;' +
    'border-radius:999px;font:700 15px/1.2 Figtree,system-ui,sans-serif;cursor:pointer;border:2px solid currentColor;' +
    'background:transparent;color:inherit;margin-top:10px}' +
    '.pdf-btn:hover{opacity:.85}' +
    '.pdf-head{display:none}' +
    '@media print{' +
    '  @page{margin:14mm}' +
    '  html,body{background:#fff!important;color:#111!important}' +
    '  .pdf-hide{display:none!important}' +
    '  .pdf-target{max-width:none!important;width:auto!important;margin:0!important;padding:0!important;box-shadow:none!important}' +
    '  .pdf-target *{color:#111!important;text-shadow:none!important;box-shadow:none!important;background-color:transparent!important;background-image:none!important}' +
    '  .pdf-target .bar{background:#e6e1d6!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
    '  .pdf-target .bar i,.pdf-target [id^=bar-] {background:#c89a45!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
    '  .pdf-target button,.pdf-target .btn,.pdf-target .pdf-btn,.pdf-target [type=submit]{display:none!important}' +
    '  .pdf-target textarea{display:none!important}' +
    '  .pdf-copy{display:block!important;white-space:pre-wrap;border:1px solid #ccc;border-radius:6px;padding:8px 10px;font:13px/1.5 system-ui,sans-serif;margin-top:4px}' +
    '  .pdf-head{display:block!important;border-bottom:2px solid #c89a45;padding-bottom:8px;margin-bottom:16px;font:13px/1.4 system-ui,sans-serif}' +
    '  .pdf-head b{display:block;font:700 20px/1.25 Georgia,serif;color:#13243b!important}' +
    '  .pdf-target details{display:block}.pdf-target details>*{display:block!important}' +
    '  .pdf-target fieldset,.pdf-target li,.pdf-target .card{break-inside:avoid}' +
    '  .pdf-anc{background:#fff!important;background-image:none!important;padding:0!important;margin:0!important;min-height:0!important;box-shadow:none!important;border:0!important}' +
    '  .pdf-target.sc-grid{display:flex!important;flex-direction:column!important}.pdf-target .pdf-head{order:-2}.pdf-target .sc-res{order:-1;margin-bottom:18px;border:1px solid #ccc!important;border-radius:10px;padding:14px!important}' +
    '}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  function title() {
    var h = document.querySelector('h1');
    return (h ? h.textContent : document.title).replace(/\s+/g, ' ').trim();
  }

  function prepare(target) {
    var undo = [];
    // hide everything that is not the target or one of its ancestors
    var node = target;
    while (node && node !== document.body) {
      var p = node.parentNode;
      Array.prototype.forEach.call(p.children, function (sib) {
        if (sib !== node && sib.tagName !== 'SCRIPT' && sib.tagName !== 'STYLE') {
          sib.classList.add('pdf-hide'); undo.push(function () { sib.classList.remove('pdf-hide'); });
        }
      });
      node = p;
      if (node !== document.body) { node.classList.add('pdf-anc'); (function (n) { undo.push(function () { n.classList.remove('pdf-anc'); }); })(node); }
    }
    target.classList.add('pdf-target');
    undo.push(function () { target.classList.remove('pdf-target'); });

    // a heading so the PDF says what it is and when it was made
    var head = document.createElement('div');
    head.className = 'pdf-head';
    var d = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    head.innerHTML = '<b></b><span></span>';
    head.querySelector('b').textContent = title();
    head.querySelector('span').textContent = 'Run It Like the Rich · ' + location.hostname.replace(/^www\./, '') + ' · ' + d;
    target.insertBefore(head, target.firstChild);
    undo.push(function () { head.remove(); });

    // textareas print badly (cut off); print their text instead
    target.querySelectorAll('textarea').forEach(function (t) {
      if (!t.value.trim()) return;
      var c = document.createElement('div');
      c.className = 'pdf-copy';
      c.textContent = t.value;
      t.parentNode.insertBefore(c, t.nextSibling);
      undo.push(function () { c.remove(); });
    });
    // open collapsed sections so nothing is missing
    target.querySelectorAll('details:not([open])').forEach(function (dt) {
      dt.open = true; undo.push(function () { dt.open = false; });
    });
    return function () { undo.forEach(function (f) { f(); }); };
  }

  function save(target) {
    var restore = prepare(target);
    var done = false;
    function after() { if (done) return; done = true; restore(); window.removeEventListener('afterprint', after); }
    window.addEventListener('afterprint', after);
    setTimeout(function () {
      window.print();
      // some phones never fire afterprint
      setTimeout(after, 1500);
    }, 50);
  }

  function add() {
    var used = false;
    TARGETS.forEach(function (t) {
      if (used) return;
      var target = document.querySelector(t[0]);
      var spot = document.querySelector(t[1]);
      if (!target || !spot) return;
      if (t[0] === 'main' && !document.querySelector('.resetrow')) return;
      used = true;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pdf-btn';
      b.textContent = 'Save as PDF';
      b.setAttribute('aria-label', 'Save ' + title() + ' as a PDF');
      b.addEventListener('click', function () { save(target); });
      spot.appendChild(b);
      // checklists also get one next to the progress box at the top
      if (t[0] === '[data-tool]') {
        var aside = document.querySelector('.hero-grid .freebie');
        if (aside) {
          var b2 = b.cloneNode(true);
          b2.addEventListener('click', function () { save(target.closest('section') || target); });
          aside.appendChild(b2);
        }
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add);
  else add();
})();
