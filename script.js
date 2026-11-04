const categories = [
  { name: 'Todos', emoji: '🍽️' },
  { name: 'Hambúrgueres', emoji: '🍔' },
  { name: 'Pizzas Artesanais', emoji: '🍕' },
  { name: 'Sushi & Japonês', emoji: '🍣' },
  { name: 'Sobremesas', emoji: '🍫' },
  { name: 'Bebidas & Shakes', emoji: '🥤' }
];

const products = [
  {
    id: 1,
    name: 'Burger Angus Supreme',
    category: 'Hambúrgueres',
    price: 29.90,
    restaurant: 'Burger House Master',
    desc: 'Blend Angus 180g, cheddar inglês derretido, cebola caramelizada e bacon crocante no brioche.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
    tag: 'Mais Pedido',
    isVeg: false,
    addons: [
      { name: 'Bacon artesanal crocante', price: 4.50 },
      { name: 'Cheddar cremoso duplo', price: 4.00 },
      { name: 'Maionese verde artesanal', price: 3.00 }
    ]
  },
  {
    id: 2,
    name: 'Pizza Margherita Di Bufala',
    category: 'Pizzas Artesanais',
    price: 44.90,
    restaurant: 'Pizzaria Napolitana',
    desc: 'Molho San Marzano, muçarela de búfala fresca, folhas de manjericão e azeite extravirgem.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600',
    tag: 'Autêntica',
    isVeg: true,
    addons: [
      { name: 'Borda recheada com Catupiry', price: 8.00 },
      { name: 'Muçarela de búfala extra', price: 6.00 }
    ]
  },
  {
    id: 3,
    name: 'Combo Salmão Omakase (20 Pçs)',
    category: 'Sushi & Japonês',
    price: 59.90,
    restaurant: 'Sushi Lounge Premium',
    desc: '8 sashimis frescos de salmão, 4 niguiris maçaricados com azeite trufado e 8 uramakis.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
    tag: 'Gourmet',
    isVeg: false,
    addons: [
      { name: 'Tarê especial da casa', price: 3.50 },
      { name: 'Wasabi & Gengibre extra', price: 2.50 }
    ]
  },
  {
    id: 4,
    name: 'Batata Rústica c/ Trufas',
    category: 'Hambúrgueres',
    price: 19.90,
    restaurant: 'Burger House Master',
    desc: 'Batatas crocantes temperadas com sal marinho, alecrim fresco e maionese trufada da casa.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600',
    tag: 'Crocante',
    isVeg: true,
    addons: [
      { name: 'Molho barbecue defumado', price: 3.00 }
    ]
  },
  {
    id: 5,
    name: 'Brownie Fudge c/ Nutella',
    category: 'Sobremesas',
    price: 15.90,
    restaurant: 'Ateliê do Chocolate',
    desc: 'Brownie úmido de chocolate Callebaut 54%, brigadeiro de Leite Ninho e Nutella pura.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600',
    tag: 'Irresistível',
    isVeg: true,
    addons: [
      { name: 'Bola de sorvete de baunilha', price: 5.00 }
    ]
  },
  {
    id: 6,
    name: 'Milkshake Frutas Vermelhas',
    category: 'Bebidas & Shakes',
    price: 17.90,
    restaurant: 'Burger House Master',
    desc: 'Sorvete artesanal de baunilha de Madagascar, calda fresca de framboesas e chantilly.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600',
    tag: 'Refrescante',
    isVeg: true,
    addons: [
      { name: 'Chantilly em dobro', price: 3.00 }
    ]
  },
  {
    id: 7,
    name: 'Pizza Pepperoni & Mel Picante',
    category: 'Pizzas Artesanais',
    price: 48.90,
    restaurant: 'Pizzaria Napolitana',
    desc: 'Pepperoni artesanal crocante, queijo muçarela gratinado e toque especial de mel picante.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600',
    tag: 'Exclusivo',
    isVeg: false,
    addons: [
      { name: 'Borda com Catupiry', price: 8.00 }
    ]
  },
  {
    id: 8,
    name: 'Poke Bowl Salmão Fresh',
    category: 'Sushi & Japonês',
    price: 39.90,
    restaurant: 'Sushi Lounge Premium',
    desc: 'Arroz shari temperado, cubos generosos de salmão fresco, fatias de manga, edamame e gergelim.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
    tag: 'Fit & Fresh',
    isVeg: false,
    addons: [
      { name: 'Salmão duplo 100g', price: 9.00 }
    ]
  }
];

