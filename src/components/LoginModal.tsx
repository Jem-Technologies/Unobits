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
      const org_slug = orgFromPath || slugifyOrg(orgInput);
      if (!org_slug) {
        showMsg('error', 'Please enter your Organization.');
        return;
      }
      await apiPost('/login', { email, password, org_slug });
      showMsg('notice', 'Signed in. Redirecting…');
      // Small delay to let the message render before redirect
      setTimeout(() => {
        window.location.href = getAppOrigin() + '/';
      }, 300);
    } catch (err: any) {
      showMsg('error', err?.message || 'Unable to sign in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900"
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
                Organization
              </label>
              <input
                id="loginOrg"
                required={!orgFromPath}
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
