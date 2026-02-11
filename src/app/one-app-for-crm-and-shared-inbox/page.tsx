import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import FaqSection from '@/components/common/FaqSection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'One app for CRM and shared inbox',
  description:
    'Stop splitting customer context between tools. UNOBITS connects your shared inbox and CRM with projects, onboarding, automation, and reporting in one operating system.',
  path: '/one-app-for-crm-and-shared-inbox',
  keywords: [
    'one app for CRM and shared inbox',
    'shared inbox CRM',
    'subscription fatigue',
    'tab overload',
    'customer lifecycle software',
    'all-in-one business software',
  ],
});

const faq = [
  {
    q: 'Why combine CRM and shared inbox?',
    a: 'Because every customer conversation is part of the customer record. When inbox and CRM are separate, teams lose context, duplicate work, and miss important details during hand-offs.',
  },
  {
    q: 'Can UNOBITS handle both sales and support workflows?',
    a: 'Yes. Use the shared inbox for routing and SLAs, and the CRM for pipeline and customer history. Both stay connected to projects, onboarding, files, and reporting.',
  },
  {
    q: 'What’s the best first workflow to set up?',
    a: 'Start with: shared inbox → link threads to CRM records → create onboarding project templates → give clients a portal. That single loop eliminates most of the copy/paste.',
  },
];

export default function OneAppCrmInboxPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="One app for CRM and shared inbox"
          subtitle="When your inbox and CRM are disconnected, your team becomes the integration. UNOBITS keeps every message, task, and file attached to the customer — and the work."
          breadcrumbs={[{ name: 'CRM + Shared Inbox', href: '/one-app-for-crm-and-shared-inbox' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl font-bold text-headings dark:text-white">The problem</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Sales closes a deal, then delivery asks the same questions again. Support can’t see what’s being delivered. Notes are scattered across tools.
                  This is how tab overload turns into customer churn.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-body-copy dark:text-slate-300">
                  {[
                    'Inbox threads aren’t linked to the customer record.',
                    'Tasks live somewhere else, so nothing is accountable.',
                    'Files and approvals get buried in email chains.',
                    'Leadership lacks visibility without building spreadsheets.',
                  ].map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neon-teal" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-bold text-headings dark:text-white">What “connected” looks like</h3>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  UNOBITS treats CRM and shared inbox as two views of the same customer lifecycle — then connects onboarding, projects, portals, and reporting.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { title: 'Inbox routing', body: 'Assign threads, tag, set SLAs, and turn decisions into tasks.' },
                    { title: 'CRM timeline', body: 'Full history: messages, tasks, files, notes, and deals.' },
                    { title: 'Onboarding templates', body: 'Kickoff projects and checklists with one click.' },
                    { title: 'Client portal', body: 'Share status, files, requests, and approvals in one place.' },
                  ].map((c) => (
                    <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-black/20">
                      <p className="text-sm font-semibold text-headings dark:text-white">{c.title}</p>
                      <p className="mt-2 text-sm text-body-copy dark:text-slate-300">{c.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                    Start free trial
                  </OpenSignupButton>
                  <Link
                    href="/product/inbox"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                  >
                    Explore shared inbox
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-headings dark:text-white">Recommended modules</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  If you want CRM + shared inbox in one app, these are the next pieces that make it feel like a real operating system.
                </p>
              </div>
              <Link
                href="/product"
                className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                View all modules
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'CRM', href: '/product/crm', desc: 'Pipelines + customer timeline with full context.' },
                { title: 'Inbox', href: '/product/inbox', desc: 'Routing, assignments, and SLAs for shared inbox workflows.' },
                { title: 'Sequences', href: '/product/sequences', desc: 'Automated follow-ups that sync with replies and stages.' },
                { title: 'Onboarding', href: '/product/onboarding', desc: 'Repeatable onboarding flows and checklists.' },
                { title: 'Projects', href: '/product/projects', desc: 'Delivery workspaces connected to client records.' },
                { title: 'Client Portal', href: '/product/client-portal', desc: 'Client-facing status, files, approvals, and requests.' },
              ].map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-obsidian"
                >
                  <h3 className="text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">{m.title}</h3>
                  <p className="mt-2 text-sm text-body-copy dark:text-slate-400">{m.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection title="CRM + shared inbox FAQ" items={faq} />
      </main>
      <Footer />
    </div>
  );
}
