import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import FaqSection from '@/components/common/FaqSection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'How to replace 10 business subscriptions',
  description:
    'A practical guide to replace 10+ business subscriptions with one connected operating system — without breaking your workflows.',
  path: '/replace-10-business-subscriptions',
  keywords: [
    'replace 10 business subscriptions',
    'subscription fatigue',
    'tab overload',
    'one app for business',
    'all-in-one business software',
    'business operating system',
  ],
});

const faq = [
  {
    q: 'What “10 subscriptions” are we talking about?',
    a: 'A typical stack includes: CRM, email marketing, shared inbox/helpdesk, project management, docs, chat, calendar, time tracking, file storage, and reporting dashboards.',
  },
  {
    q: 'Should I migrate everything at once?',
    a: 'No. Replace one workflow first (inbox + CRM + onboarding is common), then expand to projects, portals, and reporting. Progressive migration reduces risk and resistance.',
  },
  {
    q: 'How do I avoid losing data?',
    a: 'Export and import in phases. Start with contacts and pipeline, then move active projects. Keep read-only access to legacy tools during the transition window.',
  },
];

export default function Replace10SubscriptionsPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Replace 10 business subscriptions"
          subtitle="Most teams don’t need more tools — they need fewer, better-connected workflows. Here’s a realistic migration plan that reduces risk and keeps the team moving."
          breadcrumbs={[{ name: 'Replace 10 subscriptions', href: '/replace-10-business-subscriptions' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <h2 className="text-2xl font-bold text-headings dark:text-white">The “stack” most teams end up with</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  If you’re paying for a dozen tools, you’re not alone. The problem is that each app owns a piece of context — and
                  your team becomes the integration.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'CRM',
                  'Shared Inbox / Helpdesk',
                  'Project Management',
                  'Docs & Notes',
                  'Team Chat',
                  'Calendar',
                  'Time Tracking',
                  'File Storage',
                  'Automations',
                  'Reporting / BI',
                ].map((tool) => (
                  <div key={tool} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-headings dark:border-white/10 dark:bg-white/5 dark:text-white">
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                Start free trial
              </OpenSignupButton>
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Explore modules
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {[
                {
                  title: 'Phase 1 — Unify conversations + CRM',
                  body: 'Start where context is most fragile: shared inbox + CRM. Link threads to customer records and standardize follow-ups.',
                  links: [
                    { label: 'Shared Inbox', href: '/product/inbox' },
                    { label: 'CRM', href: '/product/crm' },
                    { label: 'Sequences', href: '/product/sequences' },
                  ],
                },
                {
                  title: 'Phase 2 — Standardize onboarding + delivery',
                  body: 'Use templates for onboarding and delivery so hand-offs are predictable. Give clients a portal instead of long email chains.',
                  links: [
                    { label: 'Onboarding', href: '/product/onboarding' },
                    { label: 'Projects', href: '/product/projects' },
                    { label: 'Client Portal', href: '/product/client-portal' },
                  ],
                },
                {
                  title: 'Phase 3 — Automate + report',
                  body: 'Once workflows are clear, automate routing and reminders, then use reporting to keep leadership visibility high.',
                  links: [
                    { label: 'Automations', href: '/product/automations' },
                    { label: 'Reports', href: '/product/reports' },
                    { label: 'Dashboard', href: '/product/dashboard' },
                  ],
                },
              ].map((card) => (
                <div key={card.title} className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
                  <h3 className="text-xl font-bold text-headings dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-body-copy dark:text-slate-400">{card.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Want the fastest path? Start with a template.</h2>
                <p className="mt-4 text-gray-300">
                  Templates remove uncertainty. Preview a complete “agency” or “startup” workspace before you sign up — then apply it in one click.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/templates"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Browse templates
                  </Link>
                  <Link
                    href="/tab-overload"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Learn about tab overload
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection title="Replacing subscriptions FAQ" items={faq} />
      </main>
      <Footer />
    </div>
  );
}
