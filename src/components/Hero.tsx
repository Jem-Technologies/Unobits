'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

function openSignup() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('unobits:open-signup'));
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black text-center py-20 md:py-32 px-4 flex flex-col items-center">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[100%] md:h-[100%] z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.1)_0%,_rgba(0,212,255,0)_50%)]" />
      </div>

      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-headings dark:text-white tracking-tight max-w-4xl">
          The One Operating System for Your Entire Business.
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-md md:text-lg text-body-copy dark:text-slate-400">
          Replace 15+ disconnected apps. From Email and CRM to Project Management and Docs—UNOBITS is the only tab you need open.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={openSignup}
            className="w-full md:w-auto bg-neon-teal hover:bg-opacity-80 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <span>Start your free trial</span>
            <ArrowRight size={20} />
          </button>
          <Link
            href="/product/ecosystem"
            className="w-full md:w-auto bg-slate-100 dark:bg-slate-800 text-headings dark:text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <PlayCircle size={20} />
            <span>See the Ecosystem</span>
          </Link>
        </div>
        <div className="mt-12">
          <p className="text-sm text-body-copy dark:text-slate-500">Built for teams who are done with tab overload.</p>
          <div className="flex flex-wrap justify-center items-center mt-4 space-x-6 md:space-x-10 opacity-50 grayscale">
            <p className="font-mono">SaaS</p>
            <p className="font-mono">Agencies</p>
            <p className="font-mono">Startups</p>
            <p className="font-mono">Consulting</p>
            <p className="font-mono">Enterprise</p>
          </div>
        </div>
      </div>

      <div className="relative mt-20 w-full flex justify-center" style={{ perspective: '2000px' }}>
        <motion.div
          className="relative w-full max-w-4xl h-80 md:h-[450px] bg-slate-200 dark:bg-slate-800/50 rounded-xl border border-slate-300/50 dark:border-slate-700/50 shadow-2xl p-4"
          initial={{ opacity: 0, y: 50, rotateX: 20, rotateZ: 5 }}
          animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="w-full h-full bg-neon-teal/10 rounded-lg p-4 flex flex-col space-y-4"
            animate={{ translateY: ["-2%", "2%", "-2%"] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          >
             <div className="w-full h-8 bg-white/10 rounded-md" />
             <div className="flex space-x-4 h-full">
                <div className="w-1/4 h-full bg-white/10 rounded-md" />
                <div className="w-3/4 h-full bg-white/10 rounded-md" />
             </div>
          </motion.div>

          <motion.div
            className="absolute -top-8 -left-12 w-48 h-24 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 text-left"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm font-semibold text-white">New Lead (CRM)</p>
            <p className="text-xs text-slate-300">John Doe from Acme Inc.</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -right-16 w-56 h-28 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 text-left"
             initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
             <p className="text-sm font-semibold text-white">Project Updated</p>
            <p className="text-xs text-slate-300">'Q4 Launch Plan' moved to 'Done'</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
