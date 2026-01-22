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

// Helper to constrain values
function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

// CONFIG: Adjust this to match your actual header height
const HEADER_HEIGHT_PX = 80; 

const CorePillars = () => {
  const pillars = useMemo(() => PILLARS, []);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const detailViewportRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const scrollProgress = useMotionValue(0);
  const [activeTab, setActiveTab] = useState(0);
  const activeRef = useRef(0);
  const [detailViewportHeight, setDetailViewportHeight] = useState(0);

  // Measure the height of a single card to know how far to translate
  useEffect(() => {
    const measure = () => {
      const h = detailViewportRef.current?.clientHeight ?? 0;
      setDetailViewportHeight(h);
    };
    // Measure initially and on resize
    measure();
    // Small timeout to ensure DOM is painted if initial measure is 0
    const t = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(t);
    };
  }, []);

  // Handle Scroll Progress
  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;

    const update = () => {
      rafRef.current = null;
      if (window.innerWidth < 1024) {
        scrollProgress.set(0);
        return;
      }

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // We calculate progress based on the element entering the view minus offset
      // This "total" is how much scroll distance we have available to animate
      const totalScrollDistance = el.offsetHeight - windowHeight + HEADER_HEIGHT_PX;

      if (totalScrollDistance <= 0) {
        scrollProgress.set(0);
        return;
      }

      // Calculate how far we've scrolled past the "start point"
      // We start counting when the top of the element hits our header offset
      const currentScroll = (rect.top - HEADER_HEIGHT_PX) * -1;
      
      const p = clamp(currentScroll / totalScrollDistance, 0, 1);
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

  // Sync Active Tab with Scroll
  useMotionValueEvent(scrollProgress, 'change', (p) => {
    // We map progress 0..1 to index 0..length-1
    const count = pillars.length;
    // We use a slight buffer so the switch happens "inside" the scroll area of that section
    const step = 1 / count; 
    const rawIndex = Math.floor(p / step);
    const next = clamp(rawIndex, 0, count - 1);
    
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActiveTab(next);
    }
  });

  // Vertical transform for the left-side text cards
  const detailsY = useTransform(scrollProgress, (p) => {
    if (!detailViewportHeight) return 0;
    // Map 0 -> 0px
    // Map 1 -> Total height of all cards except the first one (scrolling up)
    return -p * (pillars.length - 1) * detailViewportHeight;
  });

  const PANEL_HEIGHT_CLASS = 'min-h-[420px] max-h-[700px]';

  return (
    <section className="py-24 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-headings dark:text-white">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-4 text-lg text-body-copy dark:text-slate-400 max-w-2xl mx-auto">
            A fully integrated suite of tools to run your entire business.
          </p>
        </div>

        {/* --- DESKTOP: Scroll Narrative --- */}
        <div className="hidden lg:block">
          <div
            ref={storyRef}
            className="relative"
            // Increased height multiplier to give more "scroll track"
            style={{ height: `${pillars.length * 125}vh` }} 
          >
            <div 
              className="sticky flex items-center overflow-hidden"
              style={{ 
                top: HEADER_HEIGHT_PX, 
                height: `calc(100vh - ${HEADER_HEIGHT_PX}px)` 
              }}
            >
              <div className="grid grid-cols-12 gap-10 w-full pb-10">
                
                {/* Left: Scrollable Details */}
                <div className="col-span-5 flex flex-col justify-center">
                  <div 
                    ref={detailViewportRef} 
                    className={`relative w-full overflow-hidden rounded-2xl ${PANEL_HEIGHT_CLASS}`}
                  >
                    <motion.div
                      className="absolute left-0 right-0 top-0 flex flex-col will-change-transform"
                      style={{ y: detailsY }}
                    >
                      {pillars.map((tab) => (
                        <div
                          key={`${tab.key}-panel`}
                          // Ensure height matches the viewport exactly for smooth sliding
                          className={`flex-shrink-0 flex flex-col justify-center u-surface p-8 dark:bg-white/5 ${PANEL_HEIGHT_CLASS}`}
                          style={{ height: detailViewportHeight || 'auto' }}
                        >
                          <div>
                            <p className="text-xs font-semibold tracking-wide text-neon-teal uppercase">
                              {tab.subtitle}
                            </p>
                            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-headings dark:text-white">
                              {tab.title}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-body-copy dark:text-slate-400">
                              {tab.description}
                            </p>
                            <ul className="mt-8 space-y-4">
                              {tab.bullets.map((b) => (
                                <li key={b} className="flex gap-3 items-start">
                                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-teal" aria-hidden="true" />
                                  <span className="text-sm text-body-copy dark:text-slate-300">
                                    {b}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Right: Sticky Visual */}
                <div className="col-span-7 flex flex-col justify-center">
                  <div className="relative h-[520px] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pillars[activeTab].key}
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // smooth cubic-bezier
                        className="absolute inset-0"
                      >
                        <img
                          src={pillars[activeTab].image}
                          alt={`${pillars[activeTab].title} preview`}
                          className="h-full w-full object-cover"
                        />
                        {/* Gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                        
                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md border border-white/20 shadow-lg">
                            <span className="flex items-center justify-center bg-neon-teal/20 rounded-full p-1">
                                {React.cloneElement(pillars[activeTab].icon as React.ReactElement, { size: 14, className: "text-neon-teal" })}
                            </span>
                            <span className="text-sm font-semibold text-white tracking-wide">
                              {pillars[activeTab].title}
                            </span>
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

        {/* --- MOBILE: Stacked Cards (Unchanged) --- */}
        <div className="lg:hidden mt-12">
          <div className="relative max-w-xl mx-auto space-y-4">
            {pillars.map((tab, idx) => (
              <div
                key={tab.key}
                className="sticky"
                style={{ 
                    top: 88 + idx * 10, 
                    zIndex: idx 
                }}
              >
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5">
                      {tab.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-headings dark:text-white">
                        {tab.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-neon-teal">
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-body-copy dark:text-slate-400">
                    {tab.description}
                  </p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20">
                    <img src={tab.image} alt="" className="h-48 w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
            {/* Spacer to allow last card to be fully viewed on mobile */}
            <div className="h-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePillars;