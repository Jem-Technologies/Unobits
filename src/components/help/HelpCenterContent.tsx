'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import { SUPPORT_EMAIL, SUPPORT_PHONE } from '@/lib/siteConfig';

type FAQ = { question: string; answer: string };
type Category = { title: string; description: string; faqs: FAQ[] };

const CATEGORIES: Category[] = [
  {
    title: 'Getting started',
    description: 'Core setup and first workflows.',
    faqs: [
      {
        question: 'What is UNOBITS?',
        answer:
          'UNOBITS is a connected operating system for work. It brings communication, projects, productivity, CRM, and reporting into one place so your team stops switching tools and losing context.',
      },
      {
        question: 'How should a new team start?',
        answer:
          'Start with the core: Dashboard, Communication (Inbox/Chat/Email), and Projects. Once the team is aligned and shipping, layer in CRM, Automations, and Portals.',
      },
      {
        question: 'Do I need to migrate everything on day one?',
        answer:
          'No. Many teams adopt UNOBITS in phases. Keep execution and collaboration inside UNOBITS first, then connect or migrate adjacent tools over time using integrations and exports.',
      },
    ],
  },
  {
    title: 'Plans & billing',
    description: 'Basic, Pro, Enterprise, and Custom.',
    faqs: [
      {
        question: 'What plans do you offer?',
        answer:
          'UNOBITS offers Basic, Pro, Enterprise, and Custom plans — and every plan starts with a free trial. Custom is designed for teams that need dedicated rollout support and bespoke workflows.',
      },
      {
        question: 'How do I talk to someone about Custom?',
        answer:
          `Call support at ${SUPPORT_PHONE} or email ${SUPPORT_EMAIL}. We’ll help scope your rollout, security requirements, and integration needs.`,
      },
    ],
  },
  {
    title: 'Integrations',
    description: 'Connect what you need without tab overload.',
    faqs: [
      {
        question: 'Do you support social media integrations?',
        answer:
          'Social media integrations are an incoming feature. We’re building connectors that bring social signals into UNOBITS so teams can route messages, create tasks, and track outcomes from one place.',
      },
      {
        question: 'Can we build our own integrations?',
        answer:
          'Yes. Use webhooks and the developer API to connect internal tools and data. Custom plans can include integration design support.',
      },
    ],
  },
  {
    title: 'Security & access',
    description: 'Controls, privacy, and governance.',
    faqs: [
      {
        question: 'Where can I find your security information?',
        answer:
          'Visit the Security page for an overview of controls, policies, and how to request a security review.',
      },
      {
        question: 'Can clients access only what they need?',
        answer:
          'Yes. Client Portal access is separated from internal Team Portal access, with permissions designed to scope what each user can view or edit.',
      },
    ],
  },
  {
    title: 'Portals',
    description: 'Client-facing and internal portals.',
    faqs: [
      {
        question: 'What is the Client Portal used for?',
        answer:
          'The Client Portal is a clean, secure way for clients to see status, approve deliverables, share files, and submit requests without long email threads.',
      },
      {
        question: 'What is the Team Portal?',
        answer:
          'The Team Portal is your internal hub for execution — projects, communication, docs, and reporting with role-based visibility for teams and leadership.',
      },
    ],
  },
];

export default function HelpCenterContent() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.map((c) => {
      const faqs = c.faqs.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      );
      return { ...c, faqs };
    }).filter((c) => c.faqs.length > 0);
  }, [query]);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-headings dark:text-white">Search help articles</h2>
              <p className="mt-2 text-body-copy dark:text-slate-400">
                Type a keyword (billing, portal, integrations, onboarding…)
              </p>
            </div>
            <div className="w-full md:w-96">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-white/10 dark:bg-obsidian dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {results.map((cat) => (
            <div
              key={cat.title}
              className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian"
            >
              <h3 className="text-xl font-bold text-headings dark:text-white">{cat.title}</h3>
              <p className="mt-2 text-body-copy dark:text-slate-400">{cat.description}</p>

              <div className="mt-6 divide-y divide-slate-200 dark:divide-slate-800">
                {cat.faqs.map((faq) => {
                  const key = `${cat.title}:${faq.question}`;
                  const isOpen = open === key;
                  return (
                    <div key={key} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="flex w-full items-start justify-between gap-6 text-left"
                      >
                        <span className="text-sm font-semibold text-headings dark:text-white">{faq.question}</span>
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-400">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && <p className="mt-3 text-sm text-body-copy dark:text-slate-400">{faq.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-obsidian px-6 py-12 sm:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Need help from a human?</h2>
            <p className="mt-4 text-gray-300">
              Call <span className="font-semibold">{SUPPORT_PHONE}</span> or email{' '}
              <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              Custom plans include dedicated rollout support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
              >
                Contact support
              </Link>
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Start free
              </OpenSignupButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