const restaurants = [
  {
    name: 'Burger House Master',
    category: 'Hambúrgueres Gourmet',
    rating: '4.95',
    time: '20–30 min',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600'
  },
  {
    name: 'Pizzaria Napolitana',
    category: 'Pizzas Forno a Lenha',
    rating: '4.89',
    time: '25–40 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600'
  },
  {
    name: 'Sushi Lounge Premium',
    category: 'Alta Gastronomia Oriental',
    rating: '4.98',
    time: '30–45 min',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600'
  }
];

/* CONFIGURAÇÕES */

const RESTAURANT_WHATSAPP = '5511999999999';

let cart = JSON.parse(localStorage.getItem('fe-cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('fe-favorites') || '[]');
let orders = JSON.parse(localStorage.getItem('fe-orders') || '[]');

let selectedCategory = 'Todos';
let searchQuery = '';
let appliedCoupon = null;
let onlyFavorites = false;
let onlyVeg = false;
let audioEnabled = true;

let activeCustProduct = null;
let custQuantity = 1;

const money = val => val.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

/* ARMAZENAMENTO */

function persist() {
  localStorage.setItem('fe-cart', JSON.stringify(cart));
  localStorage.setItem('fe-favorites', JSON.stringify(favorites));
  localStorage.setItem('fe-orders', JSON.stringify(orders));
}

/* EFEITOS SONOROS */

const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function playSound(type) {
  if (!audioEnabled || !AudioContextClass) return;

  try {
    if (!audioCtx) audioCtx = new AudioContextClass();

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.start(now);
      osc.stop(now + 0.08);

    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.1);
      osc.frequency.setValueAtTime(783.99, now + 0.2);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.start(now);
      osc.stop(now + 0.4);
    }

  } catch (error) {
    console.warn('Não foi possível reproduzir o som:', error);
  }
}

function toggleAudio() {
  audioEnabled = !audioEnabled;

  document.getElementById('audioToggleBtn').textContent =
    audioEnabled ? '🔊' : '🔇';

  toast(
    audioEnabled ? 'Sons ativados' : 'Sons desativados',
    '🔊'
  );
}

/* CONFETES */

function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = [
    '#ff5722',
    '#ffab91',
    '#10b981',
    '#f59e0b',
    '#ffffff'
  ];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      dx: (Math.random() - 0.5) * 16,
      dy: (Math.random() - 0.5) * 16 - 3,
      gravity: 0.25,
      opacity: 1
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let activeCount = 0;

    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      p.dy += p.gravity;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        activeCount++;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    if (activeCount > 0) {
      requestAnimationFrame(renderParticles);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  renderParticles();
}

/* TEMA */

function toggleTheme() {
  const current = document.body.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';

  document.body.setAttribute('data-theme', target);

  localStorage.setItem('fe-theme', target);

  playSound('pop');

  toast(
    `Modo ${target === 'dark' ? 'Escuro' : 'Claro'} ativado`,
    '🌓'
  );
}

/* NOTIFICAÇÕES */

function toast(msg, icon = '✨') {
  const el = document.getElementById('toastPill');

  document.getElementById('toastMessage').textContent = msg;
  document.getElementById('toastIcon').textContent = icon;

  el.classList.add('show');

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    el.classList.remove('show');
  }, 2600);
}

/* CATEGORIAS */

