'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface LoginModalProps {
  onSwitchToSignup: () => void;
  onClose: () => void;
}

const LoginModal = ({ onSwitchToSignup, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://unobits.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      console.log('Login successful');
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md relative border border-slate-200 dark:border-slate-800"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-headings dark:text-white mb-2 text-center">Welcome Back</h2>
        <p className="text-body-copy dark:text-slate-400 mb-6 text-center">Log in to access your dashboard.</p>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
          <div className="mb-4">
            <label className="block text-body-copy dark:text-slate-300 mb-2 font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-teal outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-body-copy dark:text-slate-300 mb-2 font-semibold" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-teal outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-neon-teal text-black py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-body-copy dark:text-slate-400">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignup} className="text-neon-teal hover:underline font-semibold">
            Sign up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginModal;
