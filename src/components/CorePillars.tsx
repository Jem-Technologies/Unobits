'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { BarChart2, Briefcase, CheckSquare, MessageSquare } from 'lucide-react';

type ThemePillar = {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
  icon: React.ReactNode;
};

const PILLARS: ThemePillar[] = [
  {
    key: 'communication',
    icon: <MessageSquare size={22} className="text-neon-teal" aria-hidden="true" />,
    title: 'Communication',
    subtitle: 'Chat, Email, Video calls & Social.',
    description:
      'Keep conversations tied to the work: assign threads, route inbox items, and turn decisions into tasks without copy/paste.',
    bullets: [
      'Team chat with threads, mentions, and searchable history',
      'Connected email + shared inbox workflows (assign, tag, SLA)',
      'Video calls that live with notes, files, and action items',
      'Social inbox integrations (coming soon)',
    ],
    image: '/illustrations/pillars/communication.svg',
  },
  {
    key: 'productivity',
    icon: <CheckSquare size={22} className="text-neon-teal" aria-hidden="true" />,
    title: 'Productivity',
    subtitle: 'Docs, Sheets & Whiteboards.',
    description:
      'Capture knowledge and move work forward: docs that become tasks, structured sheets for tracking, and whiteboards for planning — all in one place.',
    bullets: [
      'Docs & notes you can convert into tasks and projects',
      'Sheets-style tracking for operations, pipelines, and KPIs',
      'Whiteboards for planning, wireframes, mindmaps, and workshops',
      'Files with permissions, comments, and versioning',
    ],
    image: '/illustrations/pillars/productivity.svg',
  },
  {
    key: 'growth',
    icon: <BarChart2 size={22} className="text-neon-teal" aria-hidden="true" />,
    title: 'Growth',
    subtitle: 'CRM, Email Marketing & Funnels.',
    description:
      'Run revenue inside the OS: manage pipelines, automate follow-ups, and connect deals directly to delivery and onboarding.',
    bullets: [
      'CRM pipelines with a full client timeline (messages, tasks, files)',
      'Email marketing + sequences that stop when people reply',
      'Funnels and onboarding flows that trigger hand-offs automatically',
      'Reporting that connects growth to delivery outcomes',
    ],
    image: '/illustrations/pillars/growth.svg',
  },
  {
    key: 'operations',
    icon: <Briefcase size={22} className="text-neon-teal" aria-hidden="true" />,
    title: 'Operations',
    subtitle: 'Project Mgmt & HR.',
    description:
      'Deliver work with clarity and consistency: projects, approvals, time tracking, and people ops that stay connected to the rest of your workspace.',
    bullets: [
      'Projects with boards, calendars, dependencies, and templates',
      'Time tracking, utilization, and delivery reporting',
      'HR onboarding + internal workflows (requests, approvals, SOPs)',
      'Role-based access so teams see what they need',
    ],
    image: '/illustrations/pillars/operations.svg',
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

const CorePillars = () => {
  const pillars = useMemo(() => PILLARS, []);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const detailViewportRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const scrollProgress = useMotionValue(0);
  const [activeTab, setActiveTab] = useState(0);
  const activeRef = useRef(0);
  const [detailViewportHeight, setDetailViewportHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const h = detailViewportRef.current?.clientHeight ?? 0;
      setDetailViewportHeight(h);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;

    const update = () => {
      rafRef.current = null;
      // Never hijack mobile/touch scrolling.
      if (window.innerWidth < 1024) {
        scrollProgress.set(0);
        return;
      }

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = el.offsetHeight - vh;
      if (total <= 0) {
        scrollProgress.set(0);
        return;
      }

      // Only map while we're around the section, but keep values clamped.
      const raw = -rect.top;
      const scrolled = clamp(raw, 0, total);
      const p = scrolled / total;
      scrollProgress.set(p);
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [scrollProgress]);

  useMotionValueEvent(scrollProgress, 'change', (p) => {
    const count = pillars.length;
    const next = clamp(Math.floor(p * count), 0, count - 1);
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActiveTab(next);
    }
  });

  const scrollToTab = useCallback(
    (index: number) => {
      const el = storyRef.current;
      if (!el) return;
      const vh = window.innerHeight || 1;
      const top = el.offsetTop + index * vh;
      window.scrollTo({ top, behavior: 'smooth' });
    },
    []
  );

  const PANEL_HEIGHT_CLASS = 'h-[56vh] min-h-[420px] max-h-[560px]';
  const detailsY = useTransform(scrollProgress, (p) => {
    if (!detailViewportHeight) return 0;
    return -p * (pillars.length - 1) * detailViewportHeight;
  });

  return (
    <section className="py-24 bg-white dark:bg-black" style={{ minHeight: '1px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-headings dark:text-white">Everything you need. Nothing you don't.</h2>
          <p className="mt-4 text-lg text-body-copy dark:text-slate-400 max-w-2xl mx-auto">
            A fully integrated suite of tools to run your entire business from a single, unified platform.
          </p>
        </div>

        {/* Desktop: scroll-activated, pinned narrative */}
        <div className="hidden lg:block">
          <div
            className="relative"
            style={{ height: `${pillars.length * 100}vh` }}
            aria-label="Platform pillars"
            ref={storyRef}
          >
            <div className="sticky top-0 h-screen flex items-center">
              <div className="grid grid-cols-12 gap-10 w-full">
                {/* Left: tabs + scroll-through details */}
                <div className="col-span-5 flex flex-col">
                  <div className="space-y-2">
                    {pillars.map((tab, idx) => {
                      const isActive = idx === activeTab;
                      return (
                        <button
                          key={tab.key}
                          onClick={() => scrollToTab(idx)}
                          className={`w-full text-left rounded-xl border px-4 py-4 transition-all duration-200 ${
                            isActive
                              ? 'u-glass border-neon-teal/40 shadow-[0_0_0_1px_rgba(0,212,255,0.25)]'
                              : 'border-slate-200 dark:border-white/10 hover:u-glass'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5">
                              {tab.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-bold text-headings dark:text-white">{tab.title}</h3>
                                <span className="text-xs font-semibold text-neon-teal">{idx + 1}/{pillars.length}</span>
                              </div>
                              <p className="mt-1 text-sm text-body-copy dark:text-slate-400">{tab.subtitle}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div ref={detailViewportRef} className={`relative mt-8 overflow-hidden rounded-2xl ${PANEL_HEIGHT_CLASS}`}>
                    <motion.div
                      className="absolute inset-0 will-change-transform flex flex-col"
                      style={{ y: detailsY }}
                    >
                      {pillars.map((tab) => (
                        <div
                          key={`${tab.key}-panel`}
                          className={`flex-shrink-0 u-surface p-8 dark:bg-white/5 ${PANEL_HEIGHT_CLASS}`}
                        >
                          <p className="text-xs font-semibold tracking-wide text-neon-teal">{tab.subtitle}</p>
                          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-headings dark:text-white">{tab.title}</h3>
                          <p className="mt-4 text-base leading-7 text-body-copy dark:text-slate-400">{tab.description}</p>
                          <ul className="mt-6 space-y-3">
                            {tab.bullets.map((b) => (
                              <li key={b} className="flex gap-3">
                                <span className="mt-1.5 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                                <span className="text-sm text-body-copy dark:text-slate-300">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Right: sticky visual */}
                <div className="col-span-7">
                  <div className="relative h-[520px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pillars[activeTab].key}
                        initial={{ opacity: 0, y: 14, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.99 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="absolute inset-0"
                      >
                        <img
                          src={pillars[activeTab].image}
                          alt={`${pillars[activeTab].title} preview`}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur-md border border-white/15">
                            <span className="h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                            <span className="text-sm font-semibold">{pillars[activeTab].title}</span>
                            <span className="text-xs text-white/70">— {pillars[activeTab].subtitle}</span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards (no scroll-jacking) */}
        <div className="lg:hidden">
          <div className="relative max-w-xl mx-auto">
            {pillars.map((tab, idx) => (
              <div
                key={tab.key}
                className="sticky"
                style={{ top: 88 + idx * 10, marginBottom: idx === pillars.length - 1 ? 0 : 18 }}
              >
                <div className="u-glass border rounded-3xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5">
                      {tab.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-headings dark:text-white">{tab.title}</h3>
                      <p className="mt-1 text-sm text-body-copy dark:text-slate-300">{tab.subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-body-copy dark:text-slate-400">{tab.description}</p>

                  <ul className="mt-5 space-y-2">
                    {tab.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neon-teal" aria-hidden="true" />
                        <span className="text-sm text-body-copy dark:text-slate-300">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-100 dark:bg-white/5">
                    <img src={tab.image} alt="" className="h-44 w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