function renderCategories() {
  const bar = document.getElementById('categoryBar');

  bar.innerHTML = categories.map(c => `
    <button
      class="cat-pill ${
        selectedCategory === c.name && !onlyFavorites && !onlyVeg
          ? 'active'
          : ''
      }"
      onclick="selectCategory('${c.name}')"
    >
      <span>${c.emoji}</span>
      <span>${c.name}</span>
    </button>
  `).join('');
}

function selectCategory(name) {
  selectedCategory = name;
  onlyFavorites = false;
  onlyVeg = false;

  playSound('pop');

  renderCategories();
  renderProducts();

  document.getElementById('cardapio').scrollIntoView({
    behavior: 'smooth'
  });
}

/* PESQUISA */

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  renderProducts();
}

function filterDiet(type) {
  if (type === 'veg') {
    onlyVeg = true;
    onlyFavorites = false;
    selectedCategory = 'Todos';

    playSound('pop');

    renderCategories();
    renderProducts();

    document.getElementById('cardapio').scrollIntoView({
      behavior: 'smooth'
    });
  }
}

function resetAllFilters() {
  selectedCategory = 'Todos';
  searchQuery = '';
  onlyFavorites = false;
  onlyVeg = false;

  document.getElementById('searchInput').value = '';

  renderCategories();
  renderProducts();

  playSound('pop');
}

/* FAVORITOS */

function toggleFavorite(id, event) {
  if (event) event.stopPropagation();

  favorites = favorites.includes(id)
    ? favorites.filter(x => x !== id)
    : [...favorites, id];

  playSound('pop');

  persist();
  updateFavBadge();
  renderProducts();

  toast(
    favorites.includes(id)
      ? 'Adicionado aos favoritos!'
      : 'Removido dos favoritos!'
  );
}

function updateFavBadge() {
  document.getElementById('favBadge').textContent = favorites.length;
}

function toggleFavFilter() {
  onlyFavorites = !onlyFavorites;
  onlyVeg = false;
  selectedCategory = 'Todos';

  playSound('pop');

  renderCategories();
  renderProducts();

  document.getElementById('cardapio').scrollIntoView({
    behavior: 'smooth'
  });
}

/* PERSONALIZAÇÃO DOS PRODUTOS */

function openProductCustomizer(id) {
  const p = products.find(x => x.id === id);

  if (!p) return;

  activeCustProduct = p;
  custQuantity = 1;

  document.getElementById('custImg').src = p.image;
  document.getElementById('custName').textContent = p.name;
  document.getElementById('custDesc').textContent = p.desc;
  document.getElementById('custQtyNum').textContent = '1';
  document.getElementById('custObservations').value = '';

  const box = document.getElementById('custAddonsBox');

  if (p.addons && p.addons.length) {
    box.innerHTML = p.addons.map(a => `
      <label class="customizer-item">
        <div style="display:flex; align-items:center; gap:10px;">
          <input
            type="checkbox"
            class="cust-addon-check"
            data-price="${a.price}"
            data-name="${a.name}"
            onchange="recalculateCustTotal()"
          >
          <span class="customizer-item-name">${a.name}</span>
        </div>

        <strong class="customizer-item-price">
          + ${money(a.price)}
        </strong>
      </label>
    `).join('');
  } else {
    box.innerHTML = `
      <span style="color:var(--text-muted); font-size:13px;">
        Sem adicionais específicos para este item.
      </span>
    `;
  }

  recalculateCustTotal();

  document.getElementById('customizerModal').classList.add('open');

  playSound('pop');
}

function closeCustomizerModal() {
  document.getElementById('customizerModal').classList.remove('open');
}

function adjustCustQty(delta) {
  custQuantity += delta;

  if (custQuantity < 1) {
    custQuantity = 1;
  }

  document.getElementById('custQtyNum').textContent = custQuantity;

  recalculateCustTotal();
}

