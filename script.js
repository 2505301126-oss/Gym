/* =====================================================
   GymForce — Main Script
   ===================================================== */

'use strict';

/* ===== DATA ===== */
const PRODUCTS = [
    { id: 1, name: 'Olympic Barbell 20kg', category: 'strength', price: 8999, origPrice: 13999, rating: 4.8, reviews: 324, badge: 'bestseller', icon: '🏋️', desc: 'Commercial-grade 20kg Olympic barbell. 28mm shaft diameter, chrome finish, 1500kg static load capacity. Perfect for powerlifting, Olympic lifting, and heavy compound movements.', specs: [{ l: 'Weight', v: '20 kg' }, { l: 'Length', v: '2.2 m' }, { l: 'Shaft', v: '28mm' }, { l: 'Capacity', v: '680 kg' }] },
    { id: 2, name: 'Adjustable Dumbbell Set', category: 'strength', price: 14999, origPrice: 21999, rating: 4.9, reviews: 512, badge: 'hot', icon: '💪', desc: 'Quick-lock adjustable dumbbells from 5–50kg. Replaces 9 pairs of dumbbells. High-strength steel with Urethane coating — built for years of heavy use.', specs: [{ l: 'Range', v: '5-50 kg' }, { l: 'Increment', v: '2.5 kg' }, { l: 'Material', v: 'Urethane' }, { l: 'Pairs', v: 'Replaces 9' }] },
    { id: 3, name: 'Commercial Treadmill Pro', category: 'cardio', price: 79999, origPrice: 120000, rating: 4.7, reviews: 189, badge: 'sale', icon: '🏃', desc: '3.5 HP motor, 0–20 km/h speed, 15% incline, 7" HD display. Whisper-quiet belt system. 12 preset programs, heart-rate monitoring, Bluetooth connectivity.', specs: [{ l: 'Motor', v: '3.5 HP' }, { l: 'Speed', v: '0-20 km/h' }, { l: 'Incline', v: '0-15%' }, { l: 'Display', v: '7" HD' }, { l: 'Programs', v: '12 Preset' }] },
    { id: 4, name: 'Creatine Monohydrate 500g', category: 'supplements', price: 799, origPrice: 1199, rating: 4.6, reviews: 980, badge: 'bestseller', icon: '💊', desc: 'Micronized Creatine Monohydrate for maximum absorption. 5g per serving, 100 servings. No fillers, no additives. Lab tested for purity and potency.', specs: [{ l: 'Servings', v: '100' }, { l: 'Per Serving', v: '5g' }, { l: 'Flavour', v: 'Unflavoured' }, { l: 'Tested', v: '3rd Party' }] },
    { id: 5, name: 'Whey Protein Gold 2kg', category: 'supplements', price: 3499, origPrice: 4999, rating: 4.9, reviews: 1240, badge: 'hot', icon: '🥛', desc: '24g protein per scoop. Cold-filtration whey protein with BCAA profile. Banned substance tested. Available in Chocolate, Vanilla, and Strawberry.', specs: [{ l: 'Per Scoop', v: '24g Protein' }, { l: 'BCAA', v: '5.5g' }, { l: 'Servings', v: '66' }, { l: 'Weight', v: '2 kg' }] },
    { id: 6, name: 'Power Rack with Pull-Up Bar', category: 'strength', price: 28999, origPrice: 39999, rating: 4.8, reviews: 231, badge: 'new', icon: '🔩', desc: 'Heavy-duty 11-gauge steel power rack with dual pull-up bars, J-hooks, and safety spotter arms. 453kg rated load. Bolt-to-floor compatible.', specs: [{ l: 'Steel', v: '11-Gauge' }, { l: 'Capacity', v: '453 kg' }, { l: 'Height', v: '7.5 ft' }, { l: 'Pull-up', v: 'Multi-Grip' }] },
    { id: 7, name: 'Resistance Bands Set (5pc)', category: 'accessories', price: 1299, origPrice: 1999, rating: 4.5, reviews: 760, badge: 'sale', icon: '🧤', desc: '5 progressive-resistance latex bands (5–50kg resistance). Ideal for warm-up, stretching, pull-up assistance, and rehab. Includes carry pouch.', specs: [{ l: 'Pieces', v: '5' }, { l: 'Resistance', v: '5-50 kg' }, { l: 'Material', v: 'Natural Latex' }, { l: 'Color', v: 'Coded' }] },
    { id: 8, name: 'Foam Roller Pro', category: 'recovery', price: 1499, origPrice: 2199, rating: 4.6, reviews: 432, badge: 'new', icon: '🧘', desc: 'High-density EPP foam with textured surface for deep tissue massage. 90cm long, suitable for back, legs, and IT band. Non-slip end caps.', specs: [{ l: 'Length', v: '90 cm' }, { l: 'Diameter', v: '15 cm' }, { l: 'Density', v: 'High' }, { l: 'Material', v: 'EPP Foam' }] },
    { id: 9, name: 'Air Assault Bike', category: 'cardio', price: 44999, origPrice: 59999, rating: 4.7, reviews: 143, badge: 'hot', icon: '🚴', desc: 'Fan-resistance air bike for unlimited resistance. Full-body workout with push-pull handlebars. LCD display showing calories, RPM, time, and heart rate.', specs: [{ l: 'Resistance', v: 'Air (Infinite)' }, { l: 'Display', v: 'LCD' }, { l: 'Drive', v: 'Chain' }, { l: 'Seat', v: 'Adjustable' }] },
    { id: 10, name: 'Weight Plates Set 100kg', category: 'strength', price: 19999, origPrice: 27999, rating: 4.8, reviews: 289, badge: 'sale', icon: '🔵', desc: 'Cast iron Olympic weight plates with chrome collars. Includes 2×25kg, 4×10kg, 4×5kg, 4×2.5kg plates. Compatible with all 50mm Olympic barbells.', specs: [{ l: 'Total', v: '100 kg' }, { l: 'Hole', v: '50mm' }, { l: 'Material', v: 'Cast Iron' }, { l: 'Collar', v: 'Chrome' }] },
    { id: 11, name: 'Gym Gloves Pro', category: 'accessories', price: 799, origPrice: 1299, rating: 4.4, reviews: 540, badge: '', icon: '🧤', desc: 'Premium leather palm grip gloves with wrist wrap support. Half-finger design for ventilation. Anti-slip silica gel pattern on palm.', specs: [{ l: 'Material', v: 'Leather' }, { l: 'Closure', v: 'Velcro' }, { l: 'Sizes', v: 'S/M/L/XL' }, { l: 'Color', v: 'Black' }] },
    { id: 12, name: 'Pre-Workout Ignite 300g', category: 'supplements', price: 1999, origPrice: 2999, rating: 4.7, reviews: 670, badge: 'hot', icon: '⚡', desc: 'High-stim pre-workout with 300mg Caffeine, 6g Citrulline, 3.2g Beta-Alanine, and 1g Agmatine. Explosive energy, laser focus, skin-splitting pumps.', specs: [{ l: 'Caffeine', v: '300mg' }, { l: 'Citrulline', v: '6g' }, { l: 'Beta-Alanine', v: '3.2g' }, { l: 'Servings', v: '60' }] },
];

