const initHeroSlider = () => {
  const slider = document.getElementById('js-hero-slider');
  if (!slider) return;

  const track = document.getElementById('js-hero-track');
  const slides = Array.from(track.children);
  const dots = Array.from(document.getElementById('js-hero-dots').children);
  const prevBtn = document.getElementById('js-hero-prev');
  const nextBtn = document.getElementById('js-hero-next');
  const slideCount = slides.length;
  const autoplayDelay = 4000;

  let currentIndex = 0;
  let autoplayTimer = null;

  const goToSlide = (index) => {
    currentIndex = (index + slideCount) % slideCount;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, autoplayDelay);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goToSlide(Number(dot.dataset.index));
      startAutoplay();
    });
  });

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  goToSlide(0);
  startAutoplay();
};

document.addEventListener('DOMContentLoaded', initHeroSlider);
