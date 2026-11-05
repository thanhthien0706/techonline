function escapeHtmlSub(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderSubProductCard(p) {
  const href = p.href || '#';
  const hasPromo = Boolean(p.promo);
  const hasOldPrice = Boolean(p.oldPrice);
  const isContactPrice = p.price === 'Liên hệ';

  const ribbon = hasPromo
    ? `<div class="product-card__ribbon">
        <span class="product-card__ribbon-promo">Khuyến mãi đặc biệt</span>
        <span class="product-card__ribbon-percent">${p.promo}</span>
      </div>`
    : '';

  const newBadge = p.isNew ? `<span class="product-card__badge">Mẫu mới</span>` : '';

  const priceRow = isContactPrice
    ? `<p class="product-card__price product-card__price--contact">${p.price}</p>`
    : `${hasOldPrice ? `<span class="product-card__old-price">${p.oldPrice}</span>` : ''}
       <p class="product-card__price">${p.price}</p>
       ${p.discount ? `<span class="product-card__discount">${p.discount}</span>` : ''}`;

  const attrs = (p.attrs && p.attrs.length)
    ? `<div class="product-card__attrs">${p.attrs.map((a) => `<span class="product-card__attr">${escapeHtmlSub(a)}</span>`).join('')}</div>`
    : `<div class="product-card__attrs"></div>`;

  return `
    <article class="product-card">
      ${newBadge}
      <a href="${href}" class="product-card__img">
        <img src="${p.image}" alt="${escapeHtmlSub(p.name)}" loading="lazy">
        ${ribbon}
      </a>
      <div class="product-card__body">
        <a href="${href}" class="product-card__name"><h3>${escapeHtmlSub(p.name)}</h3></a>
        <div class="product-card__price-row">${priceRow}</div>
        ${attrs}
        <div class="product-card__actions">
          <a href="${href}" class="product-card__compare">So sánh</a>
          <button class="product-card__cart" type="button" aria-label="Thêm vào giỏ hàng">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="9" cy="21" r="1.4" fill="currentColor"/>
              <circle cx="17" cy="21" r="1.4" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </article>`;
}

function renderSubcategoryGroup(group) {
  const viewAll = (group.viewAllHref && group.viewAllHref !== '#')
    ? `<a href="${group.viewAllHref}" class="category-band__view-all">Xem tất cả <span>&rsaquo;</span></a>`
    : '';
  const empty = group.products.length
    ? ''
    : '<p class="category-band__empty">Sản phẩm đang được cập nhật</p>';

  return `
    <div class="category-band">
      <div class="category-band__title">
        <span class="category-band__title-text">${escapeHtmlSub(group.title)}</span>
        ${viewAll}
      </div>
      <div class="category-band__grid">
        ${group.products.map(renderSubProductCard).join('')}
      </div>
      ${empty}
    </div>`;
}

function mountSubcategoryPage() {
  const groupsEl = document.getElementById('js-subcategory-groups');
  if (groupsEl && Array.isArray(window.SUBCATEGORY_GROUPS)) {
    groupsEl.innerHTML = window.SUBCATEGORY_GROUPS.map(renderSubcategoryGroup).join('');
  }
}

document.addEventListener('DOMContentLoaded', mountSubcategoryPage);
