// Renders the order summary on the checkout page (thanh-toan.html) and
// handles the (client-only, no backend) order submission.
(() => {
  const formWrap = document.getElementById('js-checkout-form-wrap');
  const summaryEl = document.getElementById('js-checkout-summary');
  const emptyEl = document.getElementById('js-checkout-empty');
  const successEl = document.getElementById('js-checkout-success');
  const form = document.getElementById('js-checkout-form');
  const errorEl = document.getElementById('js-checkout-error');
  const bankContentEl = document.getElementById('js-bank-content');
  const bankConfirmEl = document.getElementById('js-bank-confirm');
  if (!form) return;

  function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderSummary() {
    const items = Cart.getItems();

    if (!items.length) {
      formWrap.hidden = true;
      summaryEl.innerHTML = '';
      emptyEl.hidden = false;
      return false;
    }

    emptyEl.hidden = true;
    formWrap.hidden = false;

    const subtotal = Cart.subtotal();
    const hasContactOnly = Cart.hasContactOnlyItems();

    summaryEl.innerHTML = `
      <h2 class="checkout-summary__title">Đơn hàng của bạn (${items.reduce((s, i) => s + i.qty, 0)} sản phẩm)</h2>
      ${items.map((item) => `
        <div class="checkout-summary__item">
          <img src="${escapeHtml(item.image)}" alt="" />
          <div>
            <p class="checkout-summary__item-name">${escapeHtml(item.name)}</p>
            <p class="checkout-summary__item-meta">SL: ${item.qty} &times; ${item.priceValue === null ? item.priceText : Cart.formatVND(item.priceValue)}</p>
          </div>
        </div>
      `).join('')}
      <div class="checkout-summary__total">
        <span>Tổng cộng</span>
        <span class="checkout-summary__total-value">${Cart.formatVND(subtotal)}</span>
      </div>
      ${hasContactOnly ? '<p class="cart-summary__note">Một số sản phẩm chưa có giá công khai, nhân viên sẽ liên hệ báo giá trước khi giao hàng.</p>' : ''}
    `;
    return true;
  }

  function randomOrderCode() {
    return 'TO' + Date.now().toString().slice(-8);
  }

  // Generated once per visit so the "Nội dung CK" shown before paying
  // matches the order code shown after the order is placed.
  const orderCode = randomOrderCode();
  if (bankContentEl) bankContentEl.textContent = orderCode;

  document.querySelectorAll('.bank-transfer__copy').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;
      navigator.clipboard.writeText(targetEl.textContent.trim()).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Đã chép';
        btn.classList.add('is-copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('is-copied');
        }, 1500);
      });
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('js-checkout-name').value.trim();
    const phone = document.getElementById('js-checkout-phone').value.trim();
    const address = document.getElementById('js-checkout-address').value.trim();
    const paymentMethod = form.querySelector('input[name="payment"]:checked').value;

    if (!name || !phone || !address) {
      errorEl.textContent = 'Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ nhận hàng.';
      return;
    }
    if (!/^[0-9+\s]{9,13}$/.test(phone)) {
      errorEl.textContent = 'Số điện thoại không hợp lệ.';
      return;
    }
    if (paymentMethod === 'bank' && bankConfirmEl && !bankConfirmEl.checked) {
      errorEl.textContent = 'Vui lòng xác nhận bạn đã chuyển khoản trước khi đặt hàng.';
      return;
    }
    errorEl.textContent = '';

    Cart.clear();

    formWrap.hidden = true;
    summaryEl.innerHTML = '';
    successEl.hidden = false;
    successEl.querySelector('#js-checkout-order-code').textContent = orderCode;
  });

  renderSummary();
})();
