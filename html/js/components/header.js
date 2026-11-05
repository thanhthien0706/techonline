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
const mobileUtility = document.querySelector('.site-header__utility');
const siteHeaderMainInner = document.querySelector('.site-header__main-inner');

// On mobile the utility links move inside the category drawer so it reads
// as one menu instead of two separate floating pieces; on desktop/tablet
// they're moved back to their original spot in the header row.
function syncMobileDrawerLayout() {
  if (!categoryMenu || !mobileUtility) return;
  if (isMobileHeaderViewport()) {
    if (mobileUtility.parentElement !== categoryMenu) {
      categoryMenu.appendChild(mobileUtility);
    }
  } else if (siteHeaderMainInner && mobileUtility.parentElement !== siteHeaderMainInner) {
    siteHeaderMainInner.appendChild(mobileUtility);
  }
}

if (categoryMenu && mobileUtility) {
  syncMobileDrawerLayout();
  window.matchMedia('(max-width: 600px)').addEventListener('change', syncMobileDrawerLayout);
}

if (mobileToggle && siteHeader) {
  mobileToggle.addEventListener('click', () => {
    siteHeader.classList.remove('is-mobile-search-open');
    const isOpen = siteHeader.classList.toggle('is-mobile-open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Tapping the backdrop (or anywhere outside the drawer) closes it.
  document.addEventListener('click', (event) => {
    if (
      siteHeader.classList.contains('is-mobile-open') &&
      !mobileToggle.contains(event.target) &&
      !(categoryMenu && categoryMenu.contains(event.target)) &&
      !(mobileUtility && mobileUtility.contains(event.target))
    ) {
      siteHeader.classList.remove('is-mobile-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      siteHeader.classList.remove('is-mobile-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const mobileSearchForm = document.querySelector('.site-header__search');
const mobileSearchInput = document.querySelector('.site-header__search-input');
const mobileSearchBtn = document.querySelector('.site-header__search-btn');

function isMobileHeaderViewport() {
  return window.matchMedia('(max-width: 600px)').matches;
}

if (mobileSearchForm && mobileSearchInput && mobileSearchBtn && siteHeader) {
  mobileSearchBtn.addEventListener('click', (event) => {
    if (isMobileHeaderViewport() && !siteHeader.classList.contains('is-mobile-search-open')) {
      event.preventDefault();
      siteHeader.classList.remove('is-mobile-open');
      siteHeader.classList.add('is-mobile-search-open');
      mobileSearchInput.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      isMobileHeaderViewport() &&
      siteHeader.classList.contains('is-mobile-search-open') &&
      !mobileSearchForm.contains(event.target)
    ) {
      siteHeader.classList.remove('is-mobile-search-open');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      siteHeader.classList.remove('is-mobile-search-open');
    }
  });
}
