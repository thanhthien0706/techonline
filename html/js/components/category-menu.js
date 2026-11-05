(function () {
  const wrapper = document.getElementById('js-category-panel-wrap');
  const list = document.getElementById('js-category-list');
  const panel = document.getElementById('js-category-panel');

  if (!wrapper || !list || !panel || typeof menuData === 'undefined') return;

  function flattenItems(category) {
    const items = [];
    category.columns.forEach((column) => {
      column.forEach((group) => {
        group.items.forEach((item) => items.push(item));
      });
    });
    return items;
  }

  function hasSubcategories(category) {
    return flattenItems(category).length > 0;
  }

  function renderPanel(category) {
    panel.innerHTML = '';

    const items = flattenItems(category);
    if (!items.length) {
      panel.classList.remove('has-content');
      return;
    }

    panel.classList.add('has-content');

    const groupList = document.createElement('ul');
    groupList.className = 'category-menu__group-list';

    items.forEach((item) => {
      const itemEl = document.createElement('li');
      const linkEl = document.createElement('a');
      linkEl.className = 'category-menu__group-link';
      linkEl.href = item.href || '#';
      linkEl.textContent = item.label;
      itemEl.appendChild(linkEl);
      groupList.appendChild(itemEl);
    });

    panel.appendChild(groupList);
  }

  function buildMobileSublist(category) {
    const subList = document.createElement('ul');
    subList.className = 'category-menu__mobile-sublist';

    flattenItems(category).forEach((item) => {
      const itemEl = document.createElement('li');
      const linkEl = document.createElement('a');
      linkEl.href = item.href || '#';
      linkEl.textContent = item.label;
      itemEl.appendChild(linkEl);
      subList.appendChild(itemEl);
    });

    return subList;
  }

  function isMobileMenu() {
    return window.matchMedia('(max-width: 600px)').matches;
  }

  function setActive(index) {
    const items = list.querySelectorAll('.category-menu__item');
    items.forEach((el, i) => el.classList.toggle('is-active', i === index));
    renderPanel(menuData[index]);
  }

  function collapseExpanded(exceptItem) {
    list.querySelectorAll('.category-menu__item.is-expanded').forEach((el) => {
      if (el === exceptItem) return;
      el.classList.remove('is-expanded');
      const btn = el.querySelector('.category-menu__item-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  menuData.forEach((category, index) => {
    const item = document.createElement('li');
    item.className = 'category-menu__item';

    const inner = category.href ? document.createElement('a') : document.createElement('span');
    inner.className = 'category-menu__item-link';
    if (category.href) inner.href = category.href;
    inner.innerHTML =
      '<span class="category-menu__icon">' + category.icon + '</span>' +
      '<span class="category-menu__label">' + category.title + '</span>';

    item.appendChild(inner);
    // Mobile has no hover — a tap can still fire a synthetic mouseenter on
    // some browsers, which would otherwise pop open the desktop flyout.
    item.addEventListener('mouseenter', () => {
      if (isMobileMenu()) return;
      setActive(index);
    });
    list.appendChild(item);

    if (!hasSubcategories(category)) {
      item.classList.add('category-menu__item--no-sub');
      return;
    }

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'category-menu__item-toggle';
    toggleBtn.setAttribute('aria-label', 'Mở danh mục con');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';
    item.appendChild(toggleBtn);

    const subList = buildMobileSublist(category);
    item.appendChild(subList);

    // Mobile only: tapping the parent category (or its chevron) opens a
    // plain dropdown list of subcategories right below it — no grid, no
    // reuse of the desktop hover panel.
    function toggleMobileSublist(event) {
      if (!isMobileMenu()) return;
      event.preventDefault();
      event.stopPropagation();

      const willExpand = !item.classList.contains('is-expanded');
      collapseExpanded(item);
      item.classList.toggle('is-expanded', willExpand);
      toggleBtn.setAttribute('aria-expanded', String(willExpand));
    }

    inner.addEventListener('click', toggleMobileSublist);
    toggleBtn.addEventListener('click', toggleMobileSublist);
  });

  wrapper.addEventListener('mouseleave', () => {
    list.querySelectorAll('.category-menu__item.is-active').forEach((el) => {
      el.classList.remove('is-active');
    });
  });
})();
