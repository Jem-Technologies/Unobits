import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import { buildMetadata } from '@/lib/seo';
import { ALTERNATIVES_PAGES } from '@/lib/alternativesData';

export const metadata = buildMetadata({
  title: 'Alternatives to big business tools',
  description:
    'Comparison pages for teams searching for alternatives to incumbents. See how UNOBITS reduces tab overload with one connected operating system.',
  path: '/alternatives',
  keywords: [
    'alternatives',
    'Zoho alternative',
    'Odoo alternative',
    'HubSpot alternative',
    'Salesforce alternative',
    'ClickUp alternative',
    'Notion alternative',
    'subscription fatigue',
    'tab overload',
  ],
});

export default function AlternativesHubPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Alternatives to the incumbents"
          subtitle="When you’re frustrated with big suites and endless add-ons, you search for alternatives. These pages help you compare at a high level — and see how UNOBITS reduces tab overload with one connected OS."
          breadcrumbs={[{ name: 'Alternatives', href: '/alternatives' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-headings dark:text-white">Compare based on workflows (not buzzwords)</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  The goal isn’t to “win” a feature checklist — it’s to run your business with fewer tools, fewer hand-offs, and less
                  context switching.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free trial
                </OpenSignupButton>
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Preview templates
                </Link>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              Competitor names are trademarks of their respective owners. These comparisons are informational and UNOBITS is not affiliated with them.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-headings dark:text-white">Popular comparison pages</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Built around common searches like “{`alternative to Zoho`}`” or “{`best Odoo alternative for startups`}`”.
                </p>
              </div>
              <Link
                href="/tab-overload"
                className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Learn about tab overload
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ALTERNATIVES_PAGES.map((p) => (
                <Link
                  key={p.slug}
                  href={`/alternatives/${p.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-obsidian"
                >
                  <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">Alternative to {p.competitorName}</p>
                  <h3 className="mt-2 text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-body-copy dark:text-slate-400 line-clamp-3">{p.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Want the fastest way to evaluate?</h2>
                <p className="mt-4 text-gray-300">
                  Start with a template that matches your business model. If the workflow makes sense in UNOBITS, the rest of the OS will feel natural.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/templates"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Browse templates
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Ask a migration question
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
