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

// Kapcsolati űrlap küldése (FormSubmit AJAX, oldalfrissítés nélkül)
(function () {
  var form = document.getElementById('cform');
  if (!form) return;
  var status = document.getElementById('cf-status');
  var btn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form._honey && form._honey.value) return; // spam-csapda
    var url = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    status.className = 'form-status';
    btn.disabled = true;
    var label = btn.innerHTML;
    btn.textContent = 'Küldés…';
    fetch(url, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.success === true || data.success === 'true') {
          form.reset();
          status.className = 'form-status ok';
          status.textContent = 'Köszönjük, üzenetét elküldtük! Hamarosan válaszolunk.';
        } else {
          throw new Error('nem sikerült');
        }
      })
      .catch(function () {
        status.className = 'form-status err';
        status.innerHTML = 'Az üzenet küldése nem sikerült. Kérjük, írjon a <a href="mailto:mislenyiallatorvos@gmail.com">mislenyiallatorvos@gmail.com</a> címre, vagy telefonáljon.';
      })
      .then(function () { btn.disabled = false; btn.innerHTML = label; });
  });
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
