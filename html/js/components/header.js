const siteHeader = document.getElementById('js-site-header');

if (siteHeader) {
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('is-sticky', window.scrollY > 10);
  }, { passive: true });
}

const categoryMenu = document.getElementById('js-category-menu');
const categoryBtn = document.getElementById('js-category-btn');

if (categoryMenu && categoryBtn) {
  categoryBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = categoryMenu.classList.toggle('is-open');
    categoryBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!categoryMenu.contains(event.target)) {
      categoryMenu.classList.remove('is-open');
      categoryBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

const mobileToggle = document.getElementById('js-mobile-toggle');

if (mobileToggle && siteHeader) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('is-mobile-open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
