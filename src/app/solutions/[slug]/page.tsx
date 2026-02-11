import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

import { SOLUTION_SLUGS, getSolutionPage } from '@/lib/solutionsData';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export async function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getSolutionPage(params.slug);

  if (!page) {
    return buildMetadata({
      title: 'Solutions',
      description: 'Explore how UNOBITS replaces tool sprawl with a single operating system for work.',
      path: `/solutions/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: page.title,
    description: page.summary || page.subtitle,
    path: `/solutions/${page.slug}`,
    keywords: ['UNOBITS', 'solutions', 'tab overload', 'subscription fatigue', page.title],
  });
}


export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) notFound();

  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title={page.title}
          subtitle={page.subtitle}
          breadcrumbs={[
            { name: 'Solutions', href: '/solutions' },
            { name: page.title, href: `/solutions/${page.slug}` },
          ]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-body-copy dark:text-slate-400 max-w-3xl">{page.summary}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free
                </OpenSignupButton>
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Explore modules
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {page.sections.map((s) => (
                <div
                  key={s.title}
                  className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian"
                >
                  <h2 className="text-xl font-bold text-headings dark:text-white">{s.title}</h2>
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
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-headings dark:text-white">Recommended modules</h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">A starting set that fits this solution.</p>
              </div>
              <Link
                href="/product"
                className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                View all modules
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.recommendedModules.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-obsidian"
                >
                  <h3 className="text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-body-copy dark:text-slate-400">{m.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Replace the stack. Keep the momentum.</h2>
                <p className="mt-4 text-gray-300">
                  UNOBITS is designed to reduce tool sprawl. Start with a free trial, then standardize workflows across communication, delivery, and growth.
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
