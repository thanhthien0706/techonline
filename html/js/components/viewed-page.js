// Renders the "Sản phẩm đã xem" page (san-pham-da-xem.html) from the
// shared Viewed store.
(() => {
  const listEl = document.getElementById('js-viewed-list');
  const emptyEl = document.getElementById('js-viewed-empty');
  const clearBtn = document.getElementById('js-viewed-clear');
  if (!listEl) return;

  function render() {
    const items = Viewed.getItems();

    if (!items.length) {
      listEl.innerHTML = '';
      emptyEl.hidden = false;
      clearBtn.hidden = true;
      return;
    }

    emptyEl.hidden = true;
    clearBtn.hidden = false;
    listEl.innerHTML = items.map(Viewed.cardHtml).join('');
  }

  clearBtn.addEventListener('click', () => {
    Viewed.clear();
    render();
  });

  render();
})();
