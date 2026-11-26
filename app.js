(() => {
      const STORAGE_KEY = 'kulinerbunta_v2_state';

      const DEFAULT_STATE = {
        settings: {
          appName: 'KulinerBunta.id',
          deliveryFee: 5000,
          serviceFee: 1000,
          supabaseUrl: '',
          supabaseKey: ''
        },
        merchants: [
          {
            id: 'M-01',
            name: 'Warung Ikan Bakar Pesisir Bunta',
            owner: 'Hj. Fatmawati',
            wa: '085241102201',
            category: 'Seafood Bunta',
            address: 'Kelurahan Bunta I, Kec. Bunta',
            status: 'AKTIF',
            note: 'Terverifikasi lengkap',
            createdAt: '2026-11-20',
            docs: { ktp: '', selfie: '', nib: '' }
          },
          {
            id: 'M-02',
            name: 'Dapur Lalapan & Nasi Kuning Mas Budi',
            owner: 'Budi Santoso',
            wa: '081355218802',
            category: 'Makanan Berat',
            address: 'Kelurahan Bunta II, Kec. Bunta',
            status: 'AKTIF',
            note: 'Terverifikasi lengkap',
            createdAt: '2026-11-21',
            docs: { ktp: '', selfie: '', nib: '' }
          },
          {
            id: 'M-03',
            name: 'Kedai Es Kelapa & Pisang Goroho Salabenda',
            owner: 'Siti Rahma',
            wa: '082199041103',
            category: 'Jajanan & Kue',
            address: 'Desa Salabenda, Kec. Bunta',
            status: 'AKTIF',
            note: 'Terverifikasi lengkap',
            createdAt: '2026-11-22',
            docs: { ktp: '', selfie: '', nib: '' }
          },
          {
            id: 'M-04',
            name: 'Kopi & Kue Tradisional Pongian',
            owner: 'Arifuddin',
            wa: '085342119904',
            category: 'Minuman',
            address: 'Desa Pongian, Kec. Bunta',
            status: 'PENDING',
            note: 'Menunggu pemeriksaan berkas KYC',
            createdAt: '2026-11-26',
            docs: { ktp: '', selfie: '', nib: '' }
          }
        ],
        menus: [
          { id: 'MN-01', merchantId: 'M-01', name: 'Ikan Bakar Kakap + Dabu-Dabu', category: 'Seafood Bunta', price: 35000, desc: 'Ikan kakap segar bakar arang khas Bunta dengan sambal dabu-dabu & nasi putih.', available: true, accent: 'from-red-600 to-amber-600' },
          { id: 'MN-02', merchantId: 'M-01', name: 'Cumi Saus Padang Pedas', category: 'Seafood Bunta', price: 32000, desc: 'Cumi segar olahan bumbu rica dan saus tiram gurih porsi puas.', available: true, accent: 'from-rose-600 to-orange-500' },
          { id: 'MN-03', merchantId: 'M-02', name: 'Nasi Kuning Ikan Cakalang Suwir', category: 'Makanan Berat', price: 18000, desc: 'Nasi kuning harum santan dengan cakalang suwir pedas, telur, dan bihun.', available: true, accent: 'from-amber-500 to-yellow-600' },
          { id: 'MN-04', merchantId: 'M-02', name: 'Ayam Lalapan Sambal Terasi', category: 'Makanan Berat', price: 25000, desc: 'Ayam goreng kampung renyah, lalapan segar, tahu tempe, dan sambal terasi.', available: true, accent: 'from-orange-600 to-red-600' },
          { id: 'MN-05', merchantId: 'M-03', name: 'Pisang Goroho Goreng + Sambal Roa', category: 'Jajanan & Kue', price: 15000, desc: 'Pisang goroho krispi khas Sulawesi disajikan dengan sambal ikan roa asli.', available: true, accent: 'from-amber-600 to-orange-600' },
          { id: 'MN-06', merchantId: 'M-03', name: 'Es Kelapa Muda Jeruk Nipis', category: 'Minuman', price: 10000, desc: 'Kelapa muda segar langsung petik dengan perasan jeruk nipis dan gula aren.', available: true, accent: 'from-emerald-600 to-teal-600' }
        ],
        couriers: [
          { id: 'K-01', name: 'Rizal Pratama', wa: '085240011223', vehicle: 'Honda Beat — DN 4123 RB', active: true, completed: 14 },
          { id: 'K-02', name: 'Fajar Hidayat', wa: '081341122334', vehicle: 'Yamaha Mio — DN 5521 RC', active: true, completed: 9 },
          { id: 'K-03', name: 'Ilham Saputra', wa: '082198877665', vehicle: 'Honda Vario — DN 6190 RD', active: false, completed: 6 }
        ],
        orders: [
          {
            id: 'KB-2611-01',
            createdAt: '2026-11-26 11:20',
            customerName: 'Andi Kurniawan',
            customerWa: '085241119988',
            address: 'Kelurahan Bunta I, Jl. Trans Sulawesi No. 14',
            paymentMethod: 'COD (Bayar di Tempat)',
            merchantId: 'M-01',
            courierId: 'K-01',
            status: 'Selesai',
            items: [
              { menuId: 'MN-01', name: 'Ikan Bakar Kakap + Dabu-Dabu', price: 35000, qty: 2 }
            ],
            subtotal: 70000,
            deliveryFee: 5000,
            serviceFee: 1000,
            total: 76000
          },
          {
            id: 'KB-2611-02',
            createdAt: '2026-11-26 12:10',
            customerName: 'Nurhayati',
            customerWa: '081355443322',
            address: 'Desa Bohotokong, Dusun II',
            paymentMethod: 'QRIS / Transfer Bank',
            merchantId: 'M-02',
            courierId: '',
            status: 'Siap Diambil',
            items: [
              { menuId: 'MN-03', name: 'Nasi Kuning Ikan Cakalang Suwir', price: 18000, qty: 2 },
              { menuId: 'MN-04', name: 'Ayam Lalapan Sambal Terasi', price: 25000, qty: 1 }
            ],
            subtotal: 61000,
            deliveryFee: 5000,
            serviceFee: 1000,
            total: 67000
          }
        ],
        auditLogs: [
          { time: '2026-11-26 09:00', actor: 'Sistem', action: 'Inisialisasi ekosistem KulinerBunta.id (4 Portal Terpadu).' },
          { time: '2026-11-26 11:45', actor: 'Kurir Rizal Pratama', action: 'Menyelesaikan pengantaran pesanan KB-2611-01.' }
        ]
      };

      let state = loadState();
      let cart = [];
      let activePortal = 'pembeli';
      let activeBuyerTab = 'katalog';
      let activeCategory = 'Semua';
      let activeAdminTab = 'dashboard';
      let reviewingMerchantId = null;
      let sbClient = null;
      let lastRenderLatencyMs = 0;

      const auth = {
        merchant: false,
        kurir: false,
        admin: false
      };

      const pendingDocs = { ktp: '', selfie: '', nib: '' };

      function escapeHtml(str) {
        return String(str ?? '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      function formatRp(num) {
        return 'Rp ' + (Number(num) || 0).toLocaleString('id-ID');
      }

      function nowStamp() {
        const d = new Date();
        const pad = n => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
      }

      function loadState() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
          const parsed = JSON.parse(raw);
          return {
            settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) },
            merchants: Array.isArray(parsed.merchants) ? parsed.merchants : DEFAULT_STATE.merchants,
            menus: Array.isArray(parsed.menus) ? parsed.menus : DEFAULT_STATE.menus,
            couriers: Array.isArray(parsed.couriers) ? parsed.couriers : DEFAULT_STATE.couriers,
            orders: Array.isArray(parsed.orders) ? parsed.orders : DEFAULT_STATE.orders,
            auditLogs: Array.isArray(parsed.auditLogs) ? parsed.auditLogs : DEFAULT_STATE.auditLogs
          };
        } catch (e) {
          return JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
      }

      function saveState() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
          showToast('Penyimpanan lokal penuh, beberapa perubahan hanya tersimpan di memori.', 'error');
        }
      }

      function addAudit(actor, action) {
        state.auditLogs.unshift({ time: nowStamp(), actor, action });
        if (state.auditLogs.length > 60) state.auditLogs.pop();
        saveState();
      }

      function showToast(msg, type = 'success') {
        const container = document.getElementById('toast-container');
        const el = document.createElement('div');
        const cls = type === 'error'
          ? 'bg-red-600 text-white border-red-400'
          : type === 'info'
            ? 'bg-slate-800 text-slate-100 border-slate-600'
            : 'bg-emerald-600 text-white border-emerald-400';
        el.className = `pointer-events-auto px-4 py-2.5 rounded-2xl border shadow-xl text-xs font-bold flex items-center gap-2 ${cls}`;
        el.textContent = msg;
        container.appendChild(el);
        setTimeout(() => el.remove(), 3200);
      }

      function initSupabase() {
        const url = (state.settings.supabaseUrl || '').trim();
        const key = (state.settings.supabaseKey || '').trim();
        const badge = document.getElementById('db-status-badge');
        if (url && key && window.supabase) {
          try {
            sbClient = window.supabase.createClient(url, key);
            badge.className = 'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
            badge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Supabase Aktif';
            return;
          } catch (e) {
            sbClient = null;
          }
        }
        sbClient = null;
        badge.className = 'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
        badge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Mode Lokal';
      }

      function statusBadge(status) {
        const map = {
          'Menunggu Konfirmasi': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
          'Diproses Merchant': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          'Siap Diambil': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
          'Sedang Diantar': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
          'Selesai': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          'Dibatalkan': 'bg-red-500/20 text-red-300 border-red-500/30',
          'AKTIF': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          'PENDING': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          'PERBAIKI': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
          'DITOLAK': 'bg-red-500/20 text-red-300 border-red-500/30'
        };
        const cls = map[status] || 'bg-slate-800 text-slate-300 border-slate-700';
        return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cls}">${escapeHtml(status)}</span>`;
      }

      function switchPortal(portal) {
        activePortal = portal;
        ['pembeli', 'merchant', 'kurir', 'admin'].forEach(p => {
          document.getElementById(`portal-${p}`).classList.toggle('hidden', p !== portal);
        });
        document.querySelectorAll('.portal-btn').forEach(btn => {
          const isActive = btn.dataset.portal === portal;
          btn.className = isActive
            ? 'portal-btn px-3 py-2 rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5 bg-bunta-red text-white shadow-sm shrink-0'
            : 'portal-btn px-3 py-2 rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white shrink-0';
        });
        renderAll();
      }

      /* ==================== PORTAL 1: PEMBELI ==================== */
      function renderPembeli() {
        document.getElementById('header-app-name').textContent = state.settings.appName || 'KulinerBunta.id';
        const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
        document.getElementById('cart-count-top').textContent = totalQty;
        document.getElementById('buyer-orders-badge').textContent = state.orders.length;

        const categories = ['Semua', 'Seafood Bunta', 'Makanan Berat', 'Jajanan & Kue', 'Minuman'];
        document.getElementById('buyer-category-pills').innerHTML = categories.map(cat => {
          const active = activeCategory === cat;
          return `<button type="button" data-cat="${escapeHtml(cat)}" class="cat-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition ${active ? 'bg-bunta-gold text-slate-950' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-600'}">${escapeHtml(cat)}</button>`;
        }).join('');

        const activeMerchants = state.merchants.filter(m => m.status === 'AKTIF');
        const mSel = document.getElementById('buyer-merchant-filter');
        const prevM = mSel.value;
        mSel.innerHTML = '<option value="">Semua Warung Aktif</option>' +
          activeMerchants.map(m => `<option value="${escapeHtml(m.id)}">${escapeHtml(m.name)}</option>`).join('');
        if (prevM) mSel.value = prevM;

        const q = (document.getElementById('buyer-search-input').value || '').trim().toLowerCase();
        const selectedM = mSel.value;
        const activeMIds = new Set(activeMerchants.map(m => m.id));

        const filteredMenus = state.menus.filter(mn => {
          if (!activeMIds.has(mn.merchantId)) return false;
          if (activeCategory !== 'Semua' && mn.category !== activeCategory) return false;
          if (selectedM && mn.merchantId !== selectedM) return false;
          if (!q) return true;
          const merchant = state.merchants.find(m => m.id === mn.merchantId);
          return (
            mn.name.toLowerCase().includes(q) ||
            mn.desc.toLowerCase().includes(q) ||
            mn.category.toLowerCase().includes(q) ||
            (merchant && merchant.name.toLowerCase().includes(q))
          );
        });

        const grid = document.getElementById('buyer-menu-grid');
        if (filteredMenus.length === 0) {
          grid.innerHTML = `<div class="col-span-full p-10 text-center bg-slate-900 border border-slate-800 rounded-3xl text-xs text-slate-400">Tidak ada hidangan yang cocok dengan pencarian Anda.</div>`;
        } else {
          grid.innerHTML = filteredMenus.map(mn => {
            const merchant = state.merchants.find(m => m.id === mn.merchantId);
            const inCart = cart.find(c => c.menuId === mn.id);
            return `
              <div class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-lg">
                <div>
                  <div class="h-28 bg-gradient-to-br ${escapeHtml(mn.accent || 'from-bunta-red to-amber-600')} p-4 flex flex-col justify-between relative">
                    <div class="flex items-center justify-between gap-2">
                      <span class="px-2.5 py-0.5 rounded-full bg-slate-950/60 backdrop-blur-xs text-[10px] font-bold text-white">${escapeHtml(mn.category)}</span>
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold ${mn.available ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400'}">${mn.available ? 'Tersedia' : 'Habis'}</span>
                    </div>
                    <p class="text-[11px] font-bold text-white/90 truncate">${escapeHtml(merchant ? merchant.name : 'UMKM Bunta')}</p>
                  </div>
                  <div class="p-4 space-y-1.5">
                    <h3 class="text-sm font-extrabold text-white leading-snug">${escapeHtml(mn.name)}</h3>
                    <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(mn.desc)}</p>
                  </div>
                </div>
                <div class="px-4 pb-4 pt-2 flex items-center justify-between gap-2">
                  <span class="text-base font-black text-bunta-gold">${formatRp(mn.price)}</span>
                  ${!mn.available ? `
                    <span class="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-500 text-xs font-bold">Stok Habis</span>
                  ` : inCart ? `
                    <div class="inline-flex items-center gap-2 bg-slate-950 border border-slate-700 rounded-xl p-1">
                      <button type="button" data-cart-dec="${escapeHtml(mn.id)}" class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold">-</button>
                      <span class="text-xs font-extrabold px-1">${inCart.qty}</span>
                      <button type="button" data-cart-inc="${escapeHtml(mn.id)}" class="w-7 h-7 rounded-lg bg-bunta-red hover:bg-red-600 text-white font-bold">+</button>
                    </div>
                  ` : `
                    <button type="button" data-cart-add="${escapeHtml(mn.id)}" class="px-3.5 py-2 rounded-xl bg-bunta-red hover:bg-red-600 text-white text-xs font-extrabold transition inline-flex items-center gap-1">
                      <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                      Tambah
                    </button>
                  `}
                </div>
              </div>
            `;
          }).join('');
        }

        // Render Buyer Orders
        const ordersList = document.getElementById('buyer-orders-list');
        if (state.orders.length === 0) {
          ordersList.innerHTML = `<div class="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl text-xs text-slate-400">Belum ada pesanan. Pilih menu dari katalog untuk mulai memesan.</div>`;
        } else {
          const stages = ['Menunggu Konfirmasi', 'Diproses Merchant', 'Siap Diambil', 'Sedang Diantar', 'Selesai'];
          ordersList.innerHTML = state.orders.map(o => {
            const merchant = state.merchants.find(m => m.id === o.merchantId);
            const courier = state.couriers.find(c => c.id === o.courierId);
            const idx = stages.indexOf(o.status);
            const waMsg = encodeURIComponent(`Halo ${merchant ? merchant.name : 'KulinerBunta'}, saya ${o.customerName} konfirmasi pesanan ${o.id} total ${formatRp(o.total)} (${o.paymentMethod}). Alamat: ${o.address}`);
            return `
              <div class="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4">
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="font-mono text-xs font-extrabold text-bunta-gold">${escapeHtml(o.id)}</span>
                      ${statusBadge(o.status)}
                      <span class="text-[11px] text-slate-400">${escapeHtml(o.createdAt)}</span>
                    </div>
                    <h4 class="text-sm font-extrabold text-white mt-1">${escapeHtml(merchant ? merchant.name : 'UMKM Bunta')}</h4>
                    <p class="text-xs text-slate-400">${escapeHtml(o.customerName)} • ${escapeHtml(o.address)}</p>
                  </div>
                  <div class="text-right">
                    <span class="text-sm font-black text-bunta-gold block">${formatRp(o.total)}</span>
                    <span class="text-[11px] text-slate-400">${escapeHtml(o.paymentMethod)}</span>
                  </div>
                </div>
                <div class="text-xs text-slate-300 bg-slate-950/70 rounded-2xl p-3 space-y-1">
                  ${o.items.map(it => `<div class="flex justify-between"><span>${it.qty}x ${escapeHtml(it.name)}</span><span class="font-semibold">${formatRp(it.price * it.qty)}</span></div>`).join('')}
                </div>
                ${o.status !== 'Dibatalkan' ? `
                  <div class="grid grid-cols-5 gap-1.5">
                    ${stages.map((st, i) => `
                      <div>
                        <div class="h-1.5 rounded-full ${i <= idx ? 'bg-emerald-500' : 'bg-slate-800'}"></div>
                        <span class="text-[10px] block mt-1 truncate ${i <= idx ? 'text-emerald-400 font-bold' : 'text-slate-500'}">${escapeHtml(st)}</span>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 text-xs">
                  <span class="text-slate-400">${courier ? `Kurir: <strong class="text-emerald-400">${escapeHtml(courier.name)}</strong> (${escapeHtml(courier.vehicle)})` : 'Menunggu penugasan kurir lokal'}</span>
                  <a href="https://wa.me/${escapeHtml((merchant?.wa || '6285241102201').replace(/^0/, '62'))}?text=${waMsg}" target="_blank" rel="noopener" class="px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold inline-flex items-center gap-1.5">
                    <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            `;
          }).join('');
        }
      }

      function renderCartModal() {
        const wrap = document.getElementById('cart-items-container');
        const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
        const delivery = cart.length > 0 ? Number(state.settings.deliveryFee || 0) : 0;
        const service = cart.length > 0 ? Number(state.settings.serviceFee || 0) : 0;
        const total = subtotal + delivery + service;

        document.getElementById('co-subtotal').textContent = formatRp(subtotal);
        document.getElementById('co-delivery').textContent = formatRp(delivery);
        document.getElementById('co-service').textContent = formatRp(service);
        document.getElementById('co-total').textContent = formatRp(total);

        if (cart.length === 0) {
          wrap.innerHTML = `<div class="p-6 text-center rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400">Keranjang Anda masih kosong.</div>`;
          return;
        }
        wrap.innerHTML = cart.map(item => `
          <div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <div class="min-w-0">
              <p class="font-bold text-white truncate">${escapeHtml(item.name)}</p>
              <p class="text-slate-400">${formatRp(item.price)} x ${item.qty}</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button type="button" data-cart-dec="${escapeHtml(item.menuId)}" class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold">-</button>
              <span class="font-extrabold w-5 text-center">${item.qty}</span>
              <button type="button" data-cart-inc="${escapeHtml(item.menuId)}" class="w-7 h-7 rounded-lg bg-bunta-red hover:bg-red-600 text-white font-bold">+</button>
            </div>
          </div>
        `).join('');
      }

      function addToCart(menuId) {
        const mn = state.menus.find(m => m.id === menuId);
        if (!mn || !mn.available) return;
        if (cart.length > 0 && cart[0].merchantId !== mn.merchantId) {
          cart = [];
          showToast('Keranjang diganti ke warung baru agar pengantaran satu rute.', 'info');
        }
        const existing = cart.find(c => c.menuId === menuId);
        if (existing) existing.qty += 1;
        else cart.push({ menuId: mn.id, merchantId: mn.merchantId, name: mn.name, price: mn.price, qty: 1 });
        renderPembeli();
        renderCartModal();
      }

      function updateCartQty(menuId, delta) {
        const idx = cart.findIndex(c => c.menuId === menuId);
        if (idx < 0) return;
        cart[idx].qty += delta;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
        renderPembeli();
        renderCartModal();
      }

      /* ==================== PORTAL 2: MERCHANT ==================== */
      function renderMerchant() {
        document.getElementById('merchant-auth-gate').classList.toggle('hidden', auth.merchant);
        document.getElementById('merchant-dashboard').classList.toggle('hidden', !auth.merchant);
        if (!auth.merchant) return;

        const sel = document.getElementById('merchant-active-select');
        const activeList = state.merchants.filter(m => m.status === 'AKTIF');
        const prev = sel.value;
        sel.innerHTML = activeList.map(m => `<option value="${escapeHtml(m.id)}">${escapeHtml(m.name)}</option>`).join('');
        if (prev && activeList.some(m => m.id === prev)) sel.value = prev;
        const mId = sel.value || (activeList[0] ? activeList[0].id : '');

        const mOrders = state.orders.filter(o => o.merchantId === mId);
        document.getElementById('merchant-orders-count').textContent = mOrders.length;
        const oWrap = document.getElementById('merchant-orders-list');
        if (mOrders.length === 0) {
          oWrap.innerHTML = `<div class="p-6 text-center rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400">Belum ada pesanan masuk untuk warung ini.</div>`;
        } else {
          oWrap.innerHTML = mOrders.map(o => `
            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs">
              <div class="flex items-center justify-between gap-2">
                <span class="font-mono font-extrabold text-bunta-gold">${escapeHtml(o.id)}</span>
                ${statusBadge(o.status)}
              </div>
              <p class="font-bold text-white">${escapeHtml(o.customerName)} <span class="text-slate-400 font-normal">(${escapeHtml(o.paymentMethod)})</span></p>
              <p class="text-slate-400">${o.items.map(i => `${i.qty}x ${escapeHtml(i.name)}`).join(', ')}</p>
              <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
                <span class="font-extrabold text-emerald-400">${formatRp(o.total)}</span>
                <div class="flex items-center gap-1.5">
                  ${o.status === 'Menunggu Konfirmasi' ? `
                    <button type="button" data-m-status="${escapeHtml(o.id)}|Diproses Merchant" class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold">Terima & Masak</button>
                    <button type="button" data-m-status="${escapeHtml(o.id)}|Dibatalkan" class="px-2.5 py-1.5 rounded-lg bg-red-900/60 hover:bg-red-800 text-red-200 font-bold">Tolak</button>
                  ` : o.status === 'Diproses Merchant' ? `
                    <button type="button" data-m-status="${escapeHtml(o.id)}|Siap Diambil" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold">Siap Diambil Kurir</button>
                  ` : `<span class="text-[11px] text-slate-500">Diteruskan ke kurir / selesai</span>`}
                </div>
              </div>
            </div>
          `).join('');
        }

        const mMenus = state.menus.filter(mn => mn.merchantId === mId);
        document.getElementById('merchant-menus-count').textContent = `${mMenus.length} Menu`;
        const mnWrap = document.getElementById('merchant-menus-list');
        if (mMenus.length === 0) {
          mnWrap.innerHTML = `<div class="p-6 text-center rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400">Belum ada menu. Klik "Tambah Menu" di atas.</div>`;
        } else {
          mnWrap.innerHTML = mMenus.map(mn => `
            <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div class="min-w-0">
                <p class="font-bold text-white truncate">${escapeHtml(mn.name)}</p>
                <p class="text-slate-400">${escapeHtml(mn.category)} • <strong class="text-bunta-gold">${formatRp(mn.price)}</strong></p>
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <button type="button" data-toggle-menu="${escapeHtml(mn.id)}" class="px-2.5 py-1 rounded-lg font-bold ${mn.available ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400 border border-slate-700'}">
                  ${mn.available ? 'Tersedia' : 'Habis'}
                </button>
                <button type="button" data-del-menu="${escapeHtml(mn.id)}" class="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300" title="Hapus menu">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          `).join('');
        }
      }

      /* ==================== PORTAL 3: KURIR ==================== */
      function renderKurir() {
        document.getElementById('kurir-auth-gate').classList.toggle('hidden', auth.kurir);
        document.getElementById('kurir-dashboard').classList.toggle('hidden', !auth.kurir);
        if (!auth.kurir) return;

        const sel = document.getElementById('kurir-active-select');
        const prev = sel.value;
        sel.innerHTML = state.couriers.map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)} (${escapeHtml(c.vehicle)})</option>`).join('');
        if (prev && state.couriers.some(c => c.id === prev)) sel.value = prev;
        const kId = sel.value || state.couriers[0].id;

        const readyOrders = state.orders.filter(o => o.status === 'Siap Diambil');
        document.getElementById('kurir-ready-count').textContent = readyOrders.length;
        document.getElementById('kurir-ready-list').innerHTML = readyOrders.length === 0
          ? `<div class="p-6 text-center rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400">Belum ada pesanan yang siap diambil di warung.</div>`
          : readyOrders.map(o => {
              const merchant = state.merchants.find(m => m.id === o.merchantId);
              return `
                <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="font-mono font-extrabold text-bunta-gold">${escapeHtml(o.id)}</span>
                    <span class="font-bold text-emerald-400">Ongkir ${formatRp(o.deliveryFee)}</span>
                  </div>
                  <p class="text-white font-bold">Ambil: ${escapeHtml(merchant ? merchant.name : '-')}</p>
                  <p class="text-slate-400">Antar ke: ${escapeHtml(o.customerName)} — ${escapeHtml(o.address)}</p>
                  <button type="button" data-kurir-pickup="${escapeHtml(o.id)}" class="w-full mt-2 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold">
                    Ambil Tugas Pengantaran
                  </button>
                </div>
              `;
            }).join('');

        const myDeliveries = state.orders.filter(o => o.courierId === kId && (o.status === 'Sedang Diantar' || o.status === 'Selesai'));
        document.getElementById('kurir-active-count').textContent = myDeliveries.length;
        document.getElementById('kurir-active-list').innerHTML = myDeliveries.length === 0
          ? `<div class="p-6 text-center rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400">Belum ada riwayat pengantaran untuk kurir ini.</div>`
          : myDeliveries.map(o => `
              <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div class="flex justify-between items-center">
                  <span class="font-mono font-extrabold text-bunta-gold">${escapeHtml(o.id)}</span>
                  ${statusBadge(o.status)}
                </div>
                <p class="font-bold text-white">${escapeHtml(o.customerName)} (${escapeHtml(o.customerWa)})</p>
                <p class="text-slate-400">${escapeHtml(o.address)} • <strong>${escapeHtml(o.paymentMethod)}</strong> (${formatRp(o.total)})</p>
                ${o.status === 'Sedang Diantar' ? `
                  <button type="button" data-kurir-done="${escapeHtml(o.id)}" class="w-full mt-2 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold">
                    Konfirmasi Pesanan Selesai Diantar
                  </button>
                ` : ''}
              </div>
            `).join('');
      }

      /* ==================== PORTAL 4: ADMIN ==================== */
      function switchAdminTab(tab) {
        activeAdminTab = tab;
        ['dashboard', 'analytics', 'merchants', 'couriers', 'orders', 'health', 'settings', 'activity'].forEach(t => {
          document.getElementById(`admin-panel-${t}`).classList.toggle('hidden', t !== tab);
        });
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
          const isAct = btn.dataset.adminTab === tab;
          btn.className = isAct
            ? 'admin-tab-btn px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-extrabold shrink-0'
            : 'admin-tab-btn px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold shrink-0';
        });
        if (tab === 'health') runHealthCheck();
      }

      function runHealthCheck() {
        const t0 = performance.now();
        let storageKB = '0 KB';
        try {
          const raw = localStorage.getItem(STORAGE_KEY) || '';
          storageKB = `${(raw.length / 1024).toFixed(1)} KB terpakai`;
        } catch (e) {
          storageKB = 'Tidak tersedia';
        }
        const elapsed = Math.max(1, Math.round(performance.now() - t0 + lastRenderLatencyMs));
        document.getElementById('health-network').textContent = navigator.onLine ? 'Online (Terhubung)' : 'Offline (Mode Lokal)';
        document.getElementById('health-latency').textContent = `${elapsed} ms`;
        document.getElementById('health-storage').textContent = storageKB;
        document.getElementById('health-db').textContent = sbClient ? 'Supabase Terhubung' : 'Mode Lokal (Belum disetel)';
      }

      function renderAdmin() {
        document.getElementById('admin-auth-gate').classList.toggle('hidden', auth.admin);
        document.getElementById('admin-dashboard').classList.toggle('hidden', !auth.admin);
        if (!auth.admin) return;

        // 10 KPIs
        const activeM = state.merchants.filter(m => m.status === 'AKTIF').length;
        const inactiveM = state.merchants.length - activeM;
        const uniqueCust = new Set(state.orders.map(o => (o.customerWa || o.customerName).toLowerCase())).size;
        const todayStr = new Date().toISOString().slice(0, 10);
        const ordersToday = state.orders.filter(o => (o.createdAt || '').startsWith(todayStr)).length;
        const ordersActive = state.orders.filter(o => !['Selesai', 'Dibatalkan'].includes(o.status)).length;
        const ordersDone = state.orders.filter(o => o.status === 'Selesai').length;
        const pendingPay = state.orders.filter(o => o.status === 'Menunggu Konfirmasi').length;
        const activeDeliv = state.orders.filter(o => o.status === 'Sedang Diantar').length;

        document.getElementById('kpi-total-merchants').textContent = state.merchants.length;
        document.getElementById('kpi-active-merchants').textContent = activeM;
        document.getElementById('kpi-inactive-merchants').textContent = inactiveM;
        document.getElementById('kpi-total-customers').textContent = uniqueCust;
        document.getElementById('kpi-total-couriers').textContent = state.couriers.length;
        document.getElementById('kpi-orders-today').textContent = ordersToday;
        document.getElementById('kpi-orders-active').textContent = ordersActive;
        document.getElementById('kpi-orders-completed').textContent = ordersDone;
        document.getElementById('kpi-pending-payment').textContent = pendingPay;
        document.getElementById('kpi-active-delivery').textContent = activeDeliv;

        // Analytics
        const doneOrders = state.orders.filter(o => o.status === 'Selesai');
        const revenue = doneOrders.reduce((acc, o) => acc + (Number(o.total) || 0), 0);
        const avgOrder = doneOrders.length > 0 ? Math.round(revenue / doneOrders.length) : 0;
        const portions = doneOrders.reduce((acc, o) => acc + o.items.reduce((s, i) => s + i.qty, 0), 0);
        document.getElementById('analytics-total-revenue').textContent = formatRp(revenue);
        document.getElementById('analytics-avg-order').textContent = formatRp(avgOrder);
        document.getElementById('analytics-portions-sold').textContent = `${portions} Porsi`;

        // Merchants List
        document.getElementById('admin-merchants-list').innerHTML = state.merchants.map(m => `
          <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between gap-3 text-xs">
            <div class="space-y-1">
              <div class="flex items-start justify-between gap-2">
                <h4 class="font-extrabold text-white">${escapeHtml(m.name)}</h4>
                ${statusBadge(m.status)}
              </div>
              <p class="text-slate-400">${escapeHtml(m.owner)} • ${escapeHtml(m.wa)}</p>
              <p class="text-slate-500">${escapeHtml(m.category)} — ${escapeHtml(m.address)}</p>
              ${m.note ? `<p class="text-[11px] text-amber-300/90 pt-1">Catatan: ${escapeHtml(m.note)}</p>` : ''}
            </div>
            <button type="button" data-open-review="${escapeHtml(m.id)}" class="w-full py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold transition">
              Periksa Dokumen & Ubah Status
            </button>
          </div>
        `).join('');

        // Couriers List
        document.getElementById('admin-couriers-list').innerHTML = state.couriers.map(c => `
          <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5 text-xs">
            <div class="flex items-center justify-between">
              <h4 class="font-extrabold text-white">${escapeHtml(c.name)}</h4>
              ${statusBadge(c.active ? 'AKTIF' : 'PENDING')}
            </div>
            <p class="text-slate-400">${escapeHtml(c.vehicle)} • ${escapeHtml(c.wa)}</p>
            <div class="flex items-center justify-between pt-2 border-t border-slate-800">
              <span class="text-emerald-400 font-bold">${c.completed} Pengantaran Selesai</span>
              <button type="button" data-toggle-courier="${escapeHtml(c.id)}" class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold">
                ${c.active ? 'Nonaktifkan' : 'Aktifkan'}
              </button>
            </div>
          </div>
        `).join('');

        // Orders List
        const filterSt = document.getElementById('admin-order-filter').value;
        const filteredOrders = state.orders.filter(o => !filterSt || o.status === filterSt);
        document.getElementById('admin-orders-list').innerHTML = filteredOrders.length === 0
          ? `<div class="p-6 text-center rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400">Tidak ada transaksi pada filter status ini.</div>`
          : filteredOrders.map(o => {
              const merchant = state.merchants.find(m => m.id === o.merchantId);
              return `
                <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div class="space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="font-mono font-extrabold text-bunta-gold">${escapeHtml(o.id)}</span>
                      ${statusBadge(o.status)}
                      <span class="text-slate-500">${escapeHtml(o.createdAt)}</span>
                    </div>
                    <p class="font-bold text-white">${escapeHtml(o.customerName)} → ${escapeHtml(merchant ? merchant.name : '-')}</p>
                    <p class="text-slate-400">${escapeHtml(o.address)} • ${escapeHtml(o.paymentMethod)}</p>
                  </div>
                  <div class="text-left sm:text-right shrink-0">
                    <p class="text-sm font-black text-bunta-gold">${formatRp(o.total)}</p>
                    <p class="text-[11px] text-slate-400">${o.items.reduce((s, i) => s + i.qty, 0)} item</p>
                  </div>
                </div>
              `;
            }).join('');

        // Settings fields
        document.getElementById('setting-app-name').value = state.settings.appName || 'KulinerBunta.id';
        document.getElementById('setting-delivery-fee').value = state.settings.deliveryFee ?? 5000;
        document.getElementById('setting-service-fee').value = state.settings.serviceFee ?? 1000;
        document.getElementById('setting-sb-url').value = state.settings.supabaseUrl || '';
        document.getElementById('setting-sb-key').value = state.settings.supabaseKey || '';

        // Audit Logs
        document.getElementById('admin-audit-logs-list').innerHTML = state.auditLogs.map(log => `
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div><strong class="text-indigo-300">${escapeHtml(log.actor)}</strong> — <span class="text-slate-200">${escapeHtml(log.action)}</span></div>
            <span class="text-[11px] text-slate-500 font-mono">${escapeHtml(log.time)}</span>
          </div>
        `).join('');

        if (activeAdminTab === 'health') runHealthCheck();
      }

      function openReviewModal(merchantId) {
        const m = state.merchants.find(x => x.id === merchantId);
        if (!m) return;
        reviewingMerchantId = merchantId;
        document.getElementById('rev-name').textContent = m.name;
        document.getElementById('rev-meta').textContent = `${m.owner} • ${m.wa} • ${m.address} (${m.status})`;
        document.getElementById('rev-note').value = m.note || '';

        const renderDoc = (elId, dataUrl, fallback) => {
          const el = document.getElementById(elId);
          el.innerHTML = dataUrl
            ? `<img src="${dataUrl}" alt="${escapeHtml(fallback)}" class="w-full h-full object-cover" />`
            : `<span class="text-slate-500 text-[11px]">${escapeHtml(fallback)}</span>`;
        };
        renderDoc('rev-ktp', m.docs?.ktp, 'Belum diunggah');
        renderDoc('rev-selfie', m.docs?.selfie, 'Belum diunggah');
        renderDoc('rev-nib', m.docs?.nib, 'Opsional / Belum diunggah');
        document.getElementById('modal-merchant-review').classList.remove('hidden');
      }

      function exportOrdersCSV() {
        const headers = ['ID Order', 'Waktu', 'Pembeli', 'WhatsApp', 'Alamat', 'Merchant', 'Metode Bayar', 'Status', 'Total'];
        const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
        const rows = [headers.map(esc).join(',')];
        state.orders.forEach(o => {
          const m = state.merchants.find(x => x.id === o.merchantId);
          rows.push([o.id, o.createdAt, o.customerName, o.customerWa, o.address, m ? m.name : '', o.paymentMethod, o.status, o.total].map(esc).join(','));
        });
        const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `laporan-kulinerbunta-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        addAudit('Admin', 'Mengekspor laporan transaksi CSV.');
        showToast('Laporan transaksi CSV berhasil diunduh.');
      }

      function renderAll() {
        const t0 = performance.now();
        renderPembeli();
        renderMerchant();
        renderKurir();
        renderAdmin();
        if (window.lucide) lucide.createIcons();
        lastRenderLatencyMs = Math.round(performance.now() - t0);
      }

      function readFileAsDataUrl(input, key, labelId) {
        const file = input.files && input.files[0];
        if (!file) return;
        document.getElementById(labelId).textContent = file.name;
        const reader = new FileReader();
        reader.onload = () => { pendingDocs[key] = reader.result; };
        reader.readAsDataURL(file);
      }

      function bindEvents() {
        // Offline banner
        const syncOnline = () => document.getElementById('offline-banner').classList.toggle('hidden', navigator.onLine);
        window.addEventListener('online', syncOnline);
        window.addEventListener('offline', syncOnline);
        syncOnline();

        // Portal buttons
        document.querySelectorAll('.portal-btn').forEach(btn => {
          btn.addEventListener('click', () => switchPortal(btn.dataset.portal));
        });

        // Buyer sub-tabs
        document.querySelectorAll('.buyer-tab-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            activeBuyerTab = btn.dataset.buyerTab;
            document.getElementById('buyer-view-katalog').classList.toggle('hidden', activeBuyerTab !== 'katalog');
            document.getElementById('buyer-view-pesanan').classList.toggle('hidden', activeBuyerTab !== 'pesanan');
            document.getElementById('buyer-search-wrap').classList.toggle('hidden', activeBuyerTab !== 'katalog');
            document.querySelectorAll('.buyer-tab-btn').forEach(b => {
              const isAct = b.dataset.buyerTab === activeBuyerTab;
              b.className = isAct
                ? 'buyer-tab-btn px-3.5 py-2 rounded-xl text-xs font-extrabold bg-bunta-red text-white transition inline-flex items-center gap-1.5'
                : 'buyer-tab-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:text-white transition inline-flex items-center gap-1.5';
            });
          });
        });

        document.getElementById('btn-back-to-katalog').addEventListener('click', () => {
          document.querySelector('.buyer-tab-btn[data-buyer-tab="katalog"]').click();
        });

        document.getElementById('buyer-search-input').addEventListener('input', renderPembeli);
        document.getElementById('buyer-merchant-filter').addEventListener('change', renderPembeli);

        document.getElementById('buyer-category-pills').addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-cat]');
          if (!btn) return;
          activeCategory = btn.dataset.cat;
          renderPembeli();
        });

        document.getElementById('buyer-menu-grid').addEventListener('click', (e) => {
          const addBtn = e.target.closest('button[data-cart-add]');
          const incBtn = e.target.closest('button[data-cart-inc]');
          const decBtn = e.target.closest('button[data-cart-dec]');
          if (addBtn) addToCart(addBtn.dataset.cartAdd);
          else if (incBtn) updateCartQty(incBtn.dataset.cartInc, 1);
          else if (decBtn) updateCartQty(decBtn.dataset.cartDec, -1);
        });

        // Cart modal
        document.getElementById('btn-open-cart-top').addEventListener('click', () => {
          renderCartModal();
          document.getElementById('modal-cart').classList.remove('hidden');
        });
        document.getElementById('btn-close-cart').addEventListener('click', () => {
          document.getElementById('modal-cart').classList.add('hidden');
        });
        document.getElementById('btn-clear-cart').addEventListener('click', () => {
          cart = [];
          renderPembeli();
          renderCartModal();
        });
        document.getElementById('cart-items-container').addEventListener('click', (e) => {
          const incBtn = e.target.closest('button[data-cart-inc]');
          const decBtn = e.target.closest('button[data-cart-dec]');
          if (incBtn) updateCartQty(incBtn.dataset.cartInc, 1);
          else if (decBtn) updateCartQty(decBtn.dataset.cartDec, -1);
        });

        document.getElementById('checkout-form').addEventListener('submit', (e) => {
          e.preventDefault();
          if (cart.length === 0) {
            showToast('Keranjang masih kosong. Pilih menu terlebih dahulu.', 'error');
            return;
          }
          const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
          const deliveryFee = Number(state.settings.deliveryFee || 0);
          const serviceFee = Number(state.settings.serviceFee || 0);
          const orderId = `KB-${new Date().toISOString().slice(5, 10).replace('-', '')}-${String(state.orders.length + 1).padStart(2, '0')}`;
          const newOrder = {
            id: orderId,
            createdAt: nowStamp(),
            customerName: document.getElementById('co-name').value.trim(),
            customerWa: document.getElementById('co-wa').value.trim(),
            address: document.getElementById('co-address').value.trim(),
            paymentMethod: document.getElementById('co-payment').value,
            merchantId: cart[0].merchantId,
            courierId: '',
            status: 'Menunggu Konfirmasi',
            items: cart.map(c => ({ menuId: c.menuId, name: c.name, price: c.price, qty: c.qty })),
            subtotal,
            deliveryFee,
            serviceFee,
            total: subtotal + deliveryFee + serviceFee
          };
          state.orders.unshift(newOrder);
          addAudit(newOrder.customerName, `Membuat pesanan baru ${orderId} senilai ${formatRp(newOrder.total)}.`);
          cart = [];
          document.getElementById('checkout-form').reset();
          document.getElementById('modal-cart').classList.add('hidden');
          showToast(`Pesanan ${orderId} berhasil dibuat!`);
          renderAll();
          document.querySelector('.buyer-tab-btn[data-buyer-tab="pesanan"]').click();
        });

        // Merchant auth & registration
        document.getElementById('merchant-login-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const u = document.getElementById('merchant-login-user').value.trim();
          const p = document.getElementById('merchant-login-pass').value;
          if (u === 'merchant' && p === 'bunta123') {
            auth.merchant = true;
            addAudit('Merchant', 'Login ke Portal Merchant UMKM.');
            showToast('Berhasil masuk Portal Merchant.');
            renderAll();
          } else {
            showToast('Username atau password merchant salah.', 'error');
          }
        });
        document.getElementById('btn-merchant-logout').addEventListener('click', () => {
          auth.merchant = false;
          renderAll();
          showToast('Keluar dari Portal Merchant.', 'info');
        });

        document.getElementById('reg-ktp-file').addEventListener('change', (e) => readFileAsDataUrl(e.target, 'ktp', 'lbl-ktp-file'));
        document.getElementById('reg-selfie-file').addEventListener('change', (e) => readFileAsDataUrl(e.target, 'selfie', 'lbl-selfie-file'));
        document.getElementById('reg-nib-file').addEventListener('change', (e) => readFileAsDataUrl(e.target, 'nib', 'lbl-nib-file'));

        document.getElementById('merchant-register-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const newM = {
            id: `M-${String(state.merchants.length + 1).padStart(2, '0')}`,
            name: document.getElementById('reg-merchant-name').value.trim(),
            owner: document.getElementById('reg-merchant-owner').value.trim(),
            wa: document.getElementById('reg-merchant-wa').value.trim(),
            category: document.getElementById('reg-merchant-cat').value,
            address: document.getElementById('reg-merchant-addr').value.trim(),
            status: 'PENDING',
            note: 'Pendaftaran baru menunggu verifikasi Admin',
            createdAt: new Date().toISOString().slice(0, 10),
            docs: { ktp: pendingDocs.ktp, selfie: pendingDocs.selfie, nib: pendingDocs.nib }
          };
          state.merchants.unshift(newM);
          pendingDocs.ktp = ''; pendingDocs.selfie = ''; pendingDocs.nib = '';
          document.getElementById('lbl-ktp-file').textContent = 'Pilih gambar';
          document.getElementById('lbl-selfie-file').textContent = 'Pilih gambar';
          document.getElementById('lbl-nib-file').textContent = 'Opsional';
          e.target.reset();
          addAudit(newM.owner, `Mendaftarkan mitra UMKM baru: ${newM.name}.`);
          showToast('Pendaftaran terkirim! Menunggu verifikasi Admin.');
          renderAll();
        });

        document.getElementById('merchant-active-select').addEventListener('change', renderMerchant);

        document.getElementById('merchant-orders-list').addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-m-status]');
          if (!btn) return;
          const [orderId, nextStatus] = btn.dataset.mStatus.split('|');
          const ord = state.orders.find(o => o.id === orderId);
          if (!ord) return;
          ord.status = nextStatus;
          addAudit('Merchant', `Mengubah status pesanan ${orderId} menjadi "${nextStatus}".`);
          showToast(`Pesanan ${orderId} → ${nextStatus}`);
          renderAll();
        });

        document.getElementById('merchant-menus-list').addEventListener('click', (e) => {
          const togBtn = e.target.closest('button[data-toggle-menu]');
          const delBtn = e.target.closest('button[data-del-menu]');
          if (togBtn) {
            const mn = state.menus.find(x => x.id === togBtn.dataset.toggleMenu);
            if (mn) {
              mn.available = !mn.available;
              addAudit('Merchant', `Mengubah stok ${mn.name} menjadi ${mn.available ? 'Tersedia' : 'Habis'}.`);
              renderAll();
            }
          } else if (delBtn) {
            const id = delBtn.dataset.delMenu;
            state.menus = state.menus.filter(x => x.id !== id);
            addAudit('Merchant', `Menghapus menu ${id}.`);
            showToast('Menu dihapus.', 'info');
            renderAll();
          }
        });

        // Add menu modal
        document.getElementById('btn-merchant-add-menu').addEventListener('click', () => {
          document.getElementById('modal-add-menu').classList.remove('hidden');
        });
        document.getElementById('btn-close-add-menu').addEventListener('click', () => {
          document.getElementById('modal-add-menu').classList.add('hidden');
        });
        document.getElementById('btn-cancel-add-menu').addEventListener('click', () => {
          document.getElementById('modal-add-menu').classList.add('hidden');
        });
        document.getElementById('add-menu-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const mId = document.getElementById('merchant-active-select').value;
          const newMenu = {
            id: `MN-${Date.now().toString().slice(-4)}`,
            merchantId: mId,
            name: document.getElementById('menu-name').value.trim(),
            category: document.getElementById('menu-cat').value,
            price: Number(document.getElementById('menu-price').value) || 15000,
            desc: document.getElementById('menu-desc').value.trim(),
            available: true,
            accent: 'from-bunta-red to-amber-600'
          };
          state.menus.unshift(newMenu);
          addAudit('Merchant', `Menambahkan menu baru: ${newMenu.name} (${formatRp(newMenu.price)}).`);
          e.target.reset();
          document.getElementById('modal-add-menu').classList.add('hidden');
          showToast('Menu baru berhasil ditambahkan!');
          renderAll();
        });

        // Kurir auth & dispatch
        document.getElementById('kurir-login-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const u = document.getElementById('kurir-login-user').value.trim();
          const p = document.getElementById('kurir-login-pass').value;
          if (u === 'kurir' && p === 'bunta123') {
            auth.kurir = true;
            addAudit('Kurir', 'Login ke Portal Kurir Lokal.');
            showToast('Berhasil masuk Portal Kurir.');
            renderAll();
          } else {
            showToast('Username atau password kurir salah.', 'error');
          }
        });
        document.getElementById('btn-kurir-logout').addEventListener('click', () => {
          auth.kurir = false;
          renderAll();
          showToast('Keluar dari Portal Kurir.', 'info');
        });
        document.getElementById('kurir-active-select').addEventListener('change', renderKurir);

        document.getElementById('kurir-ready-list').addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-kurir-pickup]');
          if (!btn) return;
          const kId = document.getElementById('kurir-active-select').value;
          const ord = state.orders.find(o => o.id === btn.dataset.kurirPickup);
          const kur = state.couriers.find(c => c.id === kId);
          if (!ord || !kur) return;
          ord.courierId = kId;
          ord.status = 'Sedang Diantar';
          addAudit(`Kurir ${kur.name}`, `Mengambil & mengantar pesanan ${ord.id}.`);
          showToast(`Pesanan ${ord.id} sedang Anda antar!`);
          renderAll();
        });

        document.getElementById('kurir-active-list').addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-kurir-done]');
          if (!btn) return;
          const ord = state.orders.find(o => o.id === btn.dataset.kurirDone);
          if (!ord) return;
          ord.status = 'Selesai';
          const kur = state.couriers.find(c => c.id === ord.courierId);
          if (kur) kur.completed = (kur.completed || 0) + 1;
          addAudit(kur ? `Kurir ${kur.name}` : 'Kurir', `Menyelesaikan pengantaran ${ord.id}.`);
          showToast(`Pengantaran ${ord.id} selesai!`);
          renderAll();
        });

        // Admin auth & tabs
        document.getElementById('admin-login-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const u = document.getElementById('admin-login-user').value.trim();
          const p = document.getElementById('admin-login-pass').value;
          if (u === 'adminbunta' && p === 'Bunta2026!') {
            auth.admin = true;
            addAudit('Admin', 'Login ke Dashboard Admin Governance.');
            showToast('Selamat datang di Dashboard Admin.');
            renderAll();
          } else {
            showToast('Username atau password admin salah.', 'error');
          }
        });
        document.getElementById('btn-admin-logout').addEventListener('click', () => {
          auth.admin = false;
          renderAll();
          showToast('Keluar dari Dashboard Admin.', 'info');
        });

        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
          btn.addEventListener('click', () => switchAdminTab(btn.dataset.adminTab));
        });

        document.getElementById('btn-export-csv').addEventListener('click', exportOrdersCSV);
        document.getElementById('btn-run-healthcheck').addEventListener('click', () => {
          runHealthCheck();
          showToast('Diagnosa kesehatan sistem diperbarui.');
        });
        document.getElementById('admin-order-filter').addEventListener('change', renderAdmin);

        document.getElementById('admin-merchants-list').addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-open-review]');
          if (btn) openReviewModal(btn.dataset.openReview);
        });
        document.getElementById('btn-close-review').addEventListener('click', () => {
          document.getElementById('modal-merchant-review').classList.add('hidden');
        });
        document.querySelectorAll('.review-action-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const m = state.merchants.find(x => x.id === reviewingMerchantId);
            if (!m) return;
            const nextStatus = btn.dataset.reviewAction;
            m.status = nextStatus;
            m.note = document.getElementById('rev-note').value.trim();
            addAudit('Admin', `Keputusan KYC merchant "${m.name}" → ${nextStatus}.`);
            document.getElementById('modal-merchant-review').classList.add('hidden');
            showToast(`Status merchant ${m.name} diperbarui ke ${nextStatus}.`);
            renderAll();
          });
        });

        document.getElementById('admin-couriers-list').addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-toggle-courier]');
          if (!btn) return;
          const c = state.couriers.find(x => x.id === btn.dataset.toggleCourier);
          if (!c) return;
          c.active = !c.active;
          addAudit('Admin', `Mengubah status kurir ${c.name} menjadi ${c.active ? 'Aktif' : 'Nonaktif'}.`);
          renderAll();
        });

        document.getElementById('admin-settings-form').addEventListener('submit', (e) => {
          e.preventDefault();
          state.settings.appName = document.getElementById('setting-app-name').value.trim() || 'KulinerBunta.id';
          state.settings.deliveryFee = Number(document.getElementById('setting-delivery-fee').value) || 0;
          state.settings.serviceFee = Number(document.getElementById('setting-service-fee').value) || 0;
          state.settings.supabaseUrl = document.getElementById('setting-sb-url').value.trim();
          state.settings.supabaseKey = document.getElementById('setting-sb-key').value.trim();
          saveState();
          initSupabase();
          addAudit('Admin', `Memperbarui konfigurasi platform (Ongkir: ${formatRp(state.settings.deliveryFee)}).`);
          showToast('Pengaturan platform berhasil disimpan.');
          renderAll();
        });
      }

      document.addEventListener('DOMContentLoaded', () => {
        initSupabase();
        bindEvents();
        renderAll();
      });
    })();
