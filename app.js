const birds = [
  {
    id: 1,
    name: "Nimfa – Lutino",
    latin: "Nymphicus hollandicus",
    category: "Papige",
    price: 45,
    age: "5 mjeseci",
    gender: "Mužjak",
    ringed: true,
    shortDesc: "Mlada, pitoma nimfa žuto-bijelog perja s narančastim obrazima, naviknuta na ljude.",
    fullDesc: "Izuzetno mirna i znatiželjna mlada nimfa iz domaćeg legla. Već uči prve melodije zviždanja, jede sjemenke, proso i svježe povrće. Idealna za kućnog ljubimca.",
    image: "https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Tigrica – Izložbena plava",
    latin: "Melopsittacus undulatus",
    category: "Papige",
    price: 15,
    age: "4 mjeseca",
    gender: "Ženka",
    ringed: true,
    shortDesc: "Živahna mlada tigrica intenzivne nebesko plave boje, spremna za pripitomljavanje.",
    fullDesc: "Zdrava i razigrana mlada tigrica krupnije građe. Odlično se slaže s drugim tigricama, a zbog mlade dobi vrlo se lako navikava na ruku.",
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Kanarinac – Crveni mozaik",
    latin: "Serinus canaria",
    category: "Kanarinci",
    price: 35,
    age: "8 mjeseci",
    gender: "Mužjak",
    ringed: true,
    shortDesc: "Odličan pjevač izražene crveno-bijele boje s fiksnim uzgojnim prstenom.",
    fullDesc: "Mužjak kanarinca iz kvalitetne linije pjevača. Redovito dobiva vitaminsku prehranu za očuvanje intenzivne crvene pigmentacije perja.",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Rozela – Crvena (Eastern)",
    latin: "Platycercus eximius",
    category: "Papige",
    price: 75,
    age: "7 mjeseci",
    gender: "Mužjak",
    ringed: true,
    shortDesc: "Atraktivna srednja papiga bogatih crvenih, plavih i zlatnih nijansi perja.",
    fullDesc: "Prekrasna crvena rozela uzgojena u prostranoj volijeri. Vrlo otporna ptica prekrasnog izgleda, pogodna za vanjske ili veće sobne volijere.",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Australska zebica – Par",
    latin: "Taeniopygia guttata",
    category: "Zebe",
    price: 20,
    age: "6 mjeseci",
    gender: "Par (M+Ž)",
    ringed: false,
    shortDesc: "Skladan mladi par zebica, jednostavne za održavanje i uvijek aktivne.",
    fullDesc: "Cijena se odnosi na kompletan par (mužjak i ženka). Zebice su nezahtjevne, društvene i donose puno živosti u svaki prostor.",
    image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Rozenkolis (Agapornis)",
    latin: "Agapornis roseicollis",
    category: "Papige",
    price: 40,
    age: "5 mjeseci",
    gender: "Mužjak",
    ringed: true,
    shortDesc: "Energija u malom pakiranju – zeleni rozenkolis breskvasto-crvenog lica.",
    fullDesc: "Mladi rozenkolis snažne građe i sjajnog perja. Izrazito inteligentna i privržena papiga koja voli igračke i interakciju.",
    image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Kozica (Kakariki) – Žuta",
    latin: "Cyanoramphus novaezelandiae",
    category: "Papige",
    price: 50,
    age: "6 mjeseci",
    gender: "Ženka",
    ringed: true,
    shortDesc: "Tiha, vesela i znatiželjna papiga jarko žute boje s crvenom kapicom.",
    fullDesc: "Kakariki su poznati po tome što nisu glasni, obožavaju se kupati i istraživati okolinu. Ova ženka je potpuno zdrava i prstenovana.",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Mali Aleksandar – Zeleni",
    latin: "Psittacula krameri",
    category: "Papige",
    price: 110,
    age: "9 mjeseci",
    gender: "Mužjak",
    ringed: true,
    shortDesc: "Elegantna dugorepa papiga poznata po sposobnosti oponašanja govora.",
    fullDesc: "Mladi mužjak malog aleksandra u top kondiciji. Dugovječna i pametna papiga koja uz malo strpljenja uči velik broj riječi i zvukova.",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Kanarinac – Žuti intenzivni",
    latin: "Serinus canaria",
    category: "Kanarinci",
    price: 30,
    age: "7 mjeseci",
    gender: "Mužjak",
    ringed: true,
    shortDesc: "Klasični žuti kanarinac čistog i dugotrajnog pjeva, spreman za sezonu.",
    fullDesc: "Zdrav i živahan mladi mužjak intenzivno žutog perja. Odličan izbor za ljubitelje ugodnog ptičjeg pjeva u domu.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80"
  }
];

const birdsGrid = document.getElementById('birdsGrid');
const birdCountText = document.getElementById('birdCountText');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const priceRange = document.getElementById('priceRange');
const priceRangeValue = document.getElementById('priceRangeValue');
const ringedCheckbox = document.getElementById('ringedCheckbox');
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
const activeFilterBadge = document.getElementById('activeFilterBadge');

