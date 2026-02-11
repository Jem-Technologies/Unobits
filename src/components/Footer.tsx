'use client';
import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY, SITE_NAME, SUPPORT_EMAIL, SUPPORT_PHONE, SOCIAL } from '@/lib/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center space-x-2">
              <Image
                src="/brand/unobits-mark-64.png"
                alt={`${SITE_NAME} Logo`}
                width={32}
                height={32}
                loading="lazy"
              />
              <span className="font-bold text-xl text-headings dark:text-white">{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-body-copy dark:text-slate-400 text-sm">The One Operating System for Your Entire Business.</p>
            <div className="flex space-x-4 mt-6">
              <a href={SOCIAL.x} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-teal transition-colors" aria-label="UNOBITS on X">
                <Twitter size={20} />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-teal transition-colors" aria-label="UNOBITS on LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-teal transition-colors" aria-label="UNOBITS on GitHub">
                <Github size={20} />
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm text-body-copy dark:text-slate-400">
              <p>
                Support:{' '}
                <a className="font-semibold hover:text-neon-teal" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p>
                Call:{' '}
                <a className="font-semibold hover:text-neon-teal" href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, '')}`}>
                  {SUPPORT_PHONE}
                </a>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500">{COMPANY.addressLine1} · {COMPANY.addressLine2}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-headings dark:text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/product" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Platform Overview</Link></li>
              <li><Link href="/pricing" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/product/mobile-app" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Mobile App</Link></li>
              <li><Link href="/product/desktop-app" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Desktop App</Link></li>
              <li><Link href="/client-portal" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Client Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-headings dark:text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/resources" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Blog</Link></li>
<li><Link href="/templates" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Templates Library</Link></li>
<li><Link href="/alternatives" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Alternatives</Link></li>
<li><Link href="/tab-overload" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Tab Overload Guide</Link></li>
<li><Link href="/reviews" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Reviews</Link></li>
              <li><Link href="/community" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Community</Link></li>
              <li><Link href="/developers" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Developers (API)</Link></li>
              <li><Link href="/help-center" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Help Center</Link></li>
              <li><Link href="/changelog" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-headings dark:text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">About</Link></li>
              <li><Link href="/careers" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Contact</Link></li>
              <li><Link href="/legal" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Legal</Link></li>
              <li><Link href="/security" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Security</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="font-semibold text-headings dark:text-white">Status</h3>
             <Link href="/status" className="flex items-center mt-4 text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                All Systems Operational
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-white/10 pt-8 text-center">
          <p className="text-sm text-body-copy dark:text-slate-500">&copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
