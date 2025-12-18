(() => {
  'use strict';
  const $  = (s, d=document) => d.querySelector(s);
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn, {passive:false});

  const APP_ORIGIN = document.querySelector('meta[name="unobits:app-origin"]')?.content?.trim() || 'https://unobits.app';
  const API_BASE   = `${APP_ORIGIN}/api`;

  const slugifyOrg = (x) => String(x||'').trim().toLowerCase().replace(/[^a-z0-9-]+/g,'-').replace(/^-+|-+$/g,'');
  const setBusy = (btn, b=true) => { if(!btn) return; btn.disabled=!!b; const t=btn.querySelector('.unb-btn-text')||btn; t.setAttribute('data-loading', b?'1':'0'); if(b){t.dataset.prevText=t.textContent; t.textContent='Please wait…';} else if(t.dataset.prevText){t.textContent=t.dataset.prevText; delete t.dataset.prevText;} };

  async function apiPost(path, body){
    const res = await fetch(`${API_BASE}${path}`, { method:'POST', credentials:'include', headers:{'content-type':'application/json'}, body: JSON.stringify(body||{}) });
    const data = await res.json().catch(()=>({}));
    if (!res.ok || data.error) {
      const code = data.error || `HTTP_${res.status}`;
      const msg =
        (code === 'invalid_credentials')  ? 'Wrong email or password.' :
        (code === 'organization_required')? 'Organization is required.' :
        (code === 'no_org_membership')    ? 'No membership found for that organization.' :
        (code === 'email_exists')         ? 'That email is already in use.' :
        (code === 'signup_failed')        ? (data.detail || 'Unable to create your account.') :
        (data.error_description || data.message || code);
      const err = new Error(msg); err.code = code; throw err;
    }
    return data;
  }

  function ensureMsgBox(form, id){
    let box = form.querySelector(`#${id}`);
    if (!box) {
      box = document.createElement('div');
      box.id = id; box.setAttribute('role','alert'); box.setAttribute('aria-live','polite');
      box.className = 'mt-2 text-sm';
      form.querySelector('.p-4, .px-4')?.prepend(box) || form.prepend(box);
    }
    return box;
  }
  function showMsg(form, type, text){
    const box = ensureMsgBox(form, form.id + 'Msg');
    box.hidden = !text; box.textContent = text || '';
    box.className = `mt-2 text-sm ${type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`;
  }

  const getOrgFromPath = () => {
    const path = (location.pathname || '').replace(/\/+$/,'');
    const m = /(?:^|\/)o\/([a-z0-9-]+)/i.exec(path);
    return m ? m[1].toLowerCase() : '';
  };

  const loginModal  = $('#loginModal');
  const signupModal = $('#signupModal');

  // Hash → modal
  (function bootModals(){
    const h = location.hash.toLowerCase(), q = new URLSearchParams(location.search);
    if (h === '#login'  || q.get('login')  === '1') loginModal?.showModal();
    if (h === '#signup' || q.get('signup') === '1') signupModal?.showModal();
    on(window, 'hashchange', () => {
      const hx = location.hash.toLowerCase();
      if (hx === '#login')  loginModal?.showModal();
      if (hx === '#signup') signupModal?.showModal();
    });
  })();

  // LOGIN
  (function setupLogin(){
    const form = $('#loginForm');
    const btn  = $('#loginSubmit');
    const orgInput = $('#loginOrg');
    if (orgInput) {
      orgInput.required = true;
      const label = orgInput.closest('label');
      if (label) {
        label.querySelector('span')?.remove();
        label.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE) n.textContent = n.textContent.replace(/\\(optional\\)/i,''); });
      }
    }
    if (!form) return;

    async function doLogin(){
      const email = $('#loginEmail')?.value.trim();
      const password = $('#loginPwd')?.value;
      let org_slug = getOrgFromPath();
      if (!org_slug) {
        const raw = orgInput?.value.trim();
        if (!raw) { showMsg(form, 'error', 'Please enter your Organization.'); return; }
        org_slug = slugifyOrg(raw);
      }
      try {
        setBusy(btn, true); showMsg(form, 'notice', '');
        await apiPost('/login', { email, password, org_slug });
        showMsg(form, 'notice', 'Signed in. Redirecting…');
        location.href = APP_ORIGIN + '/';
      } catch (err) {
        showMsg(form, 'error', err.message || 'Unable to sign in.');
      } finally {
        setBusy(btn, false);
      }
    }
    on(form,'submit', e => { e.preventDefault(); doLogin(); });
    on(btn, 'click',  e => { e.preventDefault(); doLogin(); });
  })();

  // SIGNUP
  (function setupSignup(){
    const form = $('#signupForm');
    const btn  = $('#signupSubmit');
    if (!form) return;

    const suPwd=$('#suPwd'), suPwd2=$('#suPwd2'), meter=$('#pwdStrength');
    const score=(p='')=>{ let s=0; if(p.length>=8)s++; if(/[A-Z]/.test(p))s++; if(/[a-z]/.test(p))s++; if(/[0-9\\W]/.test(p))s++; return s; };
    on(suPwd,'input',()=> meter && (meter.value = score(suPwd.value||'')));

    async function doSignup(){
      const name     = $('#suName')?.value.trim();
      const email    = $('#suEmail')?.value.trim();
      const company  = $('#suCompany')?.value.trim();
      const pass1    = $('#suPwd')?.value;
      const pass2    = $('#suPwd2')?.value;
      const tosOk    = $('#suTos')?.checked;

      if (!name || !email || !company) { showMsg(form, 'error', 'Please complete all required fields.'); return; }
      if ((pass1||'').length < 8)      { showMsg(form, 'error', 'Password must be at least 8 characters.'); return; }
      if (pass1 !== pass2)             { showMsg(form, 'error', 'Passwords do not match.'); return; }
      if (!tosOk)                      { showMsg(form, 'error', 'Please accept Terms & Privacy.'); return; }

      try {
        setBusy(btn,true); showMsg(form, 'notice', '');
        await apiPost('/signup', { name, email, password: pass1, org_name: company });
        showMsg(form, 'notice', 'Account created. Redirecting…');
        location.href = APP_ORIGIN + '/';
      } catch (err) {
        showMsg(form, 'error', err.message || 'Unable to sign up.');
      } finally {
        setBusy(btn,false);
      }
    }
    on(form,'submit', e => { e.preventDefault(); doSignup(); });
    on(btn, 'click',  e => { e.preventDefault(); doSignup(); });
  })();
})();
