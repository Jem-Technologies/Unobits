import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import FaqSection from '@/components/common/FaqSection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Tab overload',
  description:
    'Stop running your business across 20 tabs. Learn how to reduce subscription fatigue and replace tool sprawl with one connected operating system.',
  path: '/tab-overload',
  keywords: [
    'tab overload',
    'subscription fatigue',
    'tool sprawl',
    'stop using so many apps',
    'replace business subscriptions',
    'all-in-one business software',
    'business operating system',
  ],
});

const faq = [
  {
    q: 'What is “tab overload”?',
    a: 'Tab overload is what happens when your day-to-day work is split across too many apps and browser tabs. Context gets lost between tools, decisions get repeated, and simple work becomes slow and stressful.',
  },
  {
    q: 'Is an “all-in-one” app realistic for real businesses?',
    a: 'Yes — as long as the platform is built as a connected operating system (shared data model + workflow) rather than a pile of disconnected mini-apps. Start with one workflow, then expand.',
  },
  {
    q: 'How do I reduce my subscriptions without breaking workflows?',
    a: 'Migrate progressively: pick a single workflow (for example shared inbox + CRM + onboarding). Standardize it with templates, then move adjacent work (projects, portals, reporting) once the core flow is stable.',
  },
  {
    q: 'Why does mobile-first matter for founders?',
    a: 'Many founders operate from their phone most of the day. A mobile-first OS lets you triage the inbox, move deals, approve work, and unblock the team without needing a laptop.',
  },
];

export default function TabOverloadPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Kill tab overload"
          subtitle="If you’re juggling 10+ tools, you’re not “busy” — you’re context-switching. Here’s a practical path to reduce subscription fatigue and run everything in one connected OS."
          breadcrumbs={[{ name: 'Tab Overload', href: '/tab-overload' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <h2 className="text-2xl font-bold text-headings dark:text-white">The real cost of too many tabs</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Tool sprawl quietly taxes every team: duplicated data, repeated conversations, and constant “where is that
                  again?” moments.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Lost context',
                    body: 'Customer conversations live in one app while delivery work lives in another — so teams miss details and repeat questions.',
                  },
                  {
                    title: 'Broken hand-offs',
                    body: 'Sales → onboarding → delivery becomes a copy/paste relay that creates errors and delays.',
                  },
                  {
                    title: 'Subscription fatigue',
                    body: 'Costs are spread across tools, add-ons, and seat-based pricing until you’re paying for chaos.',
                  },
                  {
                    title: 'Founder bottlenecks',
                    body: 'When work is fragmented, founders become the glue — answering questions and chasing updates.',
                  },
                ].map((card) => (
                  <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-lg font-semibold text-headings dark:text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-body-copy dark:text-slate-300">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                Start free trial
              </OpenSignupButton>
              <Link
                href="/templates"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Preview templates
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-headings dark:text-white">A simple 5‑step plan</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Don’t try to replace everything overnight. Replace <span className="font-semibold">workflows</span>, not apps.
                </p>
              </div>

              <div className="lg:w-2/3 space-y-5">
                {[
                  {
                    title: '1) Map your “core loop”',
                    body: 'What’s the repeating loop that makes you money? (Lead → close → onboard → deliver → renew.)',
                  },
                  {
                    title: '2) Pick the workflow with the most context loss',
                    body: 'Usually it’s where conversations and delivery split (shared inbox ↔ CRM ↔ projects).',
                  },
                  {
                    title: '3) Standardize it with templates',
                    body: 'Templates eliminate “reinventing” and make switching painless for the team.',
                  },
                  {
                    title: '4) Migrate progressively',
                    body: 'Start with one team or one client segment. Once stable, move adjacent workflows.',
                  },
                  {
                    title: '5) Add automation last',
                    body: 'Automations work best when the workflow is already clear — then you remove busywork safely.',
                  },
                ].map((step) => (
                  <div key={step.title} className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
                    <h3 className="text-xl font-bold text-headings dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-body-copy dark:text-slate-400">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">UNOBITS is built for the “one tab” workflow</h2>
                <p className="mt-4 text-gray-300">
                  UNOBITS connects CRM, shared inbox, projects, docs, chat, portals, automation, and reporting — so every message,
                  task, and file stays attached to the customer and the work.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: 'Replace 10 subscriptions', href: '/replace-10-business-subscriptions' },
                    { label: 'One app for CRM + shared inbox', href: '/one-app-for-crm-and-shared-inbox' },
                    { label: 'Alternatives to big tools', href: '/alternatives' },
                    { label: 'Explore modules', href: '/product' },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                    Start free trial
                  </OpenSignupButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Talk to support
                  </Link>
                </div>

                <p className="mt-4 text-xs text-white/60">
                  Pro tip: many teams start with <span className="font-semibold">Inbox + CRM + Onboarding</span>, then expand into projects, portals, and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection title="Tab overload FAQ" items={faq} />
      </main>
      <Footer />
    </div>
  );
}
