import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import BlogGrid from '@/components/resources/BlogGrid';

import { RESOURCE_CATEGORIES, RESOURCE_POSTS } from '@/lib/resourcesData';
import { slugify } from '@/lib/slugify';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export async function generateStaticParams() {
  return RESOURCE_CATEGORIES.map((c) => ({ slug: slugify(c) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = RESOURCE_CATEGORIES.find((c) => slugify(c) === params.slug);

  if (!category) {
    return buildMetadata({
      title: 'Resources',
      description: 'Guides and insights from the UNOBITS team — focused on reducing tab overload.',
      path: `/resources/category/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${category} resources`,
    description: `Posts and guides about ${category.toLowerCase()} inside UNOBITS.`,
    path: `/resources/category/${params.slug}`,
    keywords: ['UNOBITS', 'resources', category, 'tab overload'],
  });
}


export default async function ResourceCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = RESOURCE_CATEGORIES.find((c) => slugify(c) === slug);
  if (!category) notFound();

  const posts = RESOURCE_POSTS.filter((p) => p.category === category);

  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title={category}
          subtitle={`Posts and guides about ${category.toLowerCase()} inside UNOBITS.`}
          breadcrumbs={[
            { name: 'Resources', href: '/resources' },
            { name: category, href: `/resources/category/${slug}` },
          ]}
        />

        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-body-copy dark:text-slate-400">
                Showing <span className="font-semibold text-headings dark:text-white">{posts.length}</span> post{posts.length === 1 ? '' : 's'}.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Back to resources
              </Link>
            </div>
          </div>
        </section>

        <BlogGrid posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
