import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

const updated = 'December 26, 2025';

const sections = [
  {
    heading: '1. Agreement',
    body: [
      'These Terms of Service ("Terms") govern access to and use of the UNOBITS website and platform (the "Service"). By accessing the Service, you agree to these Terms.',
    ],
  },
  {
    heading: '2. Accounts',
    body: [
      'You are responsible for maintaining the confidentiality of account credentials and for all activities under your account.',
      'You must provide accurate information and keep it up to date.',
    ],
  },
  {
    heading: '3. Acceptable use',
    body: [
      'You agree not to misuse the Service, including attempting to gain unauthorized access, interfering with normal operation, or violating applicable laws.',
    ],
  },
  {
    heading: '4. Customer content',
    body: [
      'You retain ownership of content you upload to the Service. You grant UNOBITS permission to host, process, and display content solely to provide the Service.',
    ],
  },
  {
    heading: '5. Plans & billing',
    body: [
      'Plan details and pricing are described on the Pricing page. Some features may be plan dependent.',
      'Custom plans may be subject to separate agreements.',
    ],
  },
  {
    heading: '6. Termination',
    body: [
      'You may stop using the Service at any time. We may suspend or terminate access if you materially breach these Terms.',
    ],
  },
  {
    heading: '7. Disclaimers',
    body: [
      'The Service is provided "as is" and "as available". To the maximum extent permitted by law, UNOBITS disclaims all warranties, express or implied.',
    ],
  },
  {
    heading: '8. Limitation of liability',
    body: [
      'To the maximum extent permitted by law, UNOBITS will not be liable for indirect, incidental, special, consequential, or punitive damages.',
    ],
  },
  {
    heading: '9. Changes',
    body: [
      'We may update these Terms from time to time. Continued use of the Service after changes become effective constitutes acceptance of the updated Terms.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Terms of Service"
          subtitle="The rules for using UNOBITS."
          breadcrumbs={[
            { name: 'Legal', href: '/legal' },
            { name: 'Terms of Service', href: '/legal/terms' },
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
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Contact support
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
