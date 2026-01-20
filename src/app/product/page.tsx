import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import Link from 'next/link';

import { PRODUCT_CATEGORIES } from '@/lib/productData';

export default function ProductLandingPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="The UNOBITS Platform"
          subtitle="Everything your team needs — communication, projects, CRM, productivity, reporting, portals, and automation — designed as one connected operating system."
          breadcrumbs={[{ name: 'Product', href: '/product' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-headings dark:text-white">One tab. One data model. One workflow.</h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">
                  UNOBITS is built to replace the “stack” with a single OS — so your team stops switching apps, copying context, and losing information between tools.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free trial
                </OpenSignupButton>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-headings dark:text-white">Explore every module</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  The platform map below mirrors what’s inside the app — each module gets its own page, so every link works and every feature has a home.
                </p>
              </div>
              <Link
                href="/solutions"
                className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                See solutions
              </Link>
            </div>

            <div className="mt-10 space-y-14">
              {PRODUCT_CATEGORIES.map(({ category, pages }) => (
                <div key={category}>
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-xl font-bold text-headings dark:text-white">{category}</h3>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{pages.length} modules</span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {pages.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/product/${p.slug}`}
                        className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-obsidian"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">
                              {p.title}
                            </h4>
                            <p className="mt-2 text-sm text-body-copy dark:text-slate-400">{p.subtitle}</p>
                          </div>
                          {p.comingSoon && (
                            <span className="mt-1 inline-flex shrink-0 items-center rounded-full bg-neon-teal/10 px-2.5 py-1 text-xs font-semibold text-neon-teal">
                              Coming soon
                            </span>
                          )}
                        </div>

                        <p className="mt-4 text-sm text-body-copy dark:text-slate-400 line-clamp-3">{p.summary}</p>
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
            <div className="rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Done juggling tools?</h2>
                <p className="mt-4 text-gray-300">
                  Replace tab overload with one connected OS. Start with a free trial, then scale into CRM, portals, automation, and Digital Twin features when you’re ready.
                </p>
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
