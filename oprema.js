const equipmentItems = [
  {
    id: 101,
    name: "Prostrana sobna krletka",
    subtitle: "Model s izvlačnom ladicom za lako čišćenje",
    category: "Krletke i volijere",
    price: 55,
    spec: "65 × 42 × 78 cm",
    suitableFor: "Nimfe, tigrice, rozenkolisi",
    inStock: true,
    shortDesc: "Čvrsta metalna krletka s 4 drvene prečke, 2 hranilice i donjom ladicom za brzo održavanje.",
    fullDesc: "Kvalitetna i stabilna krletka s gornjim otvaranjem koje omogućuje ptici sigurno slijetanje izvan kaveza. Donja plastična posuda se izvlači bez otvaranja vrata.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 102,
    name: "Premium smjesa za srednje papige",
    subtitle: "Bogata mješavina sjemenki bez prašine",
    category: "Hrana i sjemenke",
    price: 14,
    spec: "Pakiranje 5 kg",
    suitableFor: "Nimfe, rozele, mali aleksandri",
    inStock: true,
    shortDesc: "Uravnotežena mješavina žutog i crvenog prosa, zobi, suncokreta, šafranike i kanarskog sjemena.",
    fullDesc: "Svježe pakirana uzgojna smjesa sjemenki visokog klijanja i čistoće. Pruža svu potrebnu energiju tijekom cijele godine i sezone mitarenja.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 103,
    name: "Multivitaminske kapi za ptice",
    subtitle: "Podrška imunitetu i sjaju perja",
    category: "Vitamini i dodaci",
    price: 9,
    spec: "Bočica 50 ml",
    suitableFor: "Sve vrste ptica",
    inStock: true,
    shortDesc: "Tekući vitamini A, D3, E i B-kompleksa koji se jednostavno dodaju u svježu vodu za piće.",
    fullDesc: "Idealan dodatak kod promjene okoline, mitarenja ili pripreme za sezonu parenja. Pomaže pticama da brže prebrode stres i zadrže živahnost.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 104,
    name: "Drvena kućica za gniježđenje",
    subtitle: "Prirodno drvo s udubljenjem za jaja",
    category: "Igračke i oprema",
    price: 13,
    spec: "25 × 17 × 17 cm",
    suitableFor: "Tigrice, agapornisi, zebice",
    inStock: true,
    shortDesc: "Masivna drvena kućica s prečkom ispred ulaza i gornjim poklopcem za pregled legla.",
    fullDesc: "Izrađena od neobrađenog prirodnog drva sigurnog za grickanje. Gornji poklopac omogućuje uzgajivaču jednostavan i miran pregled ptića.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 105,
    name: "Jajčana hrana za uzgoj i mlade",
    subtitle: "S dodatkom meda i aminokiselina",
    category: "Hrana i sjemenke",
    price: 11,
    spec: "Pakiranje 1 kg",
    suitableFor: "Kanarinci, zebe i papige",
    inStock: true,
    shortDesc: "Nezaobilazan izvor bjelančevina za mlade ptice u razvoju i roditelje tijekom hranjenja.",
    fullDesc: "Meka jajčana smjesa visoke probavljivosti. Može se davati samostalno u posebnoj posudici ili lagano navlažena s ribanom mrkvom.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 106,
    name: "Sipina kost + mineralni blok",
    subtitle: "Prirodni izvor kalcija za kljun i kosti",
    category: "Vitamini i dodaci",
    price: 6,
    spec: "Set (2 kosti + 1 blok)",
    suitableFor: "Sve ukrasne ptice",
    inStock: true,
    shortDesc: "Komplet s metalnim držačima za pričvršćivanje na rešetke krletke – pomaže u trošenju kljuna.",
    fullDesc: "Kalcij je ključan za zdravlje kostiju i čvrstu ljusku jaja. Svaki komad ima ugrađenu kopču za brzo postavljanje u bilo koju krletku.",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 107,
    name: "Prirodna ljuljačka i ljestve",
    subtitle: "Ručno rađeno od grančica voćaka",
    category: "Igračke i oprema",
    price: 8,
    spec: "Širina 18 cm",
    suitableFor: "Tigrice, nimfe, kakariki",
    inStock: true,
    shortDesc: "Zabavna drvena ljuljačka s zvoncetom koja potiče kretanje i sprječava dosadu u krletki.",
    fullDesc: "Prirodna kora različitih debljina izvrsno masira ptičje noge i potiče igru. Sigurno za grickanje bez ikakvih lakova ili ljepila.",
    image: "https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 108,
    name: "Smjesa za kanarince pjevače",
    subtitle: "S dodatkom uljarica i nigera",
    category: "Hrana i sjemenke",
    price: 12,
    spec: "Pakiranje 3 kg",
    suitableFor: "Kanarinci i pjevice",
    inStock: true,
    shortDesc: "Kvalitetna mješavina kanarskog sjemena, uljane repice, konoplje, lana i nigera.",
    fullDesc: "Formulirana tako da podržava čist glas, dobru kondiciju i sjajno perje kanarinaca bez prekomjernog debljanja.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 109,
    name: "Set: Automatska pojilica + hranilica",
    subtitle: "Sustav protiv rasipanja ljuskica",
    category: "Igračke i oprema",
    price: 10,
    spec: "2 komada u setu",
    suitableFor: "Sve manje i srednje ptice",
    inStock: false,
    shortDesc: "Prozirna pojilica od 150 ml i pametna hranilica koja zadržava prazne ljuskice u ladici.",
    fullDesc: "Štedi hranu i drži pod oko krletke čistim. Lako se skida i pere pod mlazom tople vode.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80"
  }
];