const SUPPLEMENTS = [
    { id: 21, name: 'ON Gold Standard Whey 2kg', category: 'supplements', price: 4499, origPrice: 5999, rating: 5.0, reviews: 2100, badge: 'bestseller', icon: '🥇', desc: 'The world\'s best-selling whey protein. 24g of blended protein per serving with ultra-pure whey protein isolates. The gold standard in sports nutrition.', specs: [{ l: 'Per Scoop', v: '24g' }, { l: 'Calories', v: '120' }, { l: 'Servings', v: '74' }, { l: 'Brand', v: 'Optimum' }] },
    { id: 22, name: 'MuscleBlaze Mass Gainer 5kg', category: 'supplements', price: 2799, origPrice: 3999, rating: 4.6, reviews: 1345, badge: 'hot', icon: '💪', desc: 'High-calorie mass gainer with 25g protein and 140g carbs per serving. Ideal for hardgainers who struggle to put on size. 24 vitamins and minerals.', specs: [{ l: 'Protein', v: '25g' }, { l: 'Carbs', v: '140g' }, { l: 'Calories', v: '710' }, { l: 'Servings', v: '25' }] },
    { id: 23, name: 'Creatine HCL 250g', category: 'supplements', price: 1299, origPrice: 1799, rating: 4.8, reviews: 892, badge: 'new', icon: '💊', desc: 'Creatine Hydrochloride is 40x more soluble than creatine monohydrate. No loading phase, no bloating. 750mg per serving — highly concentrated.', specs: [{ l: 'Per Serve', v: '750mg HCL' }, { l: 'Servings', v: '333' }, { l: 'Bloating', v: 'Zero' }, { l: 'Tested', v: 'Informed' }] },
    { id: 24, name: 'BCAA 8:1:1 Powder 400g', category: 'supplements', price: 1499, origPrice: 2299, rating: 4.7, reviews: 756, badge: 'sale', icon: '⚡', desc: '8:1:1 ratio BCAA with 8g Leucine per serving for maximum muscle protein synthesis. Tropical flavour, electrolytes included, instant mixing formula.', specs: [{ l: 'BCAA Ratio', v: '8:1:1' }, { l: 'Leucine', v: '8g' }, { l: 'Electrolytes', v: 'Yes' }, { l: 'Servings', v: '40' }] },
    { id: 25, name: 'Fish Oil Omega-3 90 Caps', category: 'supplements', price: 599, origPrice: 999, rating: 4.5, reviews: 1100, badge: '', icon: '🐟', desc: 'Triple-strength fish oil delivering 900mg EPA+DHA per softgel. Enteric-coated to prevent fishy burps. Supports joint health, heart health, and recovery.', specs: [{ l: 'EPA+DHA', v: '900mg' }, { l: 'Softgels', v: '90' }, { l: 'Per Day', v: '1 softgel' }, { l: 'Coating', v: 'Enteric' }] },
    { id: 26, name: 'Ashwagandha KSM-66 600mg', category: 'supplements', price: 799, origPrice: 1299, rating: 4.8, reviews: 630, badge: 'hot', icon: '🌿', desc: 'Clinically studied KSM-66 Ashwagandha root extract. Reduces cortisol by 28%, increases testosterone, improves strength and endurance. 60 capsules.', specs: [{ l: 'Extract', v: 'KSM-66' }, { l: 'Per Cap', v: '600mg' }, { l: 'Capsules', v: '60' }, { l: 'Cortisol', v: '-28%' }] },
];

