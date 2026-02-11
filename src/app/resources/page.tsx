import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import BlogGrid from '@/components/resources/BlogGrid';
import Link from 'next/link';

import { RESOURCE_CATEGORIES, RESOURCE_POSTS } from '@/lib/resourcesData';
import { slugify } from '@/lib/slugify';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Resources',
  description:
    'Articles, guides, and playbooks from the UNOBITS team — focused on reducing tab overload and building a calmer workflow.',
  path: '/resources',
  keywords: [
    'resources',
    'tab overload',
    'subscription fatigue',
    'workflow playbooks',
  ],
});


const categoryHref = (category: string) => `/resources/category/${slugify(category)}`;

export default function ResourcesPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Insights & Resources"
          subtitle="Articles, guides, and updates from the UNOBITS team — focused on reducing tool sprawl and shipping faster."
          breadcrumbs={[{ name: 'Resources', href: '/resources' }]}
        />

        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-headings dark:text-white">Browse by category</h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">
                  Quick entry points into communication, workflow, automation, and platform strategy.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESOURCE_CATEGORIES.map((c) => (
                  <Link
                    key={c}
                    href={categoryHref(c)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BlogGrid posts={RESOURCE_POSTS} />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Tab Overload Guide',
                  desc: 'A practical path to reduce tool sprawl and subscription fatigue.',
                  href: '/tab-overload',
                },
                {
                  title: 'Templates Library',
                  desc: 'Preview complete workflows before you sign up.',
                  href: '/templates',
                },
                {
                  title: 'Alternatives to incumbents',
                  desc: 'Compare UNOBITS to popular suites and tools.',
                  href: '/alternatives',
                },
                {
                  title: 'Reviews',
                  desc: 'Help more founders discover UNOBITS.',
                  href: '/reviews',
                },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-obsidian"
                >
                  <h3 className="text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-body-copy dark:text-slate-400">{c.desc}</p>
                  <div className="mt-4 text-sm font-semibold text-neon-teal">Explore →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
