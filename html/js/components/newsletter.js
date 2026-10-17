const initNewsletterForm = () => {
  const form = document.getElementById('js-newsletter-form');
  if (!form) return;

  const input = document.getElementById('js-email-newsletter');
  const message = document.getElementById('js-newsletter-message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (!emailPattern.test(email)) {
      message.textContent = 'Vui lòng nhập đúng định dạng email.';
      message.classList.add('is-visible', 'is-error');
      return;
    }

    message.textContent = 'Cảm ơn bạn đã đăng ký!';
    message.classList.remove('is-error');
    message.classList.add('is-visible');
    form.reset();
  });
};

document.addEventListener('DOMContentLoaded', initNewsletterForm);
