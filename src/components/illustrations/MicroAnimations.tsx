// src/components/illustrations/MicroAnimations.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Small, lightweight animated illustrations used across the homepage.
 * No extra dependencies (only framer-motion + Tailwind classes already in the project).
 */

export function MiniKanban() {
  const pulse = (delay: number) => ({
    opacity: [0.55, 1, 0.55],
    y: [0, -2, 0],
    transition: { duration: 2.2, repeat: Infinity, delay, ease: 'easeInOut' },
  });

  return (
    <div className="mt-4 grid grid-cols-3 gap-2">
      {Array.from({ length: 3 }).map((_, col) => (
        <div key={col} className="rounded-xl bg-slate-200/70 dark:bg-slate-700/60 p-2">
          <motion.div className="h-7 rounded-lg bg-white dark:bg-slate-600" animate={pulse(col * 0.15)} />
          <motion.div
            className="mt-2 h-10 rounded-lg bg-white dark:bg-slate-600"
            animate={pulse(0.35 + col * 0.15)}
          />
        </div>
      ))}
    </div>
  );
}

export function MiniDoc() {
  return (
    <div className="mt-4 relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4">
      <div className="space-y-2">
        <div className="h-3 w-3/4 rounded bg-slate-200 dark:bg-white/10" />
        <div className="h-3 w-full rounded bg-slate-200 dark:bg-white/10" />
        <div className="h-3 w-5/6 rounded bg-slate-200 dark:bg-white/10" />
        <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-white/10" />
      </div>

      {/* Scanning highlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-10 w-full bg-gradient-to-r from-transparent via-neon-teal/15 to-transparent"
        animate={{ y: [0, 64, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blinking cursor */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-4 h-4 w-[2px] bg-neon-teal"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export function MiniMobile() {
  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="relative w-44 h-80 rounded-[28px] border-2 border-slate-300/70 dark:border-white/15 bg-slate-200/70 dark:bg-white/5 p-3">
        <div className="relative h-full w-full rounded-[22px] bg-white dark:bg-obsidian overflow-hidden">
          {/* Status bar */}
          <div className="h-6 w-full bg-slate-100 dark:bg-white/5" />

          {/* Notification */}
          <motion.div
            className="absolute left-3 right-3 top-8 rounded-xl bg-white/90 dark:bg-black/50 border border-slate-200/70 dark:border-white/10 px-3 py-2 shadow-sm"
            animate={{ y: [-18, 0, 0, -18], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-neon-teal" aria-hidden="true" />
              <p className="text-xs font-semibold text-headings dark:text-white">Task updated</p>
            </div>
            <p className="mt-1 text-[11px] text-body-copy dark:text-slate-300">
              “Homepage copy” moved to <span className="font-semibold">Review</span>.
            </p>
          </motion.div>

          {/* Simple content blocks */}
          <div className="px-4 pt-14 space-y-3">
            <div className="h-10 rounded-xl bg-slate-100 dark:bg-white/5" />
            <div className="h-10 rounded-xl bg-slate-100 dark:bg-white/5" />
            <div className="h-10 rounded-xl bg-slate-100 dark:bg-white/5" />
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-slate-100 dark:bg-white/5" />
          <div className="absolute bottom-5 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-300/70 dark:bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export function MiniAutomation() {
  return (
    <div className="mt-4 relative flex items-center justify-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200/70 dark:bg-white/10">
        <span className="text-lg" aria-hidden="true">
          📧
        </span>
      </div>

      <div className="relative h-1 w-32">
        <div className="absolute inset-0 border-t-2 border-dashed border-slate-300 dark:border-white/20" />
        <motion.div
          aria-hidden="true"
          className="absolute -top-[5px] h-3 w-3 rounded-full bg-neon-teal shadow-[0_0_0_6px_rgba(0,212,255,0.12)]"
          animate={{ x: [0, 128, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200/70 dark:bg-white/10">
        <span className="text-lg" aria-hidden="true">
          📈
        </span>
      </div>
    </div>
  );
}
