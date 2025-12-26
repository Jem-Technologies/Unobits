import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

const updated = 'December 26, 2025';

const sections = [
  {
    heading: '1. What are cookies?',
    body: [
      'Cookies are small text files stored on your device that help websites function and remember preferences.',
    ],
  },
  {
    heading: '2. How UNOBITS uses cookies',
    body: [
      'We use essential cookies for site functionality and security.',
      'We may use analytics cookies to understand how the site is used and improve performance.',
    ],
  },
  {
    heading: '3. Managing cookies',
    body: [
      'You can control cookies through your browser settings. Disabling cookies may impact site functionality.',
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Cookie Policy"
          subtitle="How cookies are used on the UNOBITS site."
          breadcrumbs={[
            { name: 'Legal', href: '/legal' },
            { name: 'Cookie Policy', href: '/legal/cookies' },
          ]}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Last updated: {updated}</p>

            <div className="mt-8 space-y-10">
              {sections.map((s) => (
                <section key={s.heading} className="space-y-4">
                  <h2 className="text-2xl font-bold text-headings dark:text-white">{s.heading}</h2>
                  {s.body.map((p) => (
                    <p key={p} className="text-body-copy dark:text-slate-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <Link
                href="/legal/privacy"
                className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
              >
                Privacy policy
              </Link>
              <Link
                href="/legal/terms"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Terms of service
              </Link>
            </div>
          </div>
        </article>

        <section className="pb-20" />
      </main>
      <Footer />
    </div>
  );
}