const filterDrawer = document.getElementById('filterDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const openFilterBtn = document.getElementById('openFilterBtn');
const closeFilterBtn = document.getElementById('closeFilterBtn');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const emptyResetBtn = document.getElementById('emptyResetBtn');

const birdModal = document.getElementById('birdModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
let currentModalBirdId = null;

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

function toggleBirdInCart(birdId, event) {
  if (event) event.stopPropagation();
  const bird = birds.find((b) => b.id === birdId);
  if (!bird || !window.PticjiCart) return;

  window.PticjiCart.toggleItem({
    id: bird.id,
    name: bird.name,
    price: bird.price,
    meta: `${bird.age} • ${bird.gender}`,
    image: bird.image,
    type: 'Ptica'
  });
}

const fallbackSvg = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23e2e8f0' width='800' height='600'/%3E%3Ctext fill='%23475569' font-family='sans-serif' font-size='28' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ESlika ptice%3C/text%3E%3C/svg%3E";

function renderBirds() {
  const query = searchInput.value.toLowerCase().trim();
  const maxPrice = Number(priceRange.value);
  const onlyRinged = ringedCheckbox.checked;
  const selectedCategories = Array.from(categoryCheckboxes).filter((cb) => cb.checked).map((cb) => cb.value);

  let activeCount = 0;
  if (query) activeCount++;
  if (maxPrice < 150) activeCount++;
  if (onlyRinged) activeCount++;
  activeCount += selectedCategories.length;

  if (activeCount > 0) {
    activeFilterBadge.textContent = activeCount;
    activeFilterBadge.classList.remove('hidden');
  } else {
    activeFilterBadge.classList.add('hidden');
  }

  let filtered = birds.filter((bird) => {
    const matchesQuery =
      bird.name.toLowerCase().includes(query) ||
      bird.latin.toLowerCase().includes(query) ||
      bird.shortDesc.toLowerCase().includes(query);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(bird.category);
    const matchesPrice = bird.price <= maxPrice;
    const matchesRing = !onlyRinged || bird.ringed;
    return matchesQuery && matchesCategory && matchesPrice && matchesRing;
  });

  const sortBy = sortSelect.value;
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name, 'hr'));

  birdCountText.innerHTML = `Prikazano <span class="text-brand-600 font-bold">${filtered.length}</span> od <span class="font-bold">${birds.length}</span> ptica`;

  if (filtered.length === 0) {
    birdsGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  birdsGrid.innerHTML = filtered
    .map((bird) => {
      const isInCart = window.PticjiCart ? window.PticjiCart.hasItem(bird.id) : false;
      return `
        <article onclick="openBirdModal(${bird.id})" class="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
          <div class="relative h-60 overflow-hidden bg-slate-100">
            <img src="${bird.image}" alt="${bird.name}" onerror="this.src='${fallbackSvg}'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/75 text-white text-xs font-semibold backdrop-blur-xs">${bird.category}</span>
            ${bird.ringed ? `<span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brand-600/90 text-white text-xs font-semibold backdrop-blur-xs">Prstenovana</span>` : ''}
          </div>
          <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-bold text-lg text-slate-900 group-hover:text-brand-700 transition">${bird.name}</h3>
                <span class="font-extrabold text-lg text-brand-700 whitespace-nowrap">${bird.price} €</span>
              </div>
              <p class="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">${bird.shortDesc}</p>
            </div>
            <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-semibold">
              <span class="text-slate-500">${bird.age} • ${bird.gender}</span>
              <button type="button" onclick="toggleBirdInCart(${bird.id}, event)" class="px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
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

function openBirdModal(id) {
  const bird = birds.find((b) => b.id === id);
  if (!bird) return;

  currentModalBirdId = id;
  document.getElementById('modalImg').src = bird.image;
  document.getElementById('modalImg').alt = bird.name;
  document.getElementById('modalCategory').textContent = bird.category;
  document.getElementById('modalTitle').textContent = bird.name;
  document.getElementById('modalLatin').textContent = bird.latin;
  document.getElementById('modalPrice').textContent = `${bird.price} €`;
  document.getElementById('modalAge').textContent = bird.age;
  document.getElementById('modalGender').textContent = bird.gender;
  document.getElementById('modalRing').textContent = bird.ringed ? 'Da (uzgojni)' : 'Ne';
  document.getElementById('modalDesc').textContent = bird.fullDesc;

  updateModalCartButton(id);
  birdModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

modalAddToCartBtn.addEventListener('click', () => {
  if (currentModalBirdId !== null) toggleBirdInCart(currentModalBirdId);
});

function closeBirdModal() {
  birdModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  currentModalBirdId = null;
}

closeModalBtn.addEventListener('click', closeBirdModal);
birdModal.addEventListener('click', (e) => {
  if (e.target === birdModal) closeBirdModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBirdModal();
    closeFilterDrawer();
  }
});

window.addEventListener('pticjiCartChanged', () => {
  renderBirds();
  if (currentModalBirdId !== null) updateModalCartButton(currentModalBirdId);
});

searchInput.addEventListener('input', renderBirds);
sortSelect.addEventListener('change', renderBirds);
ringedCheckbox.addEventListener('change', renderBirds);
categoryCheckboxes.forEach((cb) => cb.addEventListener('change', renderBirds));

priceRange.addEventListener('input', () => {
  priceRangeValue.textContent = `${priceRange.value} €`;
  renderBirds();
});

function resetAllFilters() {
  searchInput.value = '';
  sortSelect.value = 'default';
  priceRange.value = 150;
  priceRangeValue.textContent = '150 €';
  ringedCheckbox.checked = false;
  categoryCheckboxes.forEach((cb) => (cb.checked = false));
  renderBirds();
}

resetFiltersBtn.addEventListener('click', resetAllFilters);
emptyResetBtn.addEventListener('click', resetAllFilters);

renderBirds();