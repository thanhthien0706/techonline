const backToTop = document.getElementById('js-back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 300);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const compareToggle = document.querySelector('.compare-bar__toggle');
if (compareToggle) {
  compareToggle.addEventListener('click', () => {
    compareToggle.closest('.compare-bar').classList.toggle('is-open');
  });
}
