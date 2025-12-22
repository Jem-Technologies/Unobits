'use client';
import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="UNOBITS Logo" width={32} height={32} />
              <span className="font-bold text-xl text-headings dark:text-white">UNOBITS</span>
            </div>
            <p className="mt-4 text-body-copy dark:text-slate-400 text-sm">The One Operating System for Your Entire Business.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-neon-teal transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-neon-teal transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-neon-teal transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-headings dark:text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/product/features" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Features</a></li>
              <li><a href="/pricing" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Pricing</a></li>
              <li><a href="/product/mobile-app" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Mobile App</a></li>
              <li><a href="/product/desktop-app" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Desktop App</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-headings dark:text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/resources" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Community</a></li>
              <li><a href="#" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Developers (API)</a></li>
              <li><a href="#" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-headings dark:text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">Legal</a></li>
            </ul>
          </div>

          <div>
             <h3 className="font-semibold text-headings dark:text-white">Status</h3>
             <a href="#" className="flex items-center mt-4 text-body-copy dark:text-slate-400 hover:text-neon-teal transition-colors text-sm">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                All Systems Operational
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
          <p className="text-sm text-body-copy dark:text-slate-500">&copy; {new Date().getFullYear()} UNOBITS Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
