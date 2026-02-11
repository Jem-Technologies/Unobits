import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Cookie Policy',
  description:
    'UNOBITS Cookie Policy.',
  path: '/legal/cookies',
  keywords: [
    'cookie policy',
    'UNOBITS cookies',
  ],
});


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
    <div className="u-page">
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

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
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
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Terms of service
              </Link>
            </div>
          </div>
        </article>

        <section className="py-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <a
                href="/security"
                className="u-surface p-6 hover:bg-slate-50 dark:hover:bg-white/5"
              >
                <h3 className="text-base font-semibold text-headings dark:text-white">Security</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Platform security posture, controls, and practices.</p>
                <p className="mt-4 text-sm font-semibold text-neon-teal">View →</p>
              </a>

              <a
                href="/status"
                className="u-surface p-6 hover:bg-slate-50 dark:hover:bg-white/5"
              >
                <h3 className="text-base font-semibold text-headings dark:text-white">Status</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Realtime system health and incident history.</p>
                <p className="mt-4 text-sm font-semibold text-neon-teal">View →</p>
              </a>

              <a
                href="/contact"
                className="u-surface p-6 hover:bg-slate-50 dark:hover:bg-white/5"
              >
                <h3 className="text-base font-semibold text-headings dark:text-white">Contact</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Questions about policy language or data handling.</p>
                <p className="mt-4 text-sm font-semibold text-neon-teal">Open →</p>
              </a>
            </div>

            <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
              Note: These pages are templates for the site. For production use, review with qualified counsel.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