const TESTIMONIALS = [
    { name: 'Arjun Kapoor', role: 'Competitive Powerlifter', rating: 5, text: 'The Olympic barbell I bought from GymForce is absolutely insane quality. Knurl is perfect, spin is smooth. This is commercial-grade at a fraction of the gym price. Highly recommend.', avatar: '💪', verified: true },
    { name: 'Priya Sharma', role: 'CrossFit Coach', rating: 5, text: 'The adjustable dumbbells are genius. I cleared half my gym floor using one pair. Quality is excellent and delivery was lightning fast. GymForce is my go-to for all gym purchases.', avatar: '🏋️', verified: true },
    { name: 'Rohan Singh', role: 'Fitness Enthusiast', rating: 5, text: 'Ordered ON Whey and Creatine together. Got discount + free shaker. Products are 100% authentic. The customer support helped me pick the right supplements for my goals.', avatar: '⚡', verified: true },
    { name: 'Ananya Reddy', role: 'Personal Trainer', rating: 4, text: 'The power rack is a beast. Assembly took a while but the instructions were clear. Rock solid. My clients feel the quality difference immediately. Will definitely order again.', avatar: '🔥', verified: true },
    { name: 'Vikram Nair', role: 'Marathon Runner', rating: 5, text: 'Bought the treadmill for home use. The whisper-quiet motor is no joke. Even at 18 km/h it\'s barely audible. Best investment I\'ve made for home fitness.', avatar: '🏃', verified: true },
    { name: 'Sneha Patel', role: 'Yoga & Strength Coach', rating: 5, text: 'Love the foam roller and resistance bands from here. Perfect for my mobility sessions. The foam roller has the right density — not too soft, not too hard. Will reccomend to all clients.', avatar: '🧘', verified: true },
];

