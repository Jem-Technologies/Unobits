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

    const delay = isDoneTyping ? 1200 : isDoneErasing ? 200 : speed;

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
  videoSrc: string;
  posterSrc: string;
  cropTop?: string;
  cropBottom?: string;
  topCard: { title: string; body: string };
  bottomCard: { title: string; body: string };
};

function ShowcaseVideo({
  src,
  poster,
  className,
  objectPosition = '50% 50%',
}: {
  src: string;
  poster?: string;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <video
      className={`h-full w-full object-cover pointer-events-none select-none ${className ?? ''}`}
      style={{ objectPosition }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      disablePictureInPicture
      controls={false}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
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
        videoSrc: '/demos/projects.mp4',
        posterSrc: '/demos/projects.jpg',
        cropTop: '18% 18%',
        cropBottom: '82% 78%',
        topCard: { title: 'Project Updated', body: "'Q4 Launch Plan' moved to 'Done'" },
        bottomCard: { title: 'Share projects with externals', body: 'Invite clients • Comments • Approvals' },
      },
      {
        key: 'chat',
        label: 'Chat',
        videoSrc: '/demos/chat.mp4',
        posterSrc: '/demos/chat.jpg',
        cropTop: '20% 20%',
        cropBottom: '78% 74%',
        topCard: { title: 'New message → task', body: 'Turn decisions into action in one click' },
        bottomCard: { title: 'Context stays attached', body: 'Messages ↔ docs ↔ projects ↔ CRM' },
      },
      {
        key: 'crm',
        label: 'CRM',
        videoSrc: '/demos/crm.mp4',
        posterSrc: '/demos/crm.jpg',
        cropTop: '22% 20%',
        cropBottom: '78% 76%',
        topCard: { title: 'Deal advanced', body: "Acme Co moved to 'Proposal'" },
        bottomCard: { title: 'Automations running', body: 'Follow‑up scheduled • Handoff created' },
      },
      {
        key: 'inbox',
        label: 'Inbox',
        videoSrc: '/demos/inbox.mp4',
        posterSrc: '/demos/inbox.jpg',
        cropTop: '20% 18%',
        cropBottom: '80% 78%',
        topCard: { title: 'Ticket Assigned', body: "'Refund request' → Support" },
        bottomCard: { title: 'SLA protected', body: 'Priority flagged • Timer running' },
      },
      {
        key: 'finance',
        label: 'Finance',
        videoSrc: '/demos/finance.mp4',
        posterSrc: '/demos/finance.jpg',
        cropTop: '20% 20%',
        cropBottom: '78% 78%',
        topCard: { title: 'Invoice Paid', body: 'Payment received • Receipt sent' },
        bottomCard: { title: 'Cashflow updated', body: 'Forecast refreshed • Alerts enabled' },
      },
      {
        key: 'docs',
        label: 'Docs',
        videoSrc: '/demos/docs.mp4',
        posterSrc: '/demos/docs.jpg',
        cropTop: '20% 20%',
        cropBottom: '82% 82%',
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
    <section className="relative overflow-hidden bg-white dark:bg-black text-center pt-32 pb-20 md:pt-52 md:pb-32 px-4 flex flex-col items-center">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[100%] md:h-[100%] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.12)_0%,_rgba(0,212,255,0)_54%)]" />
      </div>

      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-headings dark:text-white tracking-tight max-w-4xl">
          The All‑in‑One Operating System for Your Business.
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-md md:text-lg text-body-copy dark:text-slate-400">
          UNOBITS replaces app sprawl with one connected workspace: CRM, email, shared inbox, projects, docs, chat,
          automations, finance, portals, and reporting built to scale for any industry and data size.
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

        <div className="mt-6">
          <p className="text-sm text-body-copy dark:text-slate-500">
            Built for{' '}
            <span className="inline-flex items-center gap-1 font-semibold text-headings dark:text-white">
              <span className="text-neon-teal">{typedText}</span>
              <span className="text-neon-teal/70" aria-hidden="true">
                {cursor ? '|' : ' '}
              </span>
            </span>{' '}
            who are done with{' '}
            <Link href="/tab-overload" className="font-semibold text-neon-teal hover:underline">
              tab overload
            </Link>.
          </p>
        </div>
      </div>

      {/* Workspace showcase */}
      <div className="relative mt-20 w-full flex justify-center" style={{ perspective: '2000px' }}>
        <motion.div
          className="relative w-full max-w-5xl h-80 md:h-[480px] bg-slate-200 dark:bg-slate-800/50 rounded-2xl border border-slate-200/70 dark:border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 50, rotateX: 18, rotateZ: 4 }}
          animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
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
                  <ShowcaseVideo src={scene.videoSrc} poster={scene.posterSrc} />
                </motion.div>

                {/* Soft vignette for readability + depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35 pointer-events-none" />

                <div className="absolute left-6 bottom-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur-md border border-white/15">
                    <span className="h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span className="text-sm font-semibold">{scene.label}</span>
                    <span className="text-xs text-white/70">— recorded workspace flow</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${scene.key}-top`}
              className="absolute -top-8 -left-10 md:-left-14 w-56 md:w-60 rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/20 shadow-2xl text-left"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <ShowcaseVideo
                src={scene.videoSrc}
                poster={scene.posterSrc}
                className="absolute inset-0 scale-[1.35]"
                objectPosition={scene.cropTop ?? '20% 20%'}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10 dark:from-black/80 dark:via-black/45 pointer-events-none" />
              <div className="relative p-4">
                <p className="text-sm font-semibold text-white">{scene.topCard.title}</p>
                <p className="mt-1 text-xs text-white/80">{scene.topCard.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${scene.key}-bottom`}
              className="absolute -bottom-10 -right-10 md:-right-14 w-64 md:w-72 rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/20 shadow-2xl text-left"
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <ShowcaseVideo
                src={scene.videoSrc}
                poster={scene.posterSrc}
                className="absolute inset-0 scale-[1.35]"
                objectPosition={scene.cropBottom ?? '80% 80%'}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10 dark:from-black/80 dark:via-black/45 pointer-events-none" />
              <div className="relative p-4">
                <p className="text-sm font-semibold text-white">{scene.bottomCard.title}</p>
                <p className="mt-1 text-xs text-white/80">{scene.bottomCard.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
