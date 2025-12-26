import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

import { SUPPORT_EMAIL } from '@/lib/siteConfig';

const highlights = [
  {
    title: 'Workflows and templates',
    description: 'Copy proven setups for agencies, startups, and client delivery.',
  },
  {
    title: 'Early access features',
    description: 'Get access to upcoming capabilities—like social media integrations—first.',
  },
  {
    title: 'Office hours',
    description: 'Join live sessions to optimize your OS and reduce tool switching.',
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Community"
          subtitle="Templates, best practices, and early access updates from the UNOBITS ecosystem."
          breadcrumbs={[{ name: 'Community', href: '/community' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
                  <h3 className="text-lg font-bold text-headings dark:text-white">{h.title}</h3>
                  <p className="mt-2 text-body-copy dark:text-slate-400">{h.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                Start free
              </OpenSignupButton>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Community access')}`}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Request an invite
              </a>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Read guides
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Community forum and public templates library are expanding—more content is added continuously.
            </p>
          </div>
        </section>

        <section className="pb-20" />
      </main>
      <Footer />
    </div>
  );
}
