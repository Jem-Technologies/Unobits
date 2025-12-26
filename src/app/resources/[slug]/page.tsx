import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

import { RESOURCE_SLUGS, getPost } from '@/lib/resourcesData';
import { slugify } from '@/lib/slugify';

export const dynamicParams = false;

export async function generateStaticParams() {
  return RESOURCE_SLUGS.map((slug) => ({ slug }));
}

export default async function ResourcePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const categorySlug = slugify(post.category);

  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title={post.title}
          subtitle={post.excerpt}
          breadcrumbs={[
            { name: 'Resources', href: '/resources' },
            { name: post.category, href: `/resources/category/${categorySlug}` },
            { name: post.title, href: `/resources/${post.slug}` },
          ]}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="u-surface shadow-sm overflow-hidden dark:border-white/10 dark:bg-obsidian">
            <div className="relative aspect-[16/9] bg-slate-100 dark:bg-slate-800">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>

              <div className="mt-8 space-y-10">
                {post.content.map((section) => (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="text-2xl font-bold text-headings dark:text-white">{section.heading}</h2>
                    {section.body.map((p) => (
                      <p key={p} className="text-body-copy dark:text-slate-300 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                >
                  Explore the platform
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Back to resources
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
