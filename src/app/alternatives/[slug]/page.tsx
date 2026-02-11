import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import FaqSection from '@/components/common/FaqSection';

import { ALTERNATIVE_SLUGS, getAlternativePage } from '@/lib/alternativesData';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export async function generateStaticParams() {
  return ALTERNATIVE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getAlternativePage(params.slug);

  if (!page) {
    return buildMetadata({
      title: 'Alternatives',
      description: 'Compare UNOBITS to popular incumbents and reduce tab overload with one connected OS.',
      path: `/alternatives/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: page.title,
    description: page.summary,
    path: `/alternatives/${page.slug}`,
    keywords: [
      `${page.competitorName} alternative`,
      `${page.competitorName} vs UNOBITS`,
      'tab overload',
      'subscription fatigue',
      'all-in-one business software',
    ],
  });
}

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getAlternativePage(slug);
  if (!page) notFound();

  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title={page.title}
          subtitle={page.subtitle}
          breadcrumbs={[
            { name: 'Alternatives', href: '/alternatives' },
            { name: page.title, href: `/alternatives/${page.slug}` },
          ]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <p className="text-body-copy dark:text-slate-400 max-w-4xl">{page.summary}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                Start free trial
              </OpenSignupButton>
              <Link
                href="/templates"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Preview templates
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              Competitor names are trademarks of their respective owners. This page is informational and UNOBITS is not affiliated with them.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-headings dark:text-white">Why teams switch</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Most switches happen because teams want fewer tools, faster adoption, and a workflow that keeps context connected.
                </p>
              </div>

              <div className="lg:col-span-2 u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
                <ul className="space-y-4">
                  {page.reasonsToSwitch.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                      <span className="text-body-copy dark:text-slate-300">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian overflow-x-auto">
              <h2 className="text-2xl font-bold text-headings dark:text-white">High-level comparison</h2>
              <p className="mt-2 text-body-copy dark:text-slate-400">
                Kept intentionally high-level: real outcomes depend on your workflow, team size, and implementation.
              </p>

              <table className="mt-6 w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <th className="py-3 pr-6 font-semibold text-headings dark:text-white">Aspect</th>
                    <th className="py-3 pr-6 font-semibold text-headings dark:text-white">UNOBITS</th>
                    <th className="py-3 font-semibold text-headings dark:text-white">{page.competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.map((row) => (
                    <tr key={row.aspect} className="border-b border-slate-200/70 dark:border-white/10">
                      <td className="py-4 pr-6 font-semibold text-slate-700 dark:text-slate-200">{row.aspect}</td>
                      <td className="py-4 pr-6 text-body-copy dark:text-slate-300">{row.unobits}</td>
                      <td className="py-4 text-body-copy dark:text-slate-300">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-headings dark:text-white">Recommended modules</h2>
                  <p className="mt-2 text-body-copy dark:text-slate-400">A starting set that typically replaces the most tabs.</p>
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
                    <h3 className="text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">{m.title}</h3>
                    <p className="mt-2 text-sm text-body-copy dark:text-slate-400">{m.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection title="FAQ" items={page.faqs} />
      </main>
      <Footer />
    </div>
  );
}
