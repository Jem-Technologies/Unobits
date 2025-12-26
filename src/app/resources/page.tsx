import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import BlogGrid from '@/components/resources/BlogGrid';
import Link from 'next/link';

import { RESOURCE_CATEGORIES, RESOURCE_POSTS } from '@/lib/resourcesData';
import { slugify } from '@/lib/slugify';

const categoryHref = (category: string) => `/resources/category/${slugify(category)}`;

export default function ResourcesPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Insights & Resources"
          subtitle="Articles, guides, and updates from the UNOBITS team — focused on reducing tool sprawl and shipping faster."
          breadcrumbs={[{ name: 'Resources', href: '/resources' }]}
        />

        <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
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
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BlogGrid posts={RESOURCE_POSTS} />
      </main>
      <Footer />
    </div>
  );
}