function recalculateCustTotal() {
  if (!activeCustProduct) return;

  let unit = activeCustProduct.price;

  const checked = document.querySelectorAll('.cust-addon-check:checked');

  checked.forEach(c => {
    unit += parseFloat(c.getAttribute('data-price') || 0);
  });

  document.getElementById('custTotalBtn').textContent =
    money(unit * custQuantity);
}

function confirmAddToCartFromCustomizer() {
  if (!activeCustProduct) return;

  const checked = Array.from(
    document.querySelectorAll('.cust-addon-check:checked')
  );

  const selectedAddons = checked.map(c => ({
    name: c.getAttribute('data-name'),
    price: parseFloat(c.getAttribute('data-price'))
  }));

  const obs = document.getElementById('custObservations').value.trim();

  const addonsCost = selectedAddons.reduce(
    (s, a) => s + a.price,
    0
  );

  cart.push({
    cartItemId: Date.now() + Math.random(),
    id: activeCustProduct.id,
    name: activeCustProduct.name,
    price: activeCustProduct.price + addonsCost,
    image: activeCustProduct.image,
    qty: custQuantity,
    addons: selectedAddons,
    observations: obs
  });

  persist();
  renderCart();

  const productName = activeCustProduct.name;

  closeCustomizerModal();

  playSound('pop');

  toast(`${productName} adicionado ao carrinho! 🛒`);

  openCart();
}

/* EXIBIÇÃO DOS PRODUTOS */

function renderProducts() {
  const grid = document.getElementById('productGrid');

  const list = products.filter(p => {
    const matchesCategory =
      selectedCategory === 'Todos' ||
      p.category === selectedCategory;

    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.desc.toLowerCase().includes(searchQuery) ||
      p.restaurant.toLowerCase().includes(searchQuery);

    const matchesFav =
      !onlyFavorites || favorites.includes(p.id);

    const matchesVeg =
      !onlyVeg || p.isVeg;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesFav &&
      matchesVeg
    );
  });

  if (!list.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted);">
        <h3>Nenhum produto encontrado.</h3>
        <p>Tente outra pesquisa ou categoria.</p>
      </div>
    `;

    return;
  }

  grid.innerHTML = list.map(p => `
    <article
      class="card-luxury"
      onclick="openProductCustomizer(${p.id})"
    >
      <div class="card-thumb-wrap">
        <img src="${p.image}" alt="${p.name}">

        <span class="badge-tag">${p.tag}</span>

        <button
          class="card-fav-btn ${
            favorites.includes(p.id) ? 'active' : ''
          }"
          onclick="toggleFavorite(${p.id}, event)"
        >
          ${favorites.includes(p.id) ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="card-content">
        <span class="card-restaurant">
          📍 ${p.restaurant}
        </span>

        <h3>${p.name}</h3>

        <p class="card-desc">${p.desc}</p>

        <div class="card-bottom-row">
          <span class="card-price">${money(p.price)}</span>

          <button
            class="btn-quick-add"
            onclick="event.stopPropagation(); openProductCustomizer(${p.id})"
          >
            + Personalizar
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/* RESTAURANTES */

function renderRestaurants() {
  const grid = document.getElementById('restaurantGrid');

  grid.innerHTML = restaurants.map(r => `
    <article class="card-luxury">
      <div class="card-thumb-wrap" style="height:160px;">
        <img src="${r.image}" alt="${r.name}">
        <span class="badge-tag">★ ${r.rating}</span>
      </div>

      <div class="card-content">
        <h3>${r.name}</h3>

        <span style="color:var(--text-muted); font-size:13px; margin:4px 0 12px;">
          ${r.category} • ⏱ ${r.time}
        </span>

        <button
          class="btn secondary-button"
          style="width:100%; font-size:13px;"
          onclick="filterRestaurant('${r.name}')"
        >
          Ver Pratos do Restaurante →
        </button>
      </div>
    </article>
  `).join('');
}

function filterRestaurant(name) {
  selectedCategory = 'Todos';
  onlyFavorites = false;
  onlyVeg = false;
  searchQuery = name.toLowerCase();

  document.getElementById('searchInput').value = name;

  renderCategories();
  renderProducts();

  document.getElementById('cardapio').scrollIntoView({
    behavior: 'smooth'
  });
}

/* QUANTIDADE NO CARRINHO */

function changeQty(cartItemId, delta) {
  const item = cart.find(x => x.cartItemId === cartItemId);

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(x => x.cartItemId !== cartItemId);
  }

  persist();
  renderCart();
}

