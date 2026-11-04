(function () {
  const wrapper = document.getElementById('js-category-panel-wrap');
  const list = document.getElementById('js-category-list');
  const panel = document.getElementById('js-category-panel');

  if (!wrapper || !list || !panel || typeof menuData === 'undefined') return;

  function hasSubcategories(category) {
    return category.columns.some((column) =>
      column.some((group) => group.items && group.items.length > 0)
    );
  }

  function renderPanel(category) {
    panel.innerHTML = '';

    if (!hasSubcategories(category)) {
      panel.classList.remove('has-content');
      return;
    }

    panel.classList.add('has-content');

    const groupList = document.createElement('ul');
    groupList.className = 'category-menu__group-list';

    category.columns.forEach((column) => {
      column.forEach((group) => {
        group.items.forEach((label) => {
          const itemEl = document.createElement('li');
          const linkEl = document.createElement('a');
          linkEl.className = 'category-menu__group-link';
          linkEl.href = '#';
          linkEl.textContent = label;
          itemEl.appendChild(linkEl);
          groupList.appendChild(itemEl);
        });
      });
    });

    panel.appendChild(groupList);
  }

  function setActive(index) {
    const items = list.querySelectorAll('.category-menu__item');
    items.forEach((el, i) => el.classList.toggle('is-active', i === index));
    renderPanel(menuData[index]);
  }

  menuData.forEach((category, index) => {
    const item = document.createElement('li');
    item.className = 'category-menu__item';
    if (!hasSubcategories(category)) {
      item.classList.add('category-menu__item--no-sub');
    }

    const inner = category.href ? document.createElement('a') : document.createElement('span');
    inner.className = 'category-menu__item-link';
    if (category.href) inner.href = category.href;
    inner.innerHTML =
      '<span class="category-menu__icon">' + category.icon + '</span>' +
      '<span class="category-menu__label">' + category.title + '</span>';

    item.appendChild(inner);
    item.addEventListener('mouseenter', () => setActive(index));
    list.appendChild(item);
  });

  wrapper.addEventListener('mouseleave', () => {
    list.querySelectorAll('.category-menu__item.is-active').forEach((el) => {
      el.classList.remove('is-active');
    });
  });
})();
