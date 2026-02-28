'use client';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { apiPost, getAppOrigin, slugifyOrg } from '../lib/clientAuth';

interface SignupModalProps {
  onSwitchToLogin: () => void;
  onClose: () => void;
}

type MsgType = 'error' | 'notice' | '';

function pwdScore(p: string): number {
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p)) s++;
  if (/[a-z]/.test(p)) s++;
  if (/[0-9\W]/.test(p)) s++;
  return s; // 0..4
}

const SignupModal = ({ onSwitchToLogin, onClose }: SignupModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tosOk, setTosOk] = useState(false);

  const [msg, setMsg] = useState<string>('');
  const [msgType, setMsgType] = useState<MsgType>('');
  const [loading, setLoading] = useState(false);

  const strength = useMemo(() => pwdScore(password), [password]);

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
      if (!name || !email || !company) {
        showMsg('error', 'Please complete all required fields.');
        return;
      }
      if ((password || '').length < 8) {
        showMsg('error', 'Password must be at least 8 characters.');
        return;
      }
      if (password !== confirmPassword) {
        showMsg('error', 'Passwords do not match.');
        return;
      }
      if (!tosOk) {
        showMsg('error', 'Please accept Terms & Privacy.');
        return;
      }

      const res: any = await apiPost('/auth/web/signup', {
        name,
        email,
        password,
        org_name: company,
        to: '/',
      });

      if (!res?.exchangeUrl) {
        showMsg('error', 'Account created, but redirect was missing. Please try signing in.');
        return;
      }

      showMsg('notice', 'Account created. Redirecting…');
      setTimeout(() => {
        window.location.href = String(res.exchangeUrl);
      }, 250);
    } catch (err: any) {
      showMsg('error', err?.message || 'Unable to sign up.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    const u = new URL(getAppOrigin() + '/api/auth/google/start');
    u.searchParams.set('client', 'web');
    u.searchParams.set('to', '/');
    if (company) u.searchParams.set('org_name', company);
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

        <h2 className="mb-1 text-center text-2xl font-bold text-headings dark:text-white">Create your account</h2>
        <p className="mb-6 text-center text-sm text-body-copy dark:text-slate-400">
          Start your 14‑day free trial. No credit card required.
        </p>

        {/* Message box */}
        <div id="signupFormMsg" role="alert" aria-live="polite" hidden={!msg}
             className={`mt-2 text-sm ${msgType === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
          {msg}
        </div>

        <form id="signupForm" onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="suName" className="block text-sm font-medium text-headings dark:text-slate-200">
              Full name
            </label>
            <input
              id="suName"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="suEmail" className="block text-sm font-medium text-headings dark:text-slate-200">
              Work email
            </label>
            <input
              id="suEmail"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          {/* Company / Organization */}
          <div>
            <label htmlFor="suCompany" className="block text-sm font-medium text-headings dark:text-slate-200">
              Organization
            </label>
            <input
              id="suCompany"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="suPwd" className="block text-sm font-medium text-headings dark:text-slate-200">
              Password
            </label>
            <input
              id="suPwd"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <meter id="pwdStrength" min={0} max={4} value={strength} className="mt-2 w-full"></meter>
          </div>

          {/* Confirm password */}
          <div>
            <label htmlFor="suPwd2" className="block text-sm font-medium text-headings dark:text-slate-200">
              Confirm password
            </label>
            <input
              id="suPwd2"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          {/* TOS */}
          <label className="mt-2 flex items-start gap-2 text-sm text-body-copy dark:text-slate-300">
            <input id="suTos" type="checkbox" checked={tosOk} onChange={(e) => setTosOk(e.target.checked)} />
            <span>I agree to the <a href="/legal/terms" target="_blank" className="underline">Terms</a> and <a href="/legal/privacy" target="_blank" className="underline">Privacy Policy</a>.</span>
          </label>

          <button
            id="signupSubmit"
            type="submit"
            disabled={loading}
            className="group relative inline-flex w-full items-center justify-center rounded-lg bg-headings px-4 py-2.5 text-sm font-semibold text-white outline-none ring-0 transition hover:bg-black disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            <span className="unb-btn-text" data-loading={loading ? '1' : '0'}>
              {loading ? 'Please wait…' : 'Create account'}
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
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="font-semibold text-neon-teal hover:underline">
            Login
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupModal;
