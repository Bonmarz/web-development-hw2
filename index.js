/* ------------ Mobile menu / hamburger ------------ */
const navToggle = document.getElementById('nav-toggle');
const siteNav   = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  siteNav.classList.toggle('open');
});

/* ---------------- Shopping cart logic ---------------- */
/* (your current cart code follows here) */
