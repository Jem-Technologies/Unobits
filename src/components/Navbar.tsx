'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, X, Menu } from 'lucide-react';
import Image from 'next/image';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const handleShowLogin = () => { setIsMobileMenuOpen(false); setShowSignup(false); setShowLogin(true); };
  const handleShowSignup = () => { setIsMobileMenuOpen(false); setShowLogin(false); setShowSignup(true); };

  const navClass = isScrolled
    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50'
    : 'bg-transparent';

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="UNOBITS Logo" width={32} height={32} />
              <span className="font-bold text-xl text-headings dark:text-white">UNOBITS</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">Product</a>
              <a href="#" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">Solutions</a>
              <a href="#" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">Resources</a>
              <a href="#" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">Pricing</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button onClick={handleShowLogin} className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors font-semibold">Login</button>
              <button onClick={handleShowSignup} className="bg-neon-teal text-black px-4 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">Get Started Free</button>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black md:hidden"
        >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#" className="text-2xl text-headings dark:text-white">Product</a>
                <a href="#" className="text-2xl text-headings dark:text-white">Solutions</a>
                <a href="#" className="text-2xl text-headings dark:text-white">Resources</a>
                <a href="#" className="text-2xl text-headings dark:text-white">Pricing</a>
                <div className="border-t border-slate-200 dark:border-slate-800 w-1/2 my-4" />
                <button onClick={handleShowLogin} className="text-2xl text-headings dark:text-white">Login</button>
                <button onClick={handleShowSignup} className="bg-neon-teal text-black px-6 py-3 rounded-lg font-semibold text-lg">Get Started Free</button>
            </div>
        </motion.div>
      )}

      {showLogin && <LoginModal onSwitchToSignup={handleShowSignup} onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupModal onSwitchToLogin={handleShowLogin} onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Navbar;
