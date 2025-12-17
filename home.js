(() => {
  // ---------- Helpers ----------
  const $  = (s, d=document) => d.querySelector(s);
  const $$ = (s, d=document) => Array.from(d.querySelectorAll(s));
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn, {passive:false});
  const toast = (msg) => {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    const wrap = document.getElementById('toasts') || (() => {
      const x = document.createElement('div');
      x.id = 'toasts';
      x.style.position='fixed';
      x.style.right='16px';
      x.style.bottom='16px';
      x.style.display='flex';
      x.style.bottom='10px';
      x.style.flexDirection='column';
      x.style.gap='8px'; 
      x.style.zIndex='9999';
      document.body.appendChild(x); return x;
    })();
    t.style.cssText = 'background:#111418;color:#fff;border-radius:10px;padding:10px 12px;box-shadow:0 6px 18px rgba(0,0,0,.25)';
    wrap.appendChild(t); setTimeout(()=>t.remove(), 2400);
  };

  // ---------- Theme ----------
  // [YOUR CODE] - Keep this entire section. It's perfect.
  const THEME_KEY = 'pref-theme';
  const APP_ORIGIN = document.querySelector('meta[name="unobits:app-origin"]')?.content?.trim() || 'https://unobits.app';
  const API_BASE   = `${APP_ORIGIN}/api`;
  const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  function applyTheme(theme){
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const btn = $('#themeToggle');
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    const icon = $('#themeIcon');
    if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
  function initTheme(){
    const saved = localStorage.getItem(THEME_KEY);
    const theme = saved || (prefersDark() ? 'dark' : 'light');
    applyTheme(theme);
  }
  on($('#themeToggle'),'click', ()=>{
    const current = document.documentElement.dataset.theme || (prefersDark() ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
  try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e=>{
    if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches ? 'dark' : 'light');
  }); } catch {}

  // Initialize your theme logic on page load
  initTheme();
  
  
  // ----------------------------------------------------
  // [NEW] - Add the Card Navigation logic below your theme code.
  // ----------------------------------------------------
  const navRef = $('.card-nav');
  const hamburgerMenu = $('.hamburger-menu');
  const navContent = $('.card-nav-content');

  // 1. Define your navigation content
  const navData = [
    {
      label: 'Core Concepts',
      bgColor: '#00428dff',
      links: [
        { label: 'Problem', href: '#/problem' },
        { label: 'Solution', href: '#/solution' },
        { label: 'Features', href: '#/features' },
      ],
    },
    {
      label: 'Business',
      bgColor: '#02c99eff',
      links: [
        { label: 'Advantages', href: '#/advantages' },
        { label: 'Pricing', href: '#/pricing' },
        { label: 'Integrations', href: '#/integrations' },
      ],
    },
    {
      label: 'Company',
      bgColor: '#bd10e0',
      links: [
        { label: 'Case Studies', href: '#/case-studies' },
        { label: 'FAQ', href: '#/faq' },
        { label: 'Contact', href: '#/contact' },
      ],
    },
  ];

  // 2. Dynamically create the nav cards
  const populateNavContent = () => {
    if (!navContent) return;
    navContent.innerHTML = navData.map(card => `
      <div class="nav-card" style="background-color: ${card.bgColor}; color: var(--card-text-color);">
        <div class="nav-card-label">${card.label}</div>
        <div class="nav-card-links">
          ${card.links.map(link => `
              <a class="nav-card-link" href="${link.href}">
                <svg class="nav-card-link-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                ${link.label}
              </a>
            `).join('')}
        </div>
      </div>`
    ).join('');
  };
  
  populateNavContent();

  // 3. Animation Logic (using GSAP)
  const cardsRef = $$('.nav-card');
  let isExpanded = false;
  let tl = null;
  const ease = 'power3.out';

  const calculateHeight = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return 260; 

    const wasVisible = navContent.style.visibility;
    navContent.style.visibility = 'visible';
    const contentHeight = navContent.scrollHeight;
    navContent.style.visibility = wasVisible;

    return 60 + contentHeight + 16; // topBar + content + padding
  };

  const createTimeline = () => {
    if (!navRef) return null;
    gsap.set(navRef, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef, { y: 50, opacity: 0 });

    const timeline = gsap.timeline({ paused: true });
    timeline.to(navRef, { height: calculateHeight, duration: 0.4, ease });
    timeline.to(cardsRef, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.2');
    return timeline;
  };

  const toggleMenu = () => {
    if (!tl) return;
    if (!isExpanded) {
      isExpanded = true;
      hamburgerMenu.classList.add('open');
      hamburgerMenu.setAttribute('aria-label', 'Close menu');
      navContent.setAttribute('aria-hidden', 'false');
      tl.play();
    } else {
      hamburgerMenu.classList.remove('open');
      hamburgerMenu.setAttribute('aria-label', 'Open menu');
      navContent.setAttribute('aria-hidden', 'true');
      tl.eventCallback('onReverseComplete', () => { isExpanded = false; });
      tl.reverse();
    }
  };
  
  // Initialize and set up event listeners for navigation
  tl = createTimeline();
  on(hamburgerMenu, 'click', toggleMenu);

  on(window, 'resize', () => {
    if (tl) tl.kill();
    tl = createTimeline();
    if (isExpanded) {
      gsap.set(navRef, { height: calculateHeight() });
      tl.progress(1);
    }
  });

  // org helpers
  function getOrgFromPath() {
    try {
      const parts = location.pathname.split("/").filter(Boolean);
      const i = parts.findIndex(p => p === "o" || p === "organization");
      if (i >= 0 && parts[i + 1]) return parts[i + 1].toLowerCase();
    } catch {}
    return null;
  }
  function slugifyOrg(x) {
    return String(x || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

 async function apiPost(url, payload) {
   const isAbs = /^https?:\/\//i.test(url);
   const full  = isAbs ? url : (url.startsWith('/api') ? `${APP_ORIGIN}${url}` : `${API_BASE}${url}`);
   const res = await fetch(full, {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",   // <- critical for cookies
      body: JSON.stringify(payload)
    });
    const raw = await res.text();
    const json = (()=>{ try { return JSON.parse(raw); } catch { return null; } })();
    if (!res.ok) {
      const msg = json?.error || json?.detail || raw || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    return json ?? {};
  }

  function setBusy(btn, busy) {
    if (!btn) return;
    btn.disabled = !!busy;
    if (busy) { btn.dataset._label = btn.textContent; btn.textContent = "Please wait…"; }
    else { if (btn.dataset._label) btn.textContent = btn.dataset._label; delete btn.dataset._label; }
  }

  // ---------- Router (keeps your sections working) ----------
  const routes = [
    '/', '/problem', '/solution', '/features', '/integrations',
    '/advantages', '/pricing', '/case-studies', '/faq', '/contact'
  ];

  // Fade transition around route swap (NEW)
  function fadeSwap(swapFn){
    const app = $('#app');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!app || reduce) { swapFn(); return; }
    app.classList.add('is-fading');
    // give opacity time to drop, then swap content
    setTimeout(()=>{
      swapFn();
      // allow next frame to reflow before fade back in
      requestAnimationFrame(()=> app.classList.remove('is-fading'));
    }, 180); // slow-out, then in (matches CSS --t-slow)
  }

  function showRoute(route){
    $$('section.route').forEach(sec => {
      const r = sec.getAttribute('data-route');
      sec.hidden = (r !== route);
    });
    $$('.nav-center .nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#'+route);
    });
    closeMobile();
    window.scrollTo({top:0, behavior:'smooth'});
  }
  function navigate(hash){
    const route = (hash||'').replace(/^#/, '') || '/';
    const valid = routes.includes(route) ? route : '/';
    fadeSwap(()=> showRoute(valid));
  }
  function maybeOpenAuthFromURL() {
    const h = (location.hash || '').toLowerCase();
    const q = new URLSearchParams(location.search);
    if (h === '#login' || q.get('login') === '1') { document.querySelector('#loginModal')?.showModal(); }
    if (h === '#signup' || q.get('signup') === '1') { document.querySelector('#signupModal')?.showModal(); }
  }
  maybeOpenAuthFromURL();
  window.addEventListener('hashchange', maybeOpenAuthFromURL);
  on(window, 'hashchange', () => navigate(location.hash));

  // ---------- Header interactions ----------
  function closeMobile(){
    const nav = $('#mobileNav'); const btn = $('#openMobileNav');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open'); btn.setAttribute('aria-expanded','false');
    }
  }
  on($('#openMobileNav'),'click', ()=>{
    const nav = $('#mobileNav'); const btn = $('#openMobileNav');
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });

  const loginModal  = $('#loginModal');
  const signupModal = $('#signupModal');

  ['openLogin','openSignup','openLoginM','openSignupM','ctaSignup','ctaSignup2','footerSignup']
    .forEach(id=>{
      on($('#'+id), 'click', ()=>{
        if (id.toLowerCase().includes('login')) { loginModal.showModal(); }
        else                                     { signupModal.showModal(); }
      });
    });
  on($('#swapToSignup'), 'click', ()=>{ loginModal.close(); signupModal.showModal(); });
  on($('#swapToLogin'),  'click', ()=>{ signupModal.close(); loginModal.showModal(); });

  // Close via X buttons (FIX)
  $$('#loginModal .icon-btn, #signupModal .icon-btn').forEach(btn=>{
    on(btn,'click', e=>{
      const dlg = e.currentTarget.closest('dialog');
      if (dlg && typeof dlg.close === 'function') dlg.close();
    });
  });

  // backdrop click closes
  [loginModal, signupModal].forEach(dlg=>{
    on(dlg, 'click', (e)=>{
      const card = dlg.querySelector('.modal-card'); if (!card) return;
      const r = card.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dlg.close();
    });
  });

  // ESC closes modals & mobile (NEW)
  on(document, 'keydown', (e)=>{
    if (e.key === 'Escape'){
      if (loginModal?.open) loginModal.close();
      if (signupModal?.open) signupModal.close();
      closeMobile();
    }
  });

  // Expose helpers for other scripts
  function openLogin(){ document.querySelector('#loginModal')?.showModal(); }
  function openSignup(){ document.querySelector('#signupModal')?.showModal(); }
  window.auth = Object.freeze({ openLogin, openSignup });

  // ---------- AUTH Forms ----------
  const loginForm = $('#loginForm');
  const loginBtn  = $('#loginSubmit');
  if (loginForm) {
    const pathOrg = getOrgFromPath();
    const orgInput = $('#loginOrg');
    if (pathOrg && orgInput) { orgInput.closest('label').style.display='none'; orgInput.removeAttribute('required'); }

    on(loginForm, 'submit', async (e)=>{
      e.preventDefault();
      await doLogin(pathOrg);
    });
    on(loginBtn, 'click', async (e)=>{
      e.preventDefault();
      await doLogin(pathOrg);
    });
  }
  async function doLogin(pathOrg){
    const email = $('#loginEmail')?.value.trim();
    const password = $('#loginPwd')?.value.trim();

    let org_slug = pathOrg;
    if (!org_slug) {
      const raw = $('#loginOrg')?.value.trim();
      if (!raw) { toast('Please enter your Organization'); return; }
      org_slug = slugifyOrg(raw);
    }
    const btn = $('#loginSubmit');
    try {
      setBusy(btn, true);
      await apiPost('/api/login', { email, password, org_slug });
      location.href = APP_ORIGIN + '/';
    } catch (err) {
      toast(`Login failed: ${err.message}`);
    } finally {
      setBusy(btn, false);
    }
  }

  // SIGNUP
  const signupForm = $('#signupForm');
  const signupBtn  = $('#signupSubmit');
  if (signupForm) {
    const tzSel = $('#suTz');
    if (tzSel) {
      const tzs = ['UTC','America/Los_Angeles','America/Denver','America/Chicago','America/New_York',
        'Europe/London','Europe/Berlin','Europe/Paris','Africa/Lagos','Asia/Dubai','Asia/Kolkata','Asia/Singapore','Asia/Tokyo','Australia/Sydney'];
      tzs.forEach(z=>{ const o=document.createElement('option'); o.value=o.textContent=z; tzSel.appendChild(o); });
      try{ tzSel.value = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; }catch{}
    }

    // strength meter
    const suPwd=$('#suPwd'), suPwd2=$('#suPwd2'), meter=$('#pwdStrength');
    const score=(p='')=>{ let s=0; if(p.length>=8)s++; if(/[A-Z]/.test(p))s++; if(/[a-z]/.test(p))s++; if(/[0-9\W]/.test(p))s++; return s; };
    on(suPwd,'input',()=> meter && (meter.value = score(suPwd.value||'')));

    on(signupForm,'submit', async (e)=>{
      e.preventDefault();
      await doSignup();
    });
    on(signupBtn,'click', async (e)=>{
      e.preventDefault();
      await doSignup();
    });
  }
  async function doSignup(){
    const name     = $('#suName')?.value.trim();
    const email    = $('#suEmail')?.value.trim();
    const company  = $('#suCompany')?.value.trim();
    const pass1    = $('#suPwd')?.value;
    const pass2    = $('#suPwd2')?.value;
    const tosOk    = $('#suTos')?.checked;

    if (!name || !email) return toast('Please complete required fields');
    if ((pass1||'').length < 8) return toast('Password must be at least 8 characters');
    if (pass1 !== pass2) return toast('Passwords do not match');
    if (!tosOk) return toast('Please accept Terms & Privacy');

    const btn = $('#signupSubmit');
    try {
      setBusy(btn, true);
      await apiPost('/api/signup', { name, email, password: pass1, org_name: company });
      location.href = APP_ORIGIN + '/';
    } catch (err) {
      toast(`Signup failed: ${err.message}`);
    } finally {
      setBusy(btn, false);
    }
  }

  // ---------- Contact form ----------
  on($('#contactForm'), 'submit', (e)=>{
    e.preventDefault();
    toast('Thanks! We will get back to you shortly.');
    e.target.reset();
  });

  // ---------- Page boot ----------
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
  if (!location.hash) location.hash = '#/';
  initTheme();                // NEW: theme on boot
  navigate(location.hash);    // initial route

  // Accessibility: focus outlines for keyboard only (polish)
  let mouseDown = false;
  on(window,'mousedown',()=>{ mouseDown=true; document.body.classList.add('using-mouse'); });
  on(window,'keydown',()=>{ if(mouseDown){ mouseDown=false; document.body.classList.remove('using-mouse'); } });

  // Auto-open signup from pricing buttons
  $$('.openSignupAuto').forEach(b=> on(b,'click', ()=> signupModal.showModal() ));

  // Diagnostics
  console.log('home.js boot OK', { login: !!$('#loginForm'), signup: !!$('#signupForm') });
})();
