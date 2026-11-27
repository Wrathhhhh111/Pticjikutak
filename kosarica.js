(function () {
  const STORAGE_KEY = 'pticjiKutakUnifiedCart';
  const fallbackSvg =
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext fill='%23475569' font-family='sans-serif' font-size='14' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ESlika%3C/text%3E%3C/svg%3E";

  // Ubacuje pozadinu i desni panel košarice na svaku stranicu koja učita ovu skriptu
  const drawerHTML = `
    <div id="unifiedCartBackdrop" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden opacity-0 transition-opacity duration-300"></div>
    <aside id="unifiedCartDrawer" aria-label="Košarica" style="transform: translateX(100%);" class="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col">
      <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200">
        <div class="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
          <h2 class="font-bold text-lg text-slate-900">Tvoja košarica</h2>
        </div>
        <button id="unifiedCloseCartBtn" type="button" aria-label="Zatvori košaricu" class="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div id="unifiedCartItems" class="flex-1 overflow-y-auto p-6 space-y-4"></div>

      <div id="unifiedCartFooter" class="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
        <div class="flex items-center justify-between text-base">
          <span class="font-semibold text-slate-600">Ukupno u košarici:</span>
          <span id="unifiedCartTotal" class="text-2xl font-extrabold text-slate-900">0 €</span>
        </div>

        <div class="space-y-3">
          <input
            type="text"
            id="unifiedBuyerInput"
            placeholder="Tvoje ime i broj mobitela (npr. Marko, 098...)"
            class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm"
          />
          <div class="flex gap-2.5">
            <button id="unifiedClearCartBtn" type="button" class="py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm transition cursor-pointer">
              Isprazni
            </button>
            <button id="unifiedCheckoutBtn" type="button" class="flex-1 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition cursor-pointer">
              Pošalji upit za rezervaciju
            </button>
          </div>
        </div>

        <div id="unifiedCartSuccess" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
          Upit je zabilježen! Za najbrži dogovor oko preuzimanja nazovi na <strong>+385 91 000 0000</strong>.
        </div>
      </div>
    </aside>
  `;

  document.body.insertAdjacentHTML('beforeend', drawerHTML);

  const backdrop = document.getElementById('unifiedCartBackdrop');
  const drawer = document.getElementById('unifiedCartDrawer');
  const itemsContainer = document.getElementById('unifiedCartItems');
  const totalEl = document.getElementById('unifiedCartTotal');
  const footerEl = document.getElementById('unifiedCartFooter');
  const buyerInput = document.getElementById('unifiedBuyerInput');
  const successMsg = document.getElementById('unifiedCartSuccess');

  function getItems() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateBadge();
    renderDrawer();
    window.dispatchEvent(new Event('pticjiCartChanged'));
  }

  function updateBadge() {
    const count = getItems().length;
    const badge = document.getElementById('cartBadge');
    if (badge) badge.textContent = count;
  }

  function renderDrawer() {
    const items = getItems();
    successMsg.classList.add('hidden');

    if (items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center py-12">
          <div class="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
          </div>
          <p class="font-bold text-slate-800">Košarica je trenutno prazna</p>
          <p class="text-sm text-slate-500 mt-1 max-w-xs">Dodaj ptice ili opremu klikom na "+ U košaricu" na stranicama Ptice ili Oprema i hrana.</p>
        </div>
      `;
      footerEl.classList.add('hidden');
      return;
    }

    footerEl.classList.remove('hidden');
    const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);
    totalEl.textContent = `${total} €`;

    itemsContainer.innerHTML = items
      .map(
        (item) => `
        <div class="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='${fallbackSvg}'" class="w-16 h-16 rounded-xl object-cover shrink-0 bg-slate-200" />
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
              item.type === 'Ptica' ? 'bg-brand-100 text-brand-800' : 'bg-slate-200 text-slate-700'
            }">${item.type}</span>
            <h4 class="font-bold text-sm text-slate-900 truncate mt-0.5">${item.name}</h4>
            <p class="text-xs text-slate-500 truncate">${item.meta}</p>
            <span class="inline-block mt-1 font-extrabold text-sm text-brand-700">${item.price} €</span>
          </div>
          <button type="button" onclick="window.PticjiCart.removeItem(${item.id})" title="Ukloni iz košarice" class="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z"/>
            </svg>
          </button>
        </div>
      `
      )
      .join('');
  }

  function openCart() {
    renderDrawer();
    backdrop.classList.remove('hidden');
    setTimeout(() => {
      backdrop.style.opacity = '1';
    }, 10);
    drawer.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    backdrop.style.opacity = '0';
    drawer.style.transform = 'translateX(100%)';
    document.body.style.overflow = '';
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  }

  // Gumbi za otvaranje i zatvaranje
  const openBtn = document.getElementById('openCartBtn');
  if (openBtn) openBtn.addEventListener('click', openCart);

  document.getElementById('unifiedCloseCartBtn').addEventListener('click', closeCart);
  backdrop.addEventListener('click', closeCart);

  document.getElementById('unifiedClearCartBtn').addEventListener('click', () => {
    saveItems([]);
  });

  document.getElementById('unifiedCheckoutBtn').addEventListener('click', () => {
    if (!buyerInput.value.trim()) {
      buyerInput.focus();
      buyerInput.classList.add('border-red-500');
      return;
    }
    buyerInput.classList.remove('border-red-500');
    successMsg.classList.remove('hidden');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.style.transform === 'translateX(0px)') {
      closeCart();
    }
  });

  // Javni API za app.js i oprema.js
  window.PticjiCart = {
    hasItem(id) {
      return getItems().some((item) => item.id === id);
    },
    toggleItem(itemObj) {
      const items = getItems();
      const exists = items.some((i) => i.id === itemObj.id);
      const updated = exists ? items.filter((i) => i.id !== itemObj.id) : [...items, itemObj];
      saveItems(updated);
    },
    removeItem(id) {
      const updated = getItems().filter((i) => i.id !== id);
      saveItems(updated);
    },
    open: openCart,
    close: closeCart,
  };

  updateBadge();
})();