/* RENDERIZAR CARRINHO */

function renderCart() {
  document.getElementById('cartBadge').textContent =
    cart.reduce((s, i) => s + i.qty, 0);

  const container = document.getElementById('cartItemsList');

  if (!cart.length) {
    container.innerHTML = `
      <div style="text-align:center; padding:50px 20px; color:var(--text-muted);">
        <h3>Seu carrinho está vazio 🛒</h3>
        <p>Escolha algo delicioso no cardápio!</p>
      </div>
    `;

    document.getElementById('cartSubtotal').textContent = money(0);
    document.getElementById('cartFinalTotal').textContent = money(0);
    document.getElementById('cartDeliveryFee').textContent = money(6);
    document.getElementById('cartDiscountRow').style.display = 'none';
    document.getElementById('freeShipFill').style.width = '0%';
    document.getElementById('freeShipLabel').textContent =
      'Faltam R$ 50,00 para Frete Grátis!';
    document.getElementById('freeShipPercent').textContent = '0%';

    return;
  }

  container.innerHTML = cart.map(i => {
    const extraDesc =
      i.addons && i.addons.length
        ? `+ ${i.addons.map(a => a.name).join(', ')}`
        : '';

    const obsDesc =
      i.observations
        ? `Obs: "${i.observations}"`
        : '';

    return `
      <div class="cart-row-item">
        <img src="${i.image}" alt="${i.name}">

        <div style="flex:1;">
          <strong style="font-size:14px; display:block;">
            ${i.name}
          </strong>

          ${
            extraDesc
              ? `<small style="display:block; color:var(--text-muted); font-size:11px;">${extraDesc}</small>`
              : ''
          }

          ${
            obsDesc
              ? `<small style="display:block; color:var(--primary); font-size:11px; font-style:italic;">${obsDesc}</small>`
              : ''
          }

          <span style="color:var(--primary); font-weight:700; font-size:13px;">
            ${money(i.price)}
          </span>

          <div style="display:flex; align-items:center; gap:8px; margin-top:6px;">
            <button
              class="icon-btn"
              style="width:24px; height:24px; font-size:12px;"
              onclick="changeQty(${i.cartItemId}, -1)"
            >−</button>

            <strong style="font-size:13px;">${i.qty}</strong>

            <button
              class="icon-btn"
              style="width:24px; height:24px; font-size:12px;"
              onclick="changeQty(${i.cartItemId}, 1)"
            >+</button>
          </div>
        </div>

        <strong style="font-size:14px; font-family:'Space Grotesk';">
          ${money(i.price * i.qty)}
        </strong>
      </div>
    `;
  }).join('');

  const subtotal = cart.reduce(
    (s, i) => s + (i.price * i.qty),
    0
  );

  const deliveryFee = subtotal >= 50 ? 0 : 6;

  const percent = Math.min(
    100,
    Math.round((subtotal / 50) * 100)
  );

  document.getElementById('freeShipFill').style.width =
    `${percent}%`;

  document.getElementById('freeShipPercent').textContent =
    `${percent}%`;

  document.getElementById('freeShipLabel').innerHTML =
    subtotal >= 50
      ? '🎉 <strong>FRETE GRÁTIS ATIVADO!</strong>'
      : `Faltam ${money(50 - subtotal)} para Frete Grátis!`;

  const discount = appliedCoupon
    ? subtotal * appliedCoupon.percent
    : 0;

  document.getElementById('cartDiscountRow').style.display =
    appliedCoupon ? 'flex' : 'none';

  if (appliedCoupon) {
    document.getElementById('cartDiscountAmount').textContent =
      `- ${money(discount)}`;
  }

  document.getElementById('cartSubtotal').textContent =
    money(subtotal);

  document.getElementById('cartDeliveryFee').textContent =
    deliveryFee === 0 ? 'GRÁTIS' : money(deliveryFee);

  document.getElementById('cartFinalTotal').textContent =
    money(subtotal - discount + deliveryFee);
}

