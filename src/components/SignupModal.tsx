'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const SignupModal = ({ onSwitchToLogin, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://unobits.app/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, company, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      console.log('Signup successful for:', email);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to sign up. Please try again.');
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

        <h2 className="text-3xl font-bold text-headings dark:text-white mb-2 text-center">Create Your Account</h2>
        <p className="text-body-copy dark:text-slate-400 mb-6 text-center">Start your 14-day free trial today.</p>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
          <div className="grid grid-cols-2 gap-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" type="text" className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-teal outline-none" required />
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" type="text" className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-teal outline-none" required />
          </div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="mt-4 w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-teal outline-none" required />
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="mt-4 w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-teal outline-none" required />
          <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password" className="mt-4 w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-neon-teal outline-none" required />
          <button
            type="submit"
            className="w-full mt-6 bg-neon-teal text-black py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-body-copy dark:text-slate-400">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="text-neon-teal hover:underline font-semibold">
            Login
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupModal;
