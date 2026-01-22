'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, X, Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import MegaMenu from './MegaMenu';
import { productMenu, solutionsMenu } from '@/lib/megaMenuData';

type ActiveMenu = 'product' | 'solutions' | null;
type Theme = 'dark' | 'light';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);

  useEffect(() => {
    setMounted(true);

    // Theme is initialized as early as possible in RootLayout.
    // Here we simply sync the toggle state with localStorage.
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme);
      } else {
        const isDark = document.documentElement.classList.contains('dark');
        const fallback: Theme = isDark ? 'dark' : 'light';
        setTheme(fallback);
        localStorage.setItem('theme', fallback);
      }
    } catch {
      setTheme('dark');
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDark = theme === 'dark';
    try {
      document.documentElement.classList.toggle('dark', isDark);
      document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
      document.documentElement.style.backgroundColor = isDark ? '#000' : '#fff';
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore environments where storage is disabled.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const handleShowLogin = useCallback(() => {
    setIsMobileMenuOpen(false);
    setShowSignup(false);
    setShowLogin(true);
  }, []);

  const handleShowSignup = useCallback(() => {
    setIsMobileMenuOpen(false);
    setShowLogin(false);
    setShowSignup(true);
  }, []);

  const closeAllModals = useCallback(() => {
    setShowLogin(false);
    setShowSignup(false);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, []);

  // Allow other components (Hero/CTA buttons) to open these modals.
  useEffect(() => {
    const onLogin = () => handleShowLogin();
    const onSignup = () => handleShowSignup();
    const onClose = () => closeAllModals();

    if (typeof window !== 'undefined') {
      window.addEventListener('unobits:open-login', onLogin);
      window.addEventListener('unobits:open-signup', onSignup);
      window.addEventListener('unobits:close-modals', onClose);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('unobits:open-login', onLogin);
        window.removeEventListener('unobits:open-signup', onSignup);
        window.removeEventListener('unobits:close-modals', onClose);
      }
    };
  }, [handleShowLogin, handleShowSignup, closeAllModals]);

  // Make the header + flyout feel like a single, consistent "glass" surface.
  const showGlass = isScrolled || activeMenu !== null;
  // When a dropdown is open we remove the bottom border so the menu and navbar feel like one surface.
  const navClass = showGlass ? 'u-glass' : 'bg-transparent';
  const navBorderClass = isScrolled && activeMenu === null ? 'border-b' : '';

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${navClass} ${navBorderClass}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/brand/unobits-mark-64.png"
                alt="UNOBITS Logo"
                width={32}
                height={32}
                priority
              />
              <span className="font-bold text-xl text-headings dark:text-white">UNOBITS</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <div onMouseEnter={() => setActiveMenu('product')}>
                <button className="flex items-center text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">
                  Product <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              <div onMouseEnter={() => setActiveMenu('solutions')}>
                <button className="flex items-center text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">
                  Solutions <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              <Link href="/integrations" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">
                Integrations
              </Link>
              <Link href="/resources" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">
                Resources
              </Link>
              <Link href="/pricing" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">
                Pricing
              </Link>
              <Link href="/help-center" className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">
                Help
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleShowLogin}
                className="text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors font-semibold"
              >
                Login
              </button>
              <button
                onClick={handleShowSignup}
                className="bg-neon-teal text-black px-4 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-colors"
              >
                Start free trial
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-headings dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                {!mounted ? (
                  <span className="block h-5 w-5" aria-hidden="true" />
                ) : theme === 'dark' ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open menu"
                className="p-2 rounded-lg text-headings dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {activeMenu !== null ? (
            <MegaMenu
              key={activeMenu}
              menu={activeMenu === 'product' ? productMenu : solutionsMenu}
              onClose={() => setActiveMenu(null)}
            />
          ) : null}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              <Link href="/product" onClick={closeAllModals} className="text-2xl text-headings dark:text-white">
                Product
              </Link>
              <Link href="/solutions" onClick={closeAllModals} className="text-2xl text-headings dark:text-white">
                Solutions
              </Link>
              <Link href="/integrations" onClick={closeAllModals} className="text-2xl text-headings dark:text-white">
                Integrations
              </Link>
              <Link href="/resources" onClick={closeAllModals} className="text-2xl text-headings dark:text-white">
                Resources
              </Link>
              <Link href="/pricing" onClick={closeAllModals} className="text-2xl text-headings dark:text-white">
                Pricing
              </Link>
              <Link href="/help-center" onClick={closeAllModals} className="text-2xl text-headings dark:text-white">
                Help
              </Link>
              <div className="border-t border-slate-200 dark:border-white/10 w-full max-w-sm my-2" />

              <button
                onClick={toggleTheme}
                className="w-full max-w-sm u-glass border rounded-xl px-4 py-3 flex items-center justify-between"
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                <span className="font-semibold text-headings dark:text-white">Theme</span>
                <span className="flex items-center gap-2 text-body-copy dark:text-slate-300">
                  {!mounted ? null : theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-sm">{mounted ? (theme === 'dark' ? 'Dark' : 'Light') : ''}</span>
                </span>
              </button>

              <div className="border-t border-slate-200 dark:border-white/10 w-full max-w-sm my-2" />

              <button onClick={handleShowLogin} className="text-2xl text-headings dark:text-white">
                Login
              </button>
              <button onClick={handleShowSignup} className="bg-neon-teal text-black px-6 py-3 rounded-lg font-semibold text-lg">
                Start free trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showLogin && <LoginModal onSwitchToSignup={handleShowSignup} onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupModal onSwitchToLogin={handleShowLogin} onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Navbar;