/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem('gf_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('gf_wishlist') || '[]');
let currentFilter = 'all';
let currentSort = 'default';
let visibleCount = 8;
let carouselIndex = 0;
let currentModalProduct = null;
let currentQty = 1;

/* ===== UTILS ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const fmt = (n) => '₹' + n.toLocaleString('en-IN');
const stars = (r) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r));
const disc = (p, o) => Math.round(((o - p) / o) * 100);

function showToast(msg, type = 'success') {
    const t = $('#toast');
    t.textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => { t.className = 'toast'; }, 2800);
}

function saveCart() { localStorage.setItem('gf_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('gf_wishlist', JSON.stringify(wishlist)); }

/* ===== LOADER ===== */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = $('#loader');
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.6s ease';
        setTimeout(() => { loader.style.display = 'none'; initAnimations(); }, 600);
    }, 2200);
});

/* ===== NAVBAR ===== */
const navbar = $('#navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const s = window.scrollY;
    navbar.classList.toggle('scrolled', s > 60);
    $('#scrollTop').classList.toggle('visible', s > 400);
    // Active nav link
    $$('.nav-link').forEach(link => {
        const sec = link.getAttribute('href').slice(1);
        const el = document.getElementById(sec);
        if (el) {
            const b = el.getBoundingClientRect();
            link.classList.toggle('active', b.top <= 80 && b.bottom > 80);
        }
    });
    lastScroll = s;
});

/* Hamburger */
const ham = $('#hamburger');
const mobileMenu = $('#mobileMenu');
ham.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
});
$$('.mobile-link').forEach(l => l.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    ham.classList.remove('open');
}));

/* Search */
const searchToggle = $('#searchToggle');
const searchBar = $('#searchBar');
const searchInput = $('#searchInput');
searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) searchInput.focus();
});
$('#searchClear').addEventListener('click', () => { searchInput.value = ''; renderSearchResults(''); });
searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value.trim()));

function renderSearchResults(q) {
    const container = $('#searchResults');
    if (!q) { container.innerHTML = ''; return; }
    const all = [...PRODUCTS, ...SUPPLEMENTS];
    const res = all.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.category.includes(q.toLowerCase()));
    container.innerHTML = res.slice(0, 5).map(p => `
    <div class="search-result-item" onclick="openQuickView(${p.id}, true)">
      <span>${p.icon}</span>
      <div><div>${p.name}</div><small style="color:var(--text-muted)">${fmt(p.price)}</small></div>
    </div>
  `).join('') || '<div class="search-result-item">No results found</div>';
}

/* Scroll Top */
$('#scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
    $$('.stat-num').forEach(el => {
        const target = +el.dataset.target;
        let count = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            count = Math.min(count + step, target);
            el.textContent = count.toLocaleString('en-IN');
            if (count >= target) clearInterval(timer);
        }, 25);
    });
}

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function setupReveal() {
    $$('.reveal').forEach(el => revealObserver.observe(el));
}

