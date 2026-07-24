// Mobil menü
(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// A mai nap kiemelése a nyitvatartási kártyán
(function () {
  var day = new Date().getDay(); // 0 = vasárnap
  var rows = document.querySelectorAll('.hours-table tr[data-day]');
  rows.forEach(function (row) {
    var d = parseInt(row.getAttribute('data-day'), 10);
    if (d === day || (d === 6 && (day === 6 || day === 0))) {
      row.classList.add('today');
    }
  });
})();

// Finom megjelenés görgetésre
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
