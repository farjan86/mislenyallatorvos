// Mobil menü
(function () {
  var burger = document.getElementById('burger');
  var links = document.getElementById('nav-links');
  if (!burger || !links) return;
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();

// A mai nap kiemelése a nyitvatartási táblázatban + hero badge
(function () {
  var day = new Date().getDay(); // 0 = vasárnap
  document.querySelectorAll('.hours tr[data-day]').forEach(function (row) {
    var d = parseInt(row.getAttribute('data-day'), 10);
    if (d === day || (d === 6 && (day === 6 || day === 0))) row.classList.add('today');
  });

  var badge = document.getElementById('today-badge');
  if (badge) {
    var texts = {
      0: 'Ma ügyelet · Pécs, 8–20',
      1: 'Ma nyitva · 9–11 és 16–18',
      2: 'Ma nyitva · 16–18',
      3: 'Ma nyitva · 9–11 és 16–18',
      4: 'Ma nyitva · 16–18',
      5: 'Ma nyitva · 16–18',
      6: 'Ma ügyelet · Pécs, 8–20'
    };
    badge.innerHTML = '<span class="dot"></span>' + texts[day];
  }
})();

// Finom megjelenés görgetésre
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