/* ===== PARTICLE CANVAS ===== */
function initParticles() {
    const canvas = $('#particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.3,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            o: Math.random() * 0.5 + 0.1
        });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200,240,0,${p.o})`;
            ctx.fill();
            p.x += p.dx; p.y += p.dy;
            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ===== PRODUCTS ===== */
function getFilteredProducts() {
    let list = [...PRODUCTS];
    if (currentFilter !== 'all') list = list.filter(p => p.category === currentFilter);
    switch (currentSort) {
        case 'price-asc': list.sort((a, b) => a.price - b.price); break;
        case 'price-desc': list.sort((a, b) => b.price - a.price); break;
        case 'rating': list.sort((a, b) => b.rating - a.rating); break;
        case 'newest': list.sort((a, b) => b.id - a.id); break;
    }
    return list;
}

function productCardHTML(p) {
    const inWish = wishlist.includes(p.id);
    return `
    <div class="product-card" data-id="${p.id}" data-category="${p.category}">
      <div class="product-img-wrap">
        <div class="product-img-placeholder" style="background:${getBgColor(p.category)}">${p.icon}</div>
        ${p.badge ? `<div class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</div>` : ''}
        <div class="product-actions">
          <button onclick="openQuickView(${p.id})">Quick View</button>
          <button class="wishlist-action ${inWish ? 'wishlisted' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">${inWish ? '♥' : '♡'}</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category.toUpperCase()}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${stars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${fmt(p.price)}</span>
          <span class="product-orig-price">${fmt(p.origPrice)}</span>
          <span class="product-discount">${disc(p.price, p.origPrice)}% off</span>
        </div>
        <button class="product-add-btn" onclick="addToCart(${p.id})">+ ADD TO CART</button>
      </div>
    </div>`;
}

function getBgColor(cat) {
    const map = { strength: 'linear-gradient(135deg,#0d1a00,#1a2f00)', cardio: 'linear-gradient(135deg,#000d1a,#001a2f)', supplements: 'linear-gradient(135deg,#1a000d,#2f0012)', accessories: 'linear-gradient(135deg,#0d0d1a,#1a1a2f)', recovery: 'linear-gradient(135deg,#1a0d00,#2f1400)' };
    return map[cat] || 'var(--bg3)';
}

function renderProducts() {
    const grid = $('#productsGrid');
    const list = getFilteredProducts();
    const shown = list.slice(0, visibleCount);
    grid.innerHTML = shown.map(productCardHTML).join('');
    $('#loadMoreBtn').style.display = list.length > visibleCount ? '' : 'none';
}

/* Filter Tabs */
$$('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        $$('.filter-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        currentFilter = tab.dataset.filter;
        visibleCount = 8;
        renderProducts();
    });
});

$('#sortSelect').addEventListener('change', (e) => { currentSort = e.target.value; renderProducts(); });
$('#loadMoreBtn').addEventListener('click', () => { visibleCount += 4; renderProducts(); });

// Global filter function for category cards
window.filterProducts = function (cat) {
    const tab = $(`.filter-tab[data-filter="${cat}"]`);
    if (tab) { tab.click(); }
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

/* ===== SUPPLEMENTS CAROUSEL ===== */
function renderCarousel() {
    const track = $('#carouselTrack');
    track.innerHTML = SUPPLEMENTS.map(p => `
    <div class="carousel-item">
      <div class="product-card" data-id="${p.id}">
        <div class="product-img-wrap">
          <div class="product-img-placeholder" style="background:${getBgColor(p.category)}">${p.icon}</div>
          ${p.badge ? `<div class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</div>` : ''}
          <div class="product-actions">
            <button onclick="openQuickView(${p.id}, true)">Quick View</button>
            <button class="wishlist-action" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">♡</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-category">${p.category.toUpperCase()}</div>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">${stars(p.rating)}</span>
            <span class="rating-count">(${p.reviews.toLocaleString()})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">${fmt(p.price)}</span>
            <span class="product-orig-price">${fmt(p.origPrice)}</span>
            <span class="product-discount">${disc(p.price, p.origPrice)}% off</span>
          </div>
          <button class="product-add-btn" onclick="addToCart(${p.id}, true)">+ ADD TO CART</button>
        </div>
      </div>
    </div>
  `).join('');

    // Dots
    const dots = $('#carouselDots');
    dots.innerHTML = SUPPLEMENTS.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" role="tab" aria-label="Slide ${i + 1}" onclick="goToSlide(${i})"></button>`).join('');
}

function getItemsPerView() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
}