const itemsGrid = document.getElementById('itemsGrid');
const itemCountText = document.getElementById('itemCountText');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const priceRange = document.getElementById('priceRange');
const priceRangeValue = document.getElementById('priceRangeValue');
const inStockCheckbox = document.getElementById('inStockCheckbox');
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
const activeFilterBadge = document.getElementById('activeFilterBadge');

const filterDrawer = document.getElementById('filterDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const openFilterBtn = document.getElementById('openFilterBtn');
const closeFilterBtn = document.getElementById('closeFilterBtn');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const emptyResetBtn = document.getElementById('emptyResetBtn');

const itemModal = document.getElementById('itemModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
let currentModalItemId = null;

document.getElementById('mobileNavBtn').addEventListener('click', () => {
  document.getElementById('mobileNavMenu').classList.toggle('hidden');
});

function openFilterDrawer() {
  drawerBackdrop.classList.remove('hidden');
  setTimeout(() => { drawerBackdrop.style.opacity = '1'; }, 10);
  filterDrawer.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
}

function closeFilterDrawer() {
  drawerBackdrop.style.opacity = '0';
  filterDrawer.style.transform = 'translateX(-100%)';
  document.body.style.overflow = '';
  setTimeout(() => { drawerBackdrop.classList.add('hidden'); }, 300);
}

openFilterBtn.addEventListener('click', openFilterDrawer);
closeFilterBtn.addEventListener('click', closeFilterDrawer);
applyFiltersBtn.addEventListener('click', closeFilterDrawer);
drawerBackdrop.addEventListener('click', closeFilterDrawer);

function toggleEquipmentInCart(itemId, event) {
  if (event) event.stopPropagation();
  const item = equipmentItems.find((i) => i.id === itemId);
  if (!item || !window.PticjiCart) return;

  window.PticjiCart.toggleItem({
    id: item.id,
    name: item.name,
    price: item.price,
    meta: item.spec,
    image: item.image,
    type: 'Oprema'
  });
}

const fallbackSvg = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23e2e8f0' width='800' height='600'/%3E%3Ctext fill='%23475569' font-family='sans-serif' font-size='28' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EOprema i hrana%3C/text%3E%3C/svg%3E";

function renderItems() {
  const query = searchInput.value.toLowerCase().trim();
  const maxPrice = Number(priceRange.value);
  const onlyInStock = inStockCheckbox.checked;
  const selectedCategories = Array.from(categoryCheckboxes).filter((cb) => cb.checked).map((cb) => cb.value);

  let activeCount = 0;
  if (query) activeCount++;
  if (maxPrice < 100) activeCount++;
  if (onlyInStock) activeCount++;
  activeCount += selectedCategories.length;

  if (activeCount > 0) {
    activeFilterBadge.textContent = activeCount;
    activeFilterBadge.classList.remove('hidden');
  } else {
    activeFilterBadge.classList.add('hidden');
  }

  let filtered = equipmentItems.filter((item) => {
    const matchesQuery =
      item.name.toLowerCase().includes(query) ||
      item.subtitle.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesPrice = item.price <= maxPrice;
    const matchesStock = !onlyInStock || item.inStock;
    return matchesQuery && matchesCategory && matchesPrice && matchesStock;
  });

  const sortBy = sortSelect.value;
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name, 'hr'));

  itemCountText.innerHTML = `Prikazano <span class="text-brand-600 font-bold">${filtered.length}</span> od <span class="font-bold">${equipmentItems.length}</span> artikala`;

  if (filtered.length === 0) {
    itemsGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  itemsGrid.innerHTML = filtered
    .map((item) => {
      const isInCart = window.PticjiCart ? window.PticjiCart.hasItem(item.id) : false;
      return `
        <article onclick="openItemModal(${item.id})" class="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
          <div class="relative h-60 overflow-hidden bg-slate-100">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='${fallbackSvg}'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/75 text-white text-xs font-semibold backdrop-blur-xs">${item.category}</span>
            <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-xs ${
              item.inStock ? 'bg-brand-600/90 text-white' : 'bg-amber-500/90 text-white'
            }">${item.inStock ? 'Na zalihi' : 'Po narudžbi'}</span>
          </div>
          <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-bold text-lg text-slate-900 group-hover:text-brand-700 transition">${item.name}</h3>
                <span class="font-extrabold text-lg text-brand-700 whitespace-nowrap">${item.price} €</span>
              </div>
              <p class="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">${item.shortDesc}</p>
            </div>
            <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-semibold">
              <span class="text-slate-500">${item.spec}</span>
              <button type="button" onclick="toggleEquipmentInCart(${item.id}, event)" class="px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                isInCart ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' : 'bg-brand-600 text-white hover:bg-brand-700'
              }">
                ${isInCart ? 'U košarici ✓' : '+ U košaricu'}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function updateModalCartButton(id) {
  const isInCart = window.PticjiCart ? window.PticjiCart.hasItem(id) : false;
  modalAddToCartBtn.textContent = isInCart ? 'Ukloni iz košarice ✓' : 'Dodaj u košaricu';
  modalAddToCartBtn.className = isInCart
    ? 'flex-1 py-3 px-5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-sm transition cursor-pointer'
    : 'flex-1 py-3 px-5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition cursor-pointer';
}

function openItemModal(id) {
  const item = equipmentItems.find((i) => i.id === id);
  if (!item) return;

  currentModalItemId = id;
  document.getElementById('modalImg').src = item.image;
  document.getElementById('modalImg').alt = item.name;
  document.getElementById('modalCategory').textContent = item.category;
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalSubtitle').textContent = item.subtitle;
  document.getElementById('modalPrice').textContent = `${item.price} €`;
  document.getElementById('modalSpec').textContent = item.spec;
  document.getElementById('modalSuitableFor').textContent = item.suitableFor;
  document.getElementById('modalStock').textContent = item.inStock ? 'Dostupno odmah' : 'Po narudžbi';
  document.getElementById('modalDesc').textContent = item.fullDesc;

  updateModalCartButton(id);
  itemModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

modalAddToCartBtn.addEventListener('click', () => {
  if (currentModalItemId !== null) toggleEquipmentInCart(currentModalItemId);
});

function closeItemModal() {
  itemModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  currentModalItemId = null;
}

closeModalBtn.addEventListener('click', closeItemModal);
itemModal.addEventListener('click', (e) => {
  if (e.target === itemModal) closeItemModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeItemModal();
    closeFilterDrawer();
  }
});

window.addEventListener('pticjiCartChanged', () => {
  renderItems();
  if (currentModalItemId !== null) updateModalCartButton(currentModalItemId);
});

searchInput.addEventListener('input', renderItems);
sortSelect.addEventListener('change', renderItems);
inStockCheckbox.addEventListener('change', renderItems);
categoryCheckboxes.forEach((cb) => cb.addEventListener('change', renderItems));

priceRange.addEventListener('input', () => {
  priceRangeValue.textContent = `${priceRange.value} €`;
  renderItems();
});

function resetAllFilters() {
  searchInput.value = '';
  sortSelect.value = 'default';
  priceRange.value = 100;
  priceRangeValue.textContent = '100 €';
  inStockCheckbox.checked = false;
  categoryCheckboxes.forEach((cb) => (cb.checked = false));
  renderItems();
}

resetFiltersBtn.addEventListener('click', resetAllFilters);
emptyResetBtn.addEventListener('click', resetAllFilters);

renderItems();