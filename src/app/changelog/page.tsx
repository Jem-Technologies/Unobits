import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

const entries = [
  {
    version: '1.0.0',
    date: '2025-12-26',
    highlights: [
      'Unified platform marketing site launch.',
      'Product modules: dashboard, communication, workspace, automations, productivity, CRM, portals, and Digital Twin.',
      'Pricing with Free, Basic, Pro, and Custom plans.',
    ],
  },
  {
    version: 'Next',
    date: 'Coming soon',
    highlights: [
      'Social media integrations (incoming feature).',
      'Expanded external collaboration experience with real-time boards.',
      'More reporting templates and automated sequences.',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Changelog"
          subtitle="Product updates, improvements, and what’s coming next."
          breadcrumbs={[{ name: 'Changelog', href: '/changelog' }]}
        />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="space-y-10">
              {entries.map((e) => (
                <article key={e.version} className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h2 className="text-xl font-bold text-headings dark:text-white">Version {e.version}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{e.date}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-body-copy dark:text-slate-300">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                Start free
              </OpenSignupButton>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Read guides
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Request a feature
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20" />
      </main>
      <Footer />
    </div>
  );
}
