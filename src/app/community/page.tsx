import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

import { SUPPORT_EMAIL } from '@/lib/siteConfig';

const highlights = [
  {
    title: 'Workflows and templates',
    description: 'Copy proven setups for agencies, startups, and client delivery.',
  },
  {
    title: 'Early access features',
    description: 'Get access to upcoming capabilities—like social media integrations—first.',
  },
  {
    title: 'Office hours',
    description: 'Join live sessions to optimize your OS and reduce tool switching.',
  },
];

export default function CommunityPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Community"
          subtitle="Templates, best practices, and early access updates from the UNOBITS ecosystem."
          breadcrumbs={[{ name: 'Community', href: '/community' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title} className="u-surface-soft p-6">
                  <h3 className="text-lg font-bold text-headings dark:text-white">{h.title}</h3>
                  <p className="mt-2 text-body-copy dark:text-slate-400">{h.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                Start free
              </OpenSignupButton>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Community access')}`}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Request an invite
              </a>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Read guides
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Community forum and public templates library are expanding—more content is added continuously.
            </p>
          </div>
        </section>

        <section className="py-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="u-surface p-8">
                <h2 className="text-2xl font-bold text-headings dark:text-white">Community playbooks</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Practical templates, checklists, and workflows that help teams consolidate tools and stay in flow.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="u-surface-soft p-5">
                    <h3 className="text-base font-semibold text-headings dark:text-white">Agency delivery</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Client portals, approvals, timelines, and reporting.</p>
                  </div>
                  <div className="u-surface-soft p-5">
                    <h3 className="text-base font-semibold text-headings dark:text-white">Startup ops</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Docs, projects, CRM, and automations in one workspace.</p>
                  </div>
                  <div className="u-surface-soft p-5">
                    <h3 className="text-base font-semibold text-headings dark:text-white">Client success</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Onboarding sequences, renewal touchpoints, and dashboards.</p>
                  </div>
                  <div className="u-surface-soft p-5">
                    <h3 className="text-base font-semibold text-headings dark:text-white">Sales systems</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Pipelines, tasks, follow-ups, and deal intelligence.</p>
                  </div>
                </div>
              </div>

              <div className="u-surface p-8">
                <h2 className="text-2xl font-bold text-headings dark:text-white">Early access & feedback</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Help shape what ships next. Community members get previews of upcoming capabilities and share feedback that improves the product.
                </p>
                <ul className="mt-6 space-y-3 text-body-copy dark:text-slate-400">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Roadmap previews and release notes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Office hours to optimize workflows and automations.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Integration requests prioritized from real usage.</span>
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl bg-obsidian px-6 py-8">
                  <h3 className="text-lg font-bold text-white">Want an invite?</h3>
                  <p className="mt-2 text-gray-300">
                    Tell us what you build and we’ll make sure you get the right templates and updates.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Community access')}`}
                      className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                    >
                      Request invite
                    </a>
                    <Link
                      href="/changelog"
                      className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      See updates
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
              Community spaces and the templates library continue to expand. If you have a workflow you’d like to share, we’d love to feature it.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
