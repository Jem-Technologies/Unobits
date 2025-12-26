import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import ZigZagLayout from '@/components/product/ZigZagLayout';
import Link from 'next/link';

import { PRODUCT_SLUGS, getProductPage } from '@/lib/productData';

export const dynamicParams = false;

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) notFound();

  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title={page.title}
          subtitle={page.subtitle}
          breadcrumbs={[
            { name: 'Product', href: '/product' },
            { name: page.title, href: `/product/${page.slug}` },
          ]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold text-neon-teal">{page.category}</p>
                <p className="mt-2 text-body-copy dark:text-slate-400">{page.summary}</p>
              </div>

              {page.comingSoon && (
                <span className="inline-flex w-fit items-center rounded-full bg-neon-teal/10 px-3 py-1 text-xs font-semibold text-neon-teal">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </section>

        <ZigZagLayout features={page.sections} />

        {page.relatedSlugs && page.relatedSlugs.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-headings dark:text-white">Related modules</h2>
                  <p className="mt-2 text-body-copy dark:text-slate-400">Keep exploring the connected OS.</p>
                </div>
                <Link
                  href="/product"
                  className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  View all modules
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.relatedSlugs.map((s) => {
                  const rel = getProductPage(s);
                  if (!rel) return null;
                  return (
                    <Link
                      key={s}
                      href={`/product/${s}`}
                      className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-slate-800 dark:bg-slate-900"
                    >
                      <p className="text-xs font-semibold text-neon-teal">{rel.category}</p>
                      <h3 className="mt-2 text-lg font-bold text-headings group-hover:text-neon-teal dark:text-white">
                        {rel.title}
                      </h3>
                      <p className="mt-2 text-sm text-body-copy dark:text-slate-400">{rel.subtitle}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
