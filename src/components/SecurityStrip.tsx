'use client';
import React from 'react';
import { Lock, ShieldCheck, FileKey } from 'lucide-react';

const SecurityStrip = () => {
  return (
    <section className="bg-slate-50 dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-3 text-body-copy dark:text-slate-400">
            <Lock size={24} className="text-neon-teal" />
            <span className="font-semibold text-md text-headings dark:text-white">Enterprise-Grade Security</span>
          </div>
           <div className="flex items-center space-x-3 text-body-copy dark:text-slate-400">
            <ShieldCheck size={24} className="text-neon-teal" />
            <span className="font-semibold text-md text-headings dark:text-white">SOC2 Compliant</span>
          </div>
           <div className="flex items-center space-x-3 text-body-copy dark:text-slate-400">
            <FileKey size={24} className="text-neon-teal" />
            <span className="font-semibold text-md text-headings dark:text-white">End-to-End Encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityStrip;
