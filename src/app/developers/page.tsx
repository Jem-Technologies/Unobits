import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

const sections = [
  {
    title: 'API-first building blocks',
    description:
      'Interact with the core objects that power the UNOBITS OS: Clients, Projects, Boards, Tasks, Messages, and Files.',
    bullets: ['Read & write core objects', 'Bulk import/export workflows', 'Permission-scoped access'],
  },
  {
    title: 'Webhooks',
    description:
      'Receive real-time events when work changes so your internal systems stay in sync.',
    bullets: ['Project/task updates', 'CRM lifecycle changes', 'Portal submissions & approvals'],
  },
  {
    title: 'Automation-friendly design',
    description:
      'UNOBITS automations and external integrations use the same event model so workflows remain predictable.',
    bullets: ['Event triggers with filters', 'Custom actions via webhooks', 'Retry-aware delivery patterns'],
  },
];

export default function DevelopersPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Developers"
          subtitle="Build on the UNOBITS OS with APIs and webhooks—connect internal systems without creating a new tab jungle."
          breadcrumbs={[{ name: 'Developers', href: '/developers' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-headings dark:text-white">Build integrations the right way</h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">
                  Keep execution and collaboration inside UNOBITS. Use the API and webhooks for sync, signals, and specialized workflows.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free
                </OpenSignupButton>
                <Link
                  href="/integrations"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  View integrations
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {sections.map((s) => (
                <div
                  key={s.title}
                  className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian"
                >
                  <h3 className="text-xl font-bold text-headings dark:text-white">{s.title}</h3>
                  <p className="mt-3 text-body-copy dark:text-slate-400">{s.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-body-copy dark:text-slate-400">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-x-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-neon-teal" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Need an integration roadmap?</h2>
                <p className="mt-4 text-gray-300">
                  If you’re planning a bigger rollout, our Custom plan includes architecture help for data models, portal workflows, and external system syncing.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    View plans
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
