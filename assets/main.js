/* ============================================================
   NAV — IntersectionObserver sentinel (no scroll listener at all)
   ============================================================ */
(() => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!nav) return;

  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:24px;left:0;width:1px;height:1px;pointer-events:none;';
  document.body.prepend(sentinel);

  if ('IntersectionObserver' in window) {
    const navIO = new IntersectionObserver(
      ([entry]) => nav.classList.toggle('is-scrolled', !entry.isIntersecting),
      { threshold: 0 }
    );
    navIO.observe(sentinel);
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
})();

/* ============================================================
   SMOOTH SCROLL — JS-driven for in-page anchors with nav offset
   ============================================================ */
(() => {
  const NAV_OFFSET = 72;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    history.pushState(null, '', id);
  });
})();

/* ============================================================
   SCROLL REVEAL — IntersectionObserver with will-change lifecycle
   ============================================================ */
(() => {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      el.classList.add('is-priming');
      requestAnimationFrame(() => {
        el.classList.add('is-visible');
        el.addEventListener('transitionend', () => el.classList.remove('is-priming'), { once: true });
      });
      io.unobserve(el);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
})();

/* Auto-update any [data-year] elements */
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
