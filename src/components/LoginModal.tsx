'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { apiPost, getAppOrigin, getOrgFromPath, slugifyOrg } from '../lib/clientAuth';
import { usePathname } from 'next/navigation';

interface LoginModalProps {
  onSwitchToSignup: () => void;
  onClose: () => void;
}

type MsgType = 'error' | 'notice' | '';

const LoginModal = ({ onSwitchToSignup, onClose }: LoginModalProps) => {
  const pathname = usePathname();
  const orgFromPath = useMemo(() => getOrgFromPath(pathname || undefined), [pathname]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orgInput, setOrgInput] = useState('');
  const [msg, setMsg] = useState<string>('');
  const [msgType, setMsgType] = useState<MsgType>('');
  const [loading, setLoading] = useState(false);

  // Autofill/hide org field if present in /o/[slug]
  useEffect(() => {
    if (orgFromPath) {
      setOrgInput(orgFromPath);
    }
  }, [orgFromPath]);

  const showMsg = (type: MsgType, text: string) => {
    setMsg(text);
    setMsgType(type);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg('');
    setMsgType('');
    setLoading(true);

    try {
      const payload: any = { email, password, to: '/' };
      const org_slug = orgFromPath || (orgInput ? slugifyOrg(orgInput) : '');
      if (org_slug) payload.org_slug = org_slug;

      const res: any = await apiPost('/auth/web/login', payload);
      if (!res?.exchangeUrl) {
        showMsg('error', 'Sign-in succeeded, but redirect was missing. Please try again.');
        return;
      }

      showMsg('notice', 'Signed in. Redirecting…');
      setTimeout(() => {
        window.location.href = String(res.exchangeUrl);
      }, 250);
    } catch (err: any) {
      const data = err?.data;
      if (data?.error === 'organization_required' && Array.isArray(data?.orgs) && data.orgs.length) {
        const list = data.orgs
          .slice(0, 5)
          .map((o: any) => o.slug || o.name)
          .filter(Boolean)
          .join(', ');
        showMsg('error', list ? `Please enter your organization slug. Available: ${list}` : 'Please enter your organization slug.');
      } else if (data?.error === 'multiple_org_matches') {
        showMsg('error', 'Multiple organizations match that value. Please enter the full organization slug (e.g. acme-inc-2).');
      } else {
        showMsg('error', err?.message || 'Unable to sign in.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    const u = new URL(getAppOrigin() + '/api/auth/google/start');
    u.searchParams.set('client', 'web');
    u.searchParams.set('to', '/');
    const org_slug = orgFromPath || (orgInput ? slugifyOrg(orgInput) : '');
    if (org_slug) u.searchParams.set('org', org_slug);
    window.location.href = u.toString();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        className="relative w-full max-w-md u-surface p-6 shadow-xl"
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 rounded p-2 text-body-copy hover:text-headings dark:text-slate-300"
        >
          <X size={20} />
        </button>

        <h2 className="mb-1 text-center text-2xl font-bold text-headings dark:text-white">Welcome back</h2>
        <p className="mb-6 text-center text-sm text-body-copy dark:text-slate-400">
          Sign in to continue to UNOBITS.
        </p>

        {/* Message box */}
        <div id="loginFormMsg" role="alert" aria-live="polite" hidden={!msg}
             className={`mt-2 text-sm ${msgType === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
          {msg}
        </div>

        <form id="loginForm" onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="loginEmail" className="block text-sm font-medium text-headings dark:text-slate-200">
              Email
            </label>
            <input
              id="loginEmail"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="loginPwd" className="block text-sm font-medium text-headings dark:text-slate-200">
              Password
            </label>
            <input
              id="loginPwd"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          {/* Organization (required if not in path) */}
          {!orgFromPath && (
            <div>
              <label htmlFor="loginOrg" className="block text-sm font-medium text-headings dark:text-slate-200">
                Organization (optional if you belong to one org)
              </label>
              <input
                id="loginOrg"
                required={false}
                value={orgInput}
                onChange={(e) => setOrgInput(e.target.value)}
                placeholder="your-company"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
          )}

          <button
            id="loginSubmit"
            type="submit"
            disabled={loading}
            className="group relative inline-flex w-full items-center justify-center rounded-lg bg-headings px-4 py-2.5 text-sm font-semibold text-white outline-none ring-0 transition hover:bg-black disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            <span className="unb-btn-text" data-loading={loading ? '1' : '0'}>
              {loading ? 'Please wait…' : 'Sign in'}
            </span>
          </button>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="h-px flex-1 bg-white/10" />
            <span>or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="group relative inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/5 disabled:opacity-60"
          >
            Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-body-copy dark:text-slate-400">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignup} className="font-semibold text-neon-teal hover:underline">
            Sign up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginModal;