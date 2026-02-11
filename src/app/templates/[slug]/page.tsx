import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import FaqSection from '@/components/common/FaqSection';

import { TEMPLATE_SLUGS, getTemplatePage } from '@/lib/templatesData';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export async function generateStaticParams() {
  return TEMPLATE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getTemplatePage(params.slug);

  if (!page) {
    return buildMetadata({
      title: 'Templates',
      description: 'Preview UNOBITS use-case templates before you sign up.',
      path: `/templates/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: page.title,
    description: page.summary,
    path: `/templates/${page.slug}`,
    image: page.image,
    keywords: ['UNOBITS templates', 'workflow templates', 'tab overload', 'subscription fatigue', page.title],
  });
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getTemplatePage(slug);
  if (!page) notFound();

  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title={page.title}
          subtitle={page.subtitle}
          breadcrumbs={[
            { name: 'Templates', href: '/templates' },
            { name: page.title, href: `/templates/${page.slug}` },
          ]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface overflow-hidden shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="relative aspect-[16/9] bg-slate-100 dark:bg-white/5">
              <Image
                src={page.image}
                alt={`${page.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            <div className="p-8">
              <p className="text-body-copy dark:text-slate-400 max-w-4xl">{page.summary}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free trial
                </OpenSignupButton>
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Explore modules
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold text-headings dark:text-white">Best for</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {page.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-headings dark:text-white">Includes modules</h2>
                  <p className="mt-2 text-body-copy dark:text-slate-400">
                    These modules work better together — the template ships them connected by default.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {page.includesModules.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                      >
                        {m.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-headings dark:text-white">How the template works</h2>
            <p className="mt-3 text-body-copy dark:text-slate-400 max-w-3xl">
              Apply the template, then adjust stages, fields, and automations to match your exact business. Start simple — scale later.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {page.steps.map((step) => (
                <div key={step.title} className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
                  <h3 className="text-xl font-bold text-headings dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-body-copy dark:text-slate-400">{step.description}</p>
                  <ul className="mt-5 space-y-3">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                        <span className="text-sm text-body-copy dark:text-slate-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-obsidian px-6 py-10 sm:px-10">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-white">Need help tailoring this template?</h3>
                <p className="mt-3 text-gray-300">
                  Tell us your workflow and we’ll help you map the best starting setup — especially if you’re migrating from a big suite.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Talk to us
                  </Link>
                  <Link
                    href="/alternatives"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    View alternatives
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection title="Template FAQ" items={page.faqs} />
      </main>
      <Footer />
    </div>
  );
}
