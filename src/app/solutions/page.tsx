import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import Link from 'next/link';

import { SOLUTIONS_PAGES } from '@/lib/solutionsData';

export default function SolutionsPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Solutions"
          subtitle="UNOBITS adapts to how you work — startups, agencies, industries, and teams of any size."
          breadcrumbs={[{ name: 'Solutions', href: '/solutions' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-headings dark:text-white">
                  Build your business on one connected operating system
                </h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">
                  No matter your industry or team size, the goal stays the same: stop running your business across 12 tools and
                  keep communication, execution, and client context in one place.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free
                </OpenSignupButton>
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Explore modules
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {SOLUTIONS_PAGES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-slate-800 dark:bg-slate-900"
                >
                  <h3 className="text-2xl font-bold text-headings group-hover:text-neon-teal dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-body-copy dark:text-slate-400">{s.subtitle}</p>
                  <p className="mt-4 text-sm text-body-copy dark:text-slate-400 line-clamp-3">{s.summary}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-neon-teal">
                    View solution <span className="ml-2">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Not sure where to start?</h2>
                <p className="mt-4 text-gray-300">
                  Start with the core platform: communication + projects + a shared source of truth. Add CRM, portals, automation,
                  and Digital Twin features as your business grows.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    View pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Talk to support
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
