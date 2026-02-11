import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Status',
  description:
    'Service status and uptime updates for UNOBITS.',
  path: '/status',
  keywords: [
    'status',
    'uptime',
    'service health',
  ],
});


const components = [
  { name: 'Web app', status: 'Operational', detail: 'UI and dashboards' },
  { name: 'Real-time collaboration', status: 'Operational', detail: 'Live boards and presence' },
  { name: 'Messaging', status: 'Operational', detail: 'Inbox, chat, and notifications' },
  { name: 'Integrations', status: 'Operational', detail: 'Webhooks and automation connectors' },
];

const badgeClass = (s: string) =>
  s === 'Operational'
    ? 'inline-flex items-center rounded-full bg-neon-teal/10 px-3 py-1 text-xs font-semibold text-neon-teal'
    : 'inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300';

export default function StatusPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Status"
          subtitle="Current platform status and service health updates."
          breadcrumbs={[{ name: 'Status', href: '/status' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-headings dark:text-white">Platform components</h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">
                  This page is designed for static hosting. For live status, connect your monitoring provider and publish updates here.
                </p>
              </div>
              <Link
                href="/help-center"
                className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
              >
                Get support
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden u-surface shadow-sm dark:border-white/10 dark:bg-obsidian">
              <div className="divide-y divide-slate-200 dark:divide-white/10">
                {components.map((c) => (
                  <div key={c.name} className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-headings dark:text-white">{c.name}</p>
                      <p className="mt-1 text-sm text-body-copy dark:text-slate-400">{c.detail}</p>
                    </div>
                    <span className={badgeClass(c.status)}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Incident updates</h2>
                <p className="mt-4 text-gray-300">
                  Publish incident reports and maintenance windows here so customers have a single source of truth.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Read updates
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
