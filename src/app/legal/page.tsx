import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

const docs = [
  { title: 'Terms of Service', href: '/legal/terms', description: 'Usage terms for the UNOBITS platform.' },
  { title: 'Privacy Policy', href: '/legal/privacy', description: 'How we handle personal data.' },
  { title: 'Cookie Policy', href: '/legal/cookies', description: 'How cookies and tracking are used on the site.' },
];

export default function LegalIndexPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Legal"
          subtitle="Policies and legal documents for the UNOBITS website and platform."
          breadcrumbs={[{ name: 'Legal', href: '/legal' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {docs.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="u-surface p-6 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:hover:bg-white/5"
                >
                  <h2 className="text-xl font-bold text-headings dark:text-white">{d.title}</h2>
                  <p className="mt-2 text-body-copy dark:text-slate-400">{d.description}</p>
                  <p className="mt-4 text-sm font-semibold text-neon-teal">Read →</p>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
              These documents are provided as a general template for the site. For production use, review with qualified counsel.
            </p>
          </div>
        </section>

        <section className="py-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="u-surface p-8">
                <h2 className="text-2xl font-bold text-headings dark:text-white">Security & operational transparency</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Looking for product security posture or realtime uptime information? We keep those pages up to date and easy to find.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/security"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Security overview
                  </Link>
                  <Link
                    href="/status"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    System status
                  </Link>
                </div>
              </div>

              <div className="u-surface p-8">
                <h2 className="text-2xl font-bold text-headings dark:text-white">Questions about terms?</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  If you need clarification on a clause, data handling, or your billing relationship, reach out and we’ll point you to the right policy section.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Contact support
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                  >
                    Read resources
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
              This site is designed dark-first: black backgrounds, obsidian surfaces, and teal accents. If anything looks off, please report it.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
