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
import { SITE_NAME } from '@/lib/siteConfig';

type ActiveMenu = 'product' | 'solutions' | null;
type Theme = 'dark' | 'light';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
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
    setIsGetStartedOpen(false);
    setShowSignup(false);
    setShowLogin(true);
  }, []);

  const handleShowSignup = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsGetStartedOpen(false);
    setShowLogin(false);
    setShowSignup(true);
  }, []);

  const closeAllModals = useCallback(() => {
    setShowLogin(false);
    setShowSignup(false);
    setIsMobileMenuOpen(false);
    setIsGetStartedOpen(false);
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

  const isDropdownOpen = activeMenu !== null;
  // Make the header + flyouts feel like a single, consistent "glass" surface.
  const showGlass = isScrolled || isDropdownOpen || isGetStartedOpen;
  const surfaceClass = showGlass ? (isDropdownOpen ? 'u-glass-strong' : 'u-glass') : 'bg-transparent';
  const surfaceBorder = showGlass ? 'border border-slate-200/70 dark:border-white/15' : '';
  const surfaceRounded = isDropdownOpen ? 'rounded-t-full rounded-b-none' : 'rounded-full';
  const surfaceBottomBorder = isDropdownOpen ? 'border-b-0' : '';
  const surfaceHeight = isScrolled ? 'h-14' : 'h-16';
  const outerPadding = isScrolled ? 'pt-2 pb-2' : 'pt-4 pb-3';

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${outerPadding}`}>
          <div
            className="relative"
            onMouseLeave={() => {
              setActiveMenu(null);
              setIsGetStartedOpen(false);
            }}
          >
            <div
              className={`transition-all duration-300 ${surfaceClass} ${surfaceBorder} ${surfaceBottomBorder} ${surfaceRounded} ${surfaceHeight}`}
            >
              <div className="h-full flex items-center justify-between px-4 sm:px-5">
                <Link href="/" className="flex items-center">
                  <span className="sr-only">{SITE_NAME}</span>
                  <Image
                    src="/brand/unobits-mark-64.png"
                    alt="UNOBITS Logo"
                    width={34}
                    height={34}
                    priority
                  />
                </Link>

                <div className="hidden md:flex items-center gap-7">
                  <div onMouseEnter={() => {
                    setActiveMenu('product');
                    setIsGetStartedOpen(false);
                  }}>
                    <button className="flex items-center text-body-copy dark:text-slate-300 hover:text-neon-teal transition-colors">
                      Product <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                  <div onMouseEnter={() => {
                    setActiveMenu('solutions');
                    setIsGetStartedOpen(false);
                  }}>
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

                <div className="hidden md:flex items-center gap-3">
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setIsGetStartedOpen(true);
                      setActiveMenu(null);
                    }}
                    onMouseLeave={() => setIsGetStartedOpen(false)}
                  >
                    <button
                      onClick={handleShowSignup}
                      className="bg-neon-teal text-black px-5 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors"
                    >
                      Get started
                    </button>

                    <AnimatePresence>
                      {isGetStartedOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute right-0 top-full mt-2 w-56 u-glass-strong border border-slate-200/70 dark:border-white/20 rounded-3xl overflow-hidden p-2"
                        >
                          <button
                            onClick={handleShowLogin}
                            className="w-full text-left px-4 py-3 rounded-2xl font-semibold text-headings dark:text-white hover:bg-slate-100/80 dark:hover:bg-white/10 transition-colors"
                          >
                            Log in
                          </button>
                          <button
                            onClick={handleShowSignup}
                            className="w-full text-left mt-1 px-4 py-3 rounded-2xl font-semibold bg-neon-teal text-black hover:bg-opacity-80 transition-colors"
                          >
                            Sign up
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

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
                    className="p-2 rounded-full text-headings dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
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
          </div>
        </div>
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
                className="w-full max-w-sm u-glass border rounded-3xl px-4 py-3 flex items-center justify-between"
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

              <button
                onClick={handleShowSignup}
                className="bg-neon-teal text-black px-6 py-3 rounded-full font-semibold text-lg w-full max-w-sm"
              >
                Get started
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