/* ABRIR E FECHAR CARRINHO */

function openCart() {
  document.getElementById('drawerOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');

  playSound('pop');
}

function closeAllDrawers() {
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

/* CUPONS */

function applyCouponInput() {
  validateCoupon(
    document.getElementById('couponCodeInput').value.trim().toUpperCase()
  );
}

function quickApplyCoupon(code) {
  document.getElementById('couponCodeInput').value = code;

  validateCoupon(code);

  openCart();
}

function validateCoupon(code) {
  if (code === 'PRIMEIRACOMPRA') {
    appliedCoupon = {
      code: 'PRIMEIRACOMPRA',
      percent: 0.15
    };

    playSound('success');

    toast('Cupom de 15% OFF aplicado! 🎉');

  } else {
    appliedCoupon = null;

    toast('Cupom inválido.', '⚠️');
  }

  renderCart();
}

/* BUSCA AUTOMÁTICA DE CEP */

let cepTimer = null;

async function buscarCepAutomatico(val) {
  const clean = val.replace(/\D/g, '');

  clearTimeout(cepTimer);

  if (clean.length !== 8) return;

  cepTimer = setTimeout(async () => {
    try {
      toast('Buscando endereço pelo CEP...', '📍');

      const res = await fetch(
        `https://viacep.com.br/ws/${clean}/json/`
      );

      if (!res.ok) {
        throw new Error('Erro ao consultar o CEP');
      }

      const data = await res.json();

      if (!data.erro) {
        document.getElementById('inputAddress').value =
          data.logradouro ? `${data.logradouro}, nº ` : '';

        document.getElementById('inputNeighborhood').value =
          data.bairro || '';

        document.getElementById('inputAddress').focus();

        playSound('success');

        toast('Endereço preenchido automaticamente! 🚀');

      } else {
        toast('CEP não encontrado.', '⚠️');
      }

    } catch (error) {
      toast('Não foi possível consultar o CEP.', '⚠️');
    }
  }, 400);
}

/* FINALIZAÇÃO DO PEDIDO */

function openCheckoutModal() {
  if (!cart.length) {
    toast('Seu carrinho está vazio!');
    return;
  }

  document.getElementById('modalCheckoutTotal').textContent =
    document.getElementById('cartFinalTotal').textContent;

  closeAllDrawers();

  document.getElementById('checkoutModal').classList.add('open');

  playSound('pop');
}

function closeModal() {
  document.getElementById('checkoutModal').classList.remove('open');
}

function handlePlaceOrder(e) {
  e.preventDefault();

  if (!cart.length) {
    toast('Seu carrinho está vazio!');
    return;
  }

  const form = e.target;
  const formData = new FormData(form);

  const subtotal = cart.reduce(
    (s, i) => s + (i.price * i.qty),
    0
  );

  const discount = appliedCoupon
    ? subtotal * appliedCoupon.percent
    : 0;

  const deliveryFee = subtotal >= 50 ? 0 : 6;

  const orderNumber = Math.floor(
    1000 + Math.random() * 9000
  );

  const paymentMethod = formData.get('payment');

  orders.unshift({
    id: orderNumber,
    date: new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    }),
    items: [...cart],
    total: subtotal - discount + deliveryFee
  });

  cart = [];
  appliedCoupon = null;

  persist();
  renderCart();

  form.reset();

  closeModal();

  document.getElementById('trackingCode').textContent =
    `#${orderNumber}`;

  // O site ainda não possui integração de pagamento real.
  document.getElementById('pixAreaContainer').style.display =
    paymentMethod === 'pix' ? 'block' : 'none';

  document.getElementById('trackingModal').classList.add('open');

  playSound('success');
  triggerConfetti();

  toast(`Pedido #${orderNumber} registrado com sucesso! 🚀`);
}

