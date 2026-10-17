(function () {
  const wrapper = document.getElementById('js-category-panel-wrap');
  const list = document.getElementById('js-category-list');
  const panel = document.getElementById('js-category-panel');

  if (!wrapper || !list || !panel || typeof menuData === 'undefined') return;

  function renderPanel(category) {
    panel.innerHTML = '';

    category.columns.forEach((column) => {
      const columnEl = document.createElement('div');
      columnEl.className = 'category-menu__column';

      column.forEach((group) => {
        if (!group.title) return;

        const groupEl = document.createElement('div');
        groupEl.className = 'category-menu__group';

        const titleEl = document.createElement('span');
        titleEl.className = 'category-menu__group-title';
        titleEl.textContent = group.title;
        groupEl.appendChild(titleEl);

        if (group.items.length) {
          const groupList = document.createElement('ul');
          groupList.className = 'category-menu__group-list';

          group.items.forEach((label) => {
            const itemEl = document.createElement('li');
            const linkEl = document.createElement('a');
            linkEl.className = 'category-menu__group-link';
            linkEl.href = '#';
            linkEl.textContent = label;
            itemEl.appendChild(linkEl);
            groupList.appendChild(itemEl);
          });

          groupEl.appendChild(groupList);
        }

        columnEl.appendChild(groupEl);
      });

      panel.appendChild(columnEl);
    });
  }

  function setActive(index) {
    const items = list.querySelectorAll('.category-menu__item');
    items.forEach((el, i) => el.classList.toggle('is-active', i === index));
    renderPanel(menuData[index]);
  }

  menuData.forEach((category, index) => {
    const item = document.createElement('li');
    item.className = 'category-menu__item';
    item.innerHTML =
      '<span class="category-menu__icon">' + category.icon + '</span>' +
      '<span class="category-menu__label">' + category.title + '</span>';
    item.addEventListener('mouseenter', () => setActive(index));
    list.appendChild(item);
  });

  wrapper.addEventListener('mouseleave', () => {
    list.querySelectorAll('.category-menu__item.is-active').forEach((el) => {
      el.classList.remove('is-active');
    });
  });
})();
