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
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Legal"
          subtitle="Policies and legal documents for the UNOBITS website and platform."
          breadcrumbs={[{ name: 'Legal', href: '/legal' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {docs.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
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

        <section className="pb-20" />
      </main>
      <Footer />
    </div>
  );
}