function goToSlide(i) {
    const perView = getItemsPerView();
    const max = Math.max(0, SUPPLEMENTS.length - perView);
    carouselIndex = Math.max(0, Math.min(i, max));
    const itemW = $('#carouselTrack').children[0]?.offsetWidth + 24 || 0;
    $('#carouselTrack').style.transform = `translateX(-${carouselIndex * itemW}px)`;
    $$('.dot').forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

$('#carouselPrev').addEventListener('click', () => goToSlide(carouselIndex - 1));
$('#carouselNext').addEventListener('click', () => goToSlide(carouselIndex + 1));
window.goToSlide = goToSlide;

// Auto-play
let carouselTimer = setInterval(() => {
    const perView = getItemsPerView();
    const max = SUPPLEMENTS.length - perView;
    goToSlide(carouselIndex >= max ? 0 : carouselIndex + 1);
}, 4000);

$('#carouselTrack').addEventListener('mouseenter', () => clearInterval(carouselTimer));
$('#carouselTrack').addEventListener('mouseleave', () => {
    carouselTimer = setInterval(() => {
        const perView = getItemsPerView();
        const max = SUPPLEMENTS.length - perView;
        goToSlide(carouselIndex >= max ? 0 : carouselIndex + 1);
    }, 4000);
});

/* ===== TESTIMONIALS ===== */
function renderTestimonials() {
    $('#testimonialsGrid').innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.avatar}</div>
        <div>
          <div class="author-name">${t.name} ${t.verified ? '✅' : ''}</div>
          <div class="author-role">${t.role}</div>
          <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ===== CART ===== */
function addToCart(id, isSupp = false) {
    const all = [...PRODUCTS, ...SUPPLEMENTS];
    const p = all.find(x => x.id === id);
    if (!p) return;
    const existing = cart.find(c => c.id === id);
    if (existing) { existing.qty++; }
    else { cart.push({ ...p, qty: 1 }); }
    saveCart(); updateCartUI();
    showToast(`✅ ${p.name} added to cart!`);
}
window.addToCart = addToCart;

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart(); updateCartUI(); renderCartItems();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); renderCartItems(); }
}

function updateCartUI() {
    const count = cart.reduce((s, c) => s + c.qty, 0);
    const countEl = $('#cartCount');
    const countDrawer = $('#cartCountDrawer');
    countEl.textContent = count;
    countDrawer.textContent = count;
    countEl.style.display = count > 0 ? '' : 'none';
    renderCartItems();
}

