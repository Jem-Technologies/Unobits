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
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.08)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.15)_0%,_transparent_70%)]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)]" />
        {/* Top-left glow */}
        <motion.div
          className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-neon-teal/20 dark:bg-neon-teal/30 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom-right glow */}
        <motion.div
          className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-electric-indigo/15 dark:bg-electric-indigo/25 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-neon-teal/10 dark:bg-neon-teal/15 border border-neon-teal/30"
        >
          <span className="h-2 w-2 rounded-full bg-neon-teal animate-pulse" />
          <span className="text-sm font-semibold text-neon-teal">Now in Public Beta</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-headings dark:text-white tracking-tight max-w-4xl leading-tight"
        >
          The One Operating System for{' '}
          <span className="text-gradient">Your Entire Business</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mt-6 text-md md:text-lg text-body-copy dark:text-slate-400"
        >
          Replace 15+ disconnected apps. From Email and CRM to Project Management and Docs—UNOBITS is the only tab you need open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <button
            onClick={openSignup}
            className="w-full md:w-auto bg-neon-teal hover:bg-neon-teal/80 text-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-teal/30"
          >
            <span>Start your free trial</span>
            <ArrowRight size={20} />
          </button>
          <Link
            href="/product/ecosystem"
            className="w-full md:w-auto bg-slate-100 dark:bg-white/10 text-headings dark:text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-white/10 hover:border-neon-teal/50"
          >
            <PlayCircle size={20} />
            <span>See the Ecosystem</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm text-body-copy dark:text-slate-500">Built for teams who are done with tab overload.</p>
          <div className="flex flex-wrap justify-center items-center mt-4 space-x-6 md:space-x-10 opacity-60 dark:opacity-50">
            <p className="font-mono text-sm text-headings dark:text-white">SaaS</p>
            <p className="font-mono text-sm text-headings dark:text-white">Agencies</p>
            <p className="font-mono text-sm text-headings dark:text-white">Startups</p>
            <p className="font-mono text-sm text-headings dark:text-white">Consulting</p>
            <p className="font-mono text-sm text-headings dark:text-white">Enterprise</p>
          </div>
        </motion.div>
      </div>

      {/* Hero Visual */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-20 w-full flex justify-center"
        style={{ perspective: '2000px' }}
      >
        <motion.div
          className="relative w-full max-w-5xl h-80 md:h-[500px] rounded-2xl overflow-hidden"
          initial={{ rotateX: 15 }}
          animate={{ rotateX: 5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Dashboard preview image */}
          <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl">
            <img
              src="/communication-preview.png"
              alt="UNOBITS Dashboard Preview"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          </div>

          {/* Floating notification cards */}
          <motion.div
            className="absolute -top-4 -left-4 md:-top-6 md:-left-8 w-44 md:w-52 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 p-3 shadow-xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-semibold text-headings dark:text-white">New Lead</p>
            </div>
            <p className="text-xs text-body-copy dark:text-slate-400 mt-1">John Doe from Acme Inc. just signed up</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-8 w-48 md:w-60 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 p-3 shadow-xl"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neon-teal" />
              <p className="text-sm font-semibold text-headings dark:text-white">Project Updated</p>
            </div>
            <p className="text-xs text-body-copy dark:text-slate-400 mt-1">'Q4 Launch Plan' moved to 'Done'</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

