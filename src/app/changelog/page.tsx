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
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Changelog"
          subtitle="Product updates, improvements, and what’s coming next."
          breadcrumbs={[{ name: 'Changelog', href: '/changelog' }]}
        />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="space-y-10">
              {entries.map((e) => (
                <article key={e.version} className="u-surface-soft p-6">
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
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Read guides
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Request a feature
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="u-surface p-6">
                <h3 className="text-lg font-bold text-headings dark:text-white">Release quality</h3>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  We ship improvements in small, composable increments to keep the platform fast, stable, and predictable.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Backwards-compatible UI improvements.</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Performance and accessibility as default.</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Clear release notes and migration guidance when needed.</span></li>
                </ul>
              </div>

              <div className="u-surface p-6">
                <h3 className="text-lg font-bold text-headings dark:text-white">Security-first</h3>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Updates prioritize privacy, security, and reliability—especially for teams running mission-critical workflows.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Responsible disclosure and rapid patching.</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Audit-friendly change tracking.</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Transparent operational status updates.</span></li>
                </ul>
              </div>

              <div className="u-surface p-6">
                <h3 className="text-lg font-bold text-headings dark:text-white">Feedback loops</h3>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  The best roadmap comes from real teams. We continuously refine flows based on what’s slow, noisy, or hard to automate.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Feature requests tied to workflows.</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>UX fixes prioritized from friction points.</span></li>
                  <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" /><span>Docs and templates updated alongside shipping.</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Tell us what should ship next</h2>
                <p className="mt-4 text-gray-300">
                  Whether it’s an integration, a portal flow, or a Digital Twin capability—send your workflow and we’ll map it to the roadmap.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Request a feature
                  </Link>
                  <Link
                    href="/status"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    System status
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