/* ENVIO PARA WHATSAPP */

function sendToWhatsAppDirectly() {
  if (!cart.length) {
    toast('Seu carrinho está vazio!');
    return;
  }

  if (RESTAURANT_WHATSAPP === '5511999999999') {
    toast('Configure o WhatsApp do restaurante no script.js.', '⚠️');
    return;
  }

  const name =
    document.querySelector('input[name="name"]').value.trim() ||
    'Cliente';

  const phone =
    document.querySelector('input[name="phone"]').value.trim() ||
    'Não informado';

  const address =
    document.querySelector('input[name="address"]').value.trim() ||
    'A combinar';

  let msg = `
*NOVO PEDIDO - FoodExpress VIP*
---------------------------
👤 *Cliente:* ${name}
📱 *Telefone:* ${phone}
📍 *Endereço:* ${address}

*ITENS DO PEDIDO:*
`;

  cart.forEach(i => {
    msg += `• ${i.qty}x ${i.name} (${money(i.price * i.qty)})\n`;

    if (i.addons && i.addons.length) {
      msg += `   Adicionais: ${i.addons.map(a => a.name).join(', ')}\n`;
    }

    if (i.observations) {
      msg += `   Obs: ${i.observations}\n`;
    }
  });

  msg += `
*TOTAL:* ${document.getElementById('cartFinalTotal').textContent}
---------------------------
Por favor, confirmem o pedido! 🙌
`;

  const url =
    `https://api.whatsapp.com/send?phone=${RESTAURANT_WHATSAPP}&text=${encodeURIComponent(msg)}`;

  window.open(url, '_blank');
}

/* RASTREAMENTO */

function closeTrackingModal() {
  document.getElementById('trackingModal').classList.remove('open');
}

/* HISTÓRICO DE PEDIDOS */

function openOrdersModal() {
  const container = document.getElementById('ordersListContainer');

  container.innerHTML = orders.length
    ? orders.map(ord => `
      <div class="order-card">
        <div class="order-card-header">
          <strong>Pedido #${ord.id}</strong>
          <span>${ord.date}</span>
        </div>

        <div class="order-card-items">
          ${ord.items.map(i => `${i.qty}x ${i.name}`).join(' • ')}
        </div>

        <div class="order-card-footer">
          <strong class="order-card-total">
            ${money(ord.total)}
          </strong>

          <button
            class="btn repeat-order-button"
            onclick="repeatOrder(${ord.id})"
          >
            🔁 Repetir
          </button>
        </div>
      </div>
    `).join('')
    : `
      <p style="text-align:center; padding:30px; color:var(--text-muted);">
        Nenhum pedido anterior.
      </p>
    `;

  document.getElementById('ordersModal').classList.add('open');
}

function closeOrdersModal() {
  document.getElementById('ordersModal').classList.remove('open');
}

function repeatOrder(orderId) {
  const ord = orders.find(x => x.id === orderId);

  if (!ord) return;

  cart = [...ord.items];

  persist();
  renderCart();

  closeOrdersModal();
  openCart();

  toast('Itens recarregados no carrinho!', '🔁');
}

/* INICIALIZAÇÃO */

function initializeApp() {
  const savedTheme = localStorage.getItem('fe-theme');

  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
  }

  renderCategories();
  renderProducts();
  renderRestaurants();
  renderCart();
  updateFavBadge();
}

initializeApp();