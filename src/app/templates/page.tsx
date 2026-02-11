import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import { buildMetadata } from '@/lib/seo';
import { TEMPLATE_PAGES } from '@/lib/templatesData';

export const metadata = buildMetadata({
  title: 'Templates library',
  description:
    'Preview community use‑case templates before you sign up. See how UNOBITS runs agencies, startups, retail ops, and more — in one connected operating system.',
  path: '/templates',
  keywords: [
    'business templates',
    'workflow templates',
    'agency template',
    'startup template',
    'tab overload',
    'subscription fatigue',
    'business operating system',
  ],
});

export default function TemplatesHubPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Templates library"
          subtitle="Community use‑case templates lower the barrier to entry. Preview a complete workflow (CRM → inbox → onboarding → delivery) before you sign up."
          breadcrumbs={[{ name: 'Templates', href: '/templates' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-headings dark:text-white">See the workflow before you commit</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Templates show you what the OS feels like in practice: pipelines, inbox routing, projects, portals, and dashboards — already connected.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free trial
                </OpenSignupButton>
                <Link
                  href="/tab-overload"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Why templates matter
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEMPLATE_PAGES.map((t) => (
                <Link
                  key={t.slug}
                  href={`/templates/${t.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-obsidian"
                >
                  <div className="relative aspect-[16/9] bg-slate-100 dark:bg-white/5">
                    <Image
                      src={t.image}
                      alt={`${t.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">Template</p>
                    <h3 className="mt-2 text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">{t.title}</h3>
                    <p className="mt-2 text-sm text-body-copy dark:text-slate-400 line-clamp-3">{t.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {t.bestFor.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 text-sm font-semibold text-neon-teal">View template →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Want a template added?</h2>
                <p className="mt-4 text-gray-300">
                  Tell us your business model and workflow. We’ll publish more public templates so new teams can evaluate UNOBITS instantly.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Request a template
                  </Link>
                  <Link
                    href="/alternatives"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Compare alternatives
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
