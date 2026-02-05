'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

function openSignup() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('unobits:open-signup'));
}

type TypewriterState = {
  text: string;
  cursor: boolean;
};

function useTypewriter(words: string[]): TypewriterState {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = window.setInterval(() => setCursor((c) => !c), 500);
    return () => window.clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const word = words[index] ?? '';
    const isDoneTyping = !isDeleting && text === word;
    const isDoneErasing = isDeleting && text.length === 0;

    const baseSpeed = isDeleting ? 40 : 55;
    const jitter = Math.floor(Math.random() * 20);
    const speed = baseSpeed + jitter;

    const delay = isDoneTyping ? 900 : isDoneErasing ? 200 : speed;

    const timeout = window.setTimeout(() => {
      if (isDoneTyping) {
        setIsDeleting(true);
        return;
      }

      if (isDoneErasing) {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }

      const next = isDeleting ? word.slice(0, Math.max(0, text.length - 1)) : word.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [index, isDeleting, text, words]);

  return { text, cursor };
}

type DemoScene = {
  key: string;
  label: string;
  topCard: { title: string; body: string };
  bottomCard: { title: string; body: string };
};

function DemoScreen({ sceneKey }: { sceneKey: DemoScene['key'] }) {
  const commonPanel = 'bg-slate-900/5 dark:bg-white/10 rounded-2xl';
  const commonLine = 'bg-slate-900/5 dark:bg-white/10 rounded-full';

  const topBar = (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-slate-400/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-slate-400/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-slate-400/50" />
      </div>
      <div className={`h-3 w-40 ${commonLine}`} />
      <div className={`h-8 w-8 ${commonPanel}`} />
    </div>
  );

  const base = (
    <div className="h-full w-full p-4">
      <div className={`h-full w-full rounded-[26px] bg-neon-teal/10 border border-slate-300/40 dark:border-white/10 overflow-hidden`}>
        {topBar}
        <div className="h-[calc(100%-52px)] px-4 pb-4">
          <div className="h-full grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <div className={`${commonPanel} h-full p-3 flex flex-col gap-3`}>
                <div className={`h-8 ${commonPanel}`} />
                <div className={`h-10 ${commonPanel}`} />
                <div className={`h-10 ${commonPanel}`} />
                <div className={`h-10 ${commonPanel}`} />
                <div className="mt-auto flex items-center gap-2">
                  <div className={`h-9 w-9 ${commonPanel}`} />
                  <div className={`h-3 flex-1 ${commonLine}`} />
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className={`${commonPanel} h-full p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-9 w-9 ${commonPanel}`} />
                    <div>
                      <div className={`h-3 w-32 ${commonLine}`} />
                      <div className={`mt-2 h-3 w-44 ${commonLine}`} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-8 w-24 ${commonPanel}`} />
                    <div className={`h-8 w-8 ${commonPanel}`} />
                  </div>
                </div>
                <div className="mt-4 h-[calc(100%-56px)]">
                  <div className="h-full grid grid-cols-12 gap-4">
                    <div className={`col-span-5 ${commonPanel}`} />
                    <div className={`col-span-7 ${commonPanel}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const projects = (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-[26px] bg-neon-teal/10 border border-slate-300/40 dark:border-white/10 overflow-hidden">
        {topBar}
        <div className="h-[calc(100%-52px)] px-4 pb-4">
          <div className={`${commonPanel} h-full p-4`}>
            <div className="flex items-center justify-between">
              <div>
                <div className={`h-3 w-40 ${commonLine}`} />
                <div className={`mt-2 h-3 w-60 ${commonLine}`} />
              </div>
              <div className="flex items-center gap-2">
                <div className={`h-9 w-24 ${commonPanel}`} />
                <div className={`h-9 w-9 ${commonPanel}`} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 h-[calc(100%-56px)]">
              {[0, 1, 2].map((col) => (
                <div key={col} className={`${commonPanel} p-3 flex flex-col gap-3`}>
                  <div className="flex items-center justify-between">
                    <div className={`h-3 w-20 ${commonLine}`} />
                    <div className={`h-6 w-6 ${commonPanel}`} />
                  </div>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={`${commonPanel} p-3`}>
                      <div className={`h-3 w-28 ${commonLine}`} />
                      <div className={`mt-2 h-3 w-20 ${commonLine}`} />
                      <div className="mt-3 flex gap-2">
                        <div className={`h-6 w-16 ${commonPanel}`} />
                        <div className={`h-6 w-10 ${commonPanel}`} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const chat = (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-[26px] bg-neon-teal/10 border border-slate-300/40 dark:border-white/10 overflow-hidden">
        {topBar}
        <div className="h-[calc(100%-52px)] px-4 pb-4">
          <div className="h-full grid grid-cols-12 gap-4">
            <div className={`${commonPanel} col-span-4 p-3 flex flex-col gap-3`}>
              <div className={`h-8 ${commonPanel}`} />
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`${commonPanel} p-3`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-8 w-8 ${commonPanel}`} />
                    <div className="flex-1">
                      <div className={`h-3 w-24 ${commonLine}`} />
                      <div className={`mt-2 h-3 w-32 ${commonLine}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${commonPanel} col-span-8 p-4 flex flex-col`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-9 w-9 ${commonPanel}`} />
                  <div>
                    <div className={`h-3 w-28 ${commonLine}`} />
                    <div className={`mt-2 h-3 w-40 ${commonLine}`} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className={`h-9 w-20 ${commonPanel}`} />
                  <div className={`h-9 w-9 ${commonPanel}`} />
                </div>
              </div>
              <div className="mt-4 flex-1 flex flex-col gap-3 overflow-hidden">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`max-w-[85%] ${commonPanel} p-3 ${i % 2 === 0 ? 'self-start' : 'self-end'}`}>
                    <div className={`h-3 w-44 ${commonLine}`} />
                    <div className={`mt-2 h-3 w-28 ${commonLine}`} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className={`h-10 flex-1 ${commonPanel}`} />
                <div className={`h-10 w-16 ${commonPanel}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const crm = (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-[26px] bg-neon-teal/10 border border-slate-300/40 dark:border-white/10 overflow-hidden">
        {topBar}
        <div className="h-[calc(100%-52px)] px-4 pb-4">
          <div className={`${commonPanel} h-full p-4`}>
            <div className="flex items-center justify-between">
              <div>
                <div className={`h-3 w-44 ${commonLine}`} />
                <div className={`mt-2 h-3 w-64 ${commonLine}`} />
              </div>
              <div className="flex gap-2">
                <div className={`h-9 w-24 ${commonPanel}`} />
                <div className={`h-9 w-9 ${commonPanel}`} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4 h-[calc(100%-56px)]">
              {[0, 1, 2, 3].map((col) => (
                <div key={col} className={`${commonPanel} p-3 flex flex-col gap-3`}>
                  <div className="flex items-center justify-between">
                    <div className={`h-3 w-16 ${commonLine}`} />
                    <div className={`h-6 w-6 ${commonPanel}`} />
                  </div>
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={`${commonPanel} p-3`}>
                      <div className={`h-3 w-20 ${commonLine}`} />
                      <div className={`mt-2 h-3 w-28 ${commonLine}`} />
                      <div className="mt-3 flex items-center justify-between">
                        <div className={`h-6 w-20 ${commonPanel}`} />
                        <div className={`h-6 w-6 ${commonPanel}`} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const finance = (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-[26px] bg-neon-teal/10 border border-slate-300/40 dark:border-white/10 overflow-hidden">
        {topBar}
        <div className="h-[calc(100%-52px)] px-4 pb-4">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className={`${commonPanel} col-span-4 p-4 flex flex-col gap-3`}>
              <div className={`h-3 w-28 ${commonLine}`} />
              <div className={`h-9 w-full ${commonPanel}`} />
              <div className={`h-9 w-full ${commonPanel}`} />
              <div className={`h-9 w-full ${commonPanel}`} />
              <div className="mt-auto">
                <div className={`h-3 w-24 ${commonLine}`} />
                <div className={`mt-2 h-24 w-full ${commonPanel}`} />
              </div>
            </div>
            <div className={`${commonPanel} col-span-8 p-4 flex flex-col`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className={`h-3 w-40 ${commonLine}`} />
                  <div className={`mt-2 h-3 w-56 ${commonLine}`} />
                </div>
                <div className="flex gap-2">
                  <div className={`h-9 w-20 ${commonPanel}`} />
                  <div className={`h-9 w-9 ${commonPanel}`} />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className={`${commonPanel} p-4`}>
                  <div className={`h-3 w-24 ${commonLine}`} />
                  <div className={`mt-3 h-10 w-full ${commonPanel}`} />
                </div>
                <div className={`${commonPanel} p-4`}>
                  <div className={`h-3 w-28 ${commonLine}`} />
                  <div className={`mt-3 h-10 w-full ${commonPanel}`} />
                </div>
              </div>
              <div className="mt-4 flex-1">
                <div className={`${commonPanel} h-full p-4 flex flex-col gap-3`}>
                  <div className={`h-3 w-24 ${commonLine}`} />
                  <div className="grid grid-cols-12 gap-2 items-end flex-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${commonPanel} col-span-1`}
                        style={{ height: `${30 + (i % 5) * 12}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const docs = (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-[26px] bg-neon-teal/10 border border-slate-300/40 dark:border-white/10 overflow-hidden">
        {topBar}
        <div className="h-[calc(100%-52px)] px-4 pb-4">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className={`${commonPanel} col-span-4 p-4 flex flex-col gap-3`}>
              <div className={`h-8 ${commonPanel}`} />
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`${commonPanel} h-10`} />
              ))}
              <div className="mt-auto">
                <div className={`h-3 w-28 ${commonLine}`} />
                <div className={`mt-2 h-10 ${commonPanel}`} />
              </div>
            </div>
            <div className={`${commonPanel} col-span-8 p-6`}>
              <div className={`h-4 w-56 ${commonLine}`} />
              <div className="mt-6 grid gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`h-3 ${i % 3 === 0 ? 'w-10/12' : i % 3 === 1 ? 'w-11/12' : 'w-9/12'} ${commonLine}`} />
                ))}
              </div>
              <div className="mt-8">
                <div className={`h-3 w-24 ${commonLine}`} />
                <div className={`mt-3 h-28 w-full ${commonPanel}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (sceneKey) {
    case 'projects':
      return projects;
    case 'chat':
      return chat;
    case 'crm':
      return crm;
    case 'finance':
      return finance;
    case 'docs':
      return docs;
    default:
      return base;
  }
}

const Hero = () => {
  const rotating = useMemo(
    () => ['businesses', 'startups', 'agencies', 'product teams', 'consultants', 'e‑commerce', 'enterprises'],
    []
  );
  const { text: typedText, cursor } = useTypewriter(rotating);

  const scenes = useMemo<DemoScene[]>(
    () => [
      {
        key: 'projects',
        label: 'Projects',
        topCard: { title: 'Project Updated', body: "'Q4 Launch Plan' moved to 'Done'" },
        bottomCard: { title: 'Share projects with externals', body: 'Invite clients • Comments • Approvals' },
      },
      {
        key: 'chat',
        label: 'Chat',
        topCard: { title: 'New message → task', body: 'Turn decisions into action in one click' },
        bottomCard: { title: 'Context stays attached', body: 'Messages ↔ docs ↔ projects ↔ CRM' },
      },
      {
        key: 'crm',
        label: 'CRM',
        topCard: { title: 'Deal advanced', body: "Acme Co moved to 'Proposal'" },
        bottomCard: { title: 'Automations running', body: 'Follow‑up scheduled • Handoff created' },
      },
      {
        key: 'inbox',
        label: 'Inbox',
        topCard: { title: 'Ticket Assigned', body: "'Refund request' → Support" },
        bottomCard: { title: 'SLA protected', body: 'Priority flagged • Timer running' },
      },
      {
        key: 'finance',
        label: 'Finance',
        topCard: { title: 'Invoice Paid', body: 'Payment received • Receipt sent' },
        bottomCard: { title: 'Cashflow updated', body: 'Forecast refreshed • Alerts enabled' },
      },
      {
        key: 'docs',
        label: 'Docs',
        topCard: { title: 'Policy approved', body: 'Changes signed off and tracked' },
        bottomCard: { title: 'Knowledge stays searchable', body: 'Docs, notes, and SOPs in one place' },
      },
    ],
    []
  );

  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = scenes[sceneIndex % scenes.length];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSceneIndex((i) => (i + 1) % scenes.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [scenes.length]);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-black text-center py-20 md:py-32 px-4 flex flex-col items-center">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[100%] md:h-[100%] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.12)_0%,_rgba(0,212,255,0)_54%)]" />
      </div>

      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-headings dark:text-white tracking-tight max-w-4xl">
          The All‑in‑One Operating System for Your Entire Business.
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-md md:text-lg text-body-copy dark:text-slate-400">
          UNOBITS replaces app sprawl with one connected workspace: CRM, email, shared inbox, projects, docs, chat,
          automations, finance, portals, and reporting — built to scale for any industry and data size.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={openSignup}
            className="w-full md:w-auto bg-neon-teal hover:bg-opacity-80 text-black px-7 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.03]"
          >
            <span>Get started</span>
            <ArrowRight size={20} />
          </button>
          <Link
            href="/product/ecosystem"
            className="w-full md:w-auto bg-slate-100 dark:bg-slate-800 text-headings dark:text-white px-7 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.03]"
          >
            <PlayCircle size={20} />
            <span>See the ecosystem</span>
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm text-body-copy dark:text-slate-500">
            Built for{' '}
            <span className="inline-flex items-center gap-1 font-semibold text-headings dark:text-white">
              <span className="text-neon-teal">{typedText}</span>
              <span className="text-neon-teal/70" aria-hidden="true">
                {cursor ? '|' : ' '}
              </span>
            </span>{' '}
            who are done with tab overload.
          </p>
        </div>
      </div>

      {/* Multiplayer showcase */}
      <div className="relative mt-20 w-full flex justify-center" style={{ perspective: '2000px' }}>
        <motion.div
          className="relative w-full max-w-5xl h-80 md:h-[480px] bg-slate-200 dark:bg-slate-800/50 rounded-[34px] border border-slate-300/50 dark:border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 50, rotateX: 18, rotateZ: 4 }}
          animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 rounded-[34px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.key}
                initial={{ opacity: 0, y: 10, scale: 0.995 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.995 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <motion.div
                  className="absolute inset-0 will-change-transform"
                  animate={{ translateY: ['-1.5%', '1.5%', '-1.5%'] }}
                  transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
                >
                  <DemoScreen sceneKey={scene.key} />
                </motion.div>
                <div className="absolute left-6 bottom-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur-md border border-white/15">
                    <span className="h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span className="text-sm font-semibold">{scene.label}</span>
                    <span className="text-xs text-white/70">— live workspace view</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${scene.key}-top`}
              className="absolute -top-8 -left-10 md:-left-14 w-56 md:w-60 rounded-3xl u-glass-strong border border-slate-200/70 dark:border-white/20 p-4 text-left"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <p className="text-sm font-semibold text-headings dark:text-white">{scene.topCard.title}</p>
              <p className="mt-1 text-xs text-body-copy dark:text-slate-300">{scene.topCard.body}</p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${scene.key}-bottom`}
              className="absolute -bottom-10 -right-10 md:-right-14 w-64 md:w-72 rounded-3xl u-glass-strong border border-slate-200/70 dark:border-white/20 p-4 text-left"
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <p className="text-sm font-semibold text-headings dark:text-white">{scene.bottomCard.title}</p>
              <p className="mt-1 text-xs text-body-copy dark:text-slate-300">{scene.bottomCard.body}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