function renderCartItems() {
    const container = $('#cartItems');
    const footer = $('#cartFooter');
    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><span>Add some awesome gear!</span></div>';
        footer.style.display = 'none';
        return;
    }
    container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmt(item.price)}</div>
        <div class="cart-item-qty">
          <button onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, +1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove">✕</button>
    </div>
  `).join('');
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    $('#cartTotal').textContent = fmt(total);
    footer.style.display = '';
}

// Cart drawer
$('#cartBtn').addEventListener('click', () => {
    $('#cartDrawer').classList.add('open');
    $('#cartOverlay').classList.add('open');
});
function closeCart() {
    $('#cartDrawer').classList.remove('open');
    $('#cartOverlay').classList.remove('open');
}
$('#closeCart').addEventListener('click', closeCart);
$('#cartOverlay').addEventListener('click', closeCart);
$('#clearCartBtn').addEventListener('click', () => {
    cart = []; saveCart(); updateCartUI();
    showToast('Cart cleared!', 'error');
});

/* ===== WISHLIST ===== */
window.toggleWishlist = function (id, btn) {
    const all = [...PRODUCTS, ...SUPPLEMENTS];
    const p = all.find(x => x.id === id);
    if (!p) return;
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        if (btn) { btn.textContent = '♡'; btn.classList.remove('wishlisted'); }
        showToast(`Removed from wishlist`);
    } else {
        wishlist.push(id);
        if (btn) { btn.textContent = '♥'; btn.classList.add('wishlisted'); }
        showToast(`❤️ ${p.name} wishlisted!`);
    }
    saveWishlist();
    const wCount = $('#wishlistCount');
    wCount.textContent = wishlist.length;
    wCount.style.display = wishlist.length > 0 ? '' : 'none';
};

/* ===== QUICK VIEW MODAL ===== */
window.openQuickView = function (id, isSupp = false) {
    const all = [...PRODUCTS, ...SUPPLEMENTS];
    const p = all.find(x => x.id === id);
    if (!p) return;
    currentModalProduct = p;
    currentQty = 1;
    $('#qtyValue').textContent = 1;

    $('#modalCategory').textContent = p.category.toUpperCase();
    $('#modalTitle').textContent = p.name;
    $('#modalRating').innerHTML = `<span class="stars">${stars(p.rating)}</span> <span>${p.rating} (${p.reviews.toLocaleString()} reviews)</span>`;
    $('#modalPrice').textContent = fmt(p.price);
    $('#modalOrigPrice').textContent = fmt(p.origPrice);
    $('#modalDiscount').textContent = `${disc(p.price, p.origPrice)}% OFF`;
    $('#modalDesc').textContent = p.desc;
    $('#modalProductImg').textContent = p.icon;
    $('#modalProductImg').style.background = getBgColor(p.category);
    if (p.badge) {
        $('#modalBadges').innerHTML = `<div class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</div>`;
    } else { $('#modalBadges').innerHTML = ''; }
    if (p.specs) {
        $('#modalSpecs').innerHTML = p.specs.map(s => `<div class="spec-item"><span class="spec-label">${s.l}</span><span class="spec-value">${s.v}</span></div>`).join('');
    }
    const inWish = wishlist.includes(p.id);
    const wishBtn = $('#modalWishlist');
    wishBtn.textContent = inWish ? '♥' : '♡';
    wishBtn.className = `btn-icon-lg${inWish ? ' wishlisted' : ''}`;

    $('#quickViewModal').classList.add('open');
    $('#modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    $('#quickViewModal').classList.remove('open');
    $('#modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}
$('#closeModal').addEventListener('click', closeModal);
$('#modalOverlay').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeCart(); } });

$('#qtyMinus').addEventListener('click', () => { if (currentQty > 1) { currentQty--; $('#qtyValue').textContent = currentQty; } });
$('#qtyPlus').addEventListener('click', () => { currentQty++; $('#qtyValue').textContent = currentQty; });

$('#modalAddCart').addEventListener('click', () => {
    if (!currentModalProduct) return;
    for (let i = 0; i < currentQty; i++) addToCart(currentModalProduct.id);
    closeModal();
});

$('#modalWishlist').addEventListener('click', function () {
    if (!currentModalProduct) return;
    toggleWishlist(currentModalProduct.id, this);
});

/* ===== NEWSLETTER ===== */
window.handleNewsletter = function (e) {
    e.preventDefault();
    $('#newsletterForm').style.display = 'none';
    $('#newsletterSuccess').style.display = 'block';
    showToast('🎉 Welcome to GymForce family!');
};

/* ===== HERO TYPED TEXT ===== */
function initTypedHero() {
    const words = ['LEGEND', 'PHYSIQUE', 'STRENGTH', 'DESTINY'];
    let wi = 0; let ci = 0; let deleting = false;
    const el = $('#heroSpan');
    if (!el) return;
    function type() {
        const word = words[wi];
        el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
        if (!deleting && ci > word.length) { setTimeout(() => { deleting = true; type(); }, 2000); return; }
        if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; }
        setTimeout(type, deleting ? 60 : 100);
    }
    type();
}

/* ===== GSAP ANIMATIONS ===== */
function initAnimations() {
    if (typeof gsap === 'undefined') { fallbackAnimations(); return; }
    gsap.registerPlugin(ScrollTrigger);

    // Hero
    gsap.from('#heroText > *', { y: 40, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out', delay: 0.2 });
    gsap.from('#heroVisual', { x: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 });

    // Scroll-triggered
    gsap.utils.toArray('.section-header').forEach(el => {
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 80%' }, y: 30, opacity: 0, duration: 0.7, ease: 'power2.out' });
    });
    gsap.utils.toArray('.category-card').forEach((el, i) => {
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 85%' }, y: 40, opacity: 0, duration: 0.6, delay: i * 0.08, ease: 'power2.out' });
    });
    gsap.utils.toArray('.why-card').forEach((el, i) => {
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 85%' }, y: 30, opacity: 0, duration: 0.5, delay: i * 0.1, ease: 'power2.out' });
    });

    // Counter on hero visible
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        ScrollTrigger.create({ trigger: heroStats, start: 'top 90%', once: true, onEnter: animateCounters });
    }

    setupReveal();
    initParticles();
    initTypedHero();
}

function fallbackAnimations() {
    setupReveal();
    initParticles();
    initTypedHero();
    animateCounters();
}

/* ===== WISHLIST COUNT INIT ===== */
function initWishlistCount() {
    const wCount = $('#wishlistCount');
    if (wishlist.length > 0) { wCount.textContent = wishlist.length; wCount.style.display = ''; }
}

/* ===== SMOOTH NAV SCROLL ===== */
$$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.getElementById(a.getAttribute('href').slice(1));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCarousel();
    renderTestimonials();
    updateCartUI();
    initWishlistCount();
});
