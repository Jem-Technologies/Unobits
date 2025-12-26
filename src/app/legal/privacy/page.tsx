import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

import { SUPPORT_EMAIL } from '@/lib/siteConfig';

const updated = 'December 26, 2025';

const sections = [
  {
    heading: '1. Overview',
    body: [
      'This Privacy Policy describes how UNOBITS collects, uses, and shares information when you use the website and platform.',
    ],
  },
  {
    heading: '2. Information we collect',
    body: [
      'Account information such as name, email address, and workspace details.',
      'Usage information such as feature interactions and device/browser details (where applicable).',
      'Customer content you upload to the platform (e.g., messages, files, notes) which is processed solely to provide the Service.',
    ],
  },
  {
    heading: '3. How we use information',
    body: [
      'To provide, maintain, and improve the Service.',
      'To communicate with you about updates, security, and support requests.',
      'To protect the Service and our users from abuse and fraud.',
    ],
  },
  {
    heading: '4. Sharing',
    body: [
      'We may share information with service providers that help us operate the Service (e.g., hosting, analytics) under appropriate confidentiality obligations.',
      'We may disclose information if required by law or to protect rights and safety.',
    ],
  },
  {
    heading: '5. Data retention',
    body: [
      'We retain information for as long as necessary to provide the Service and comply with legal obligations. Retention may vary by plan and customer configuration.',
    ],
  },
  {
    heading: '6. Your choices',
    body: [
      'You may request access, correction, or deletion of personal information, subject to legal requirements.',
      `For privacy requests, contact ${SUPPORT_EMAIL}.`,
    ],
  },
  {
    heading: '7. Changes',
    body: [
      'We may update this policy from time to time. Continued use of the Service after changes become effective constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Privacy Policy"
          subtitle="How we handle personal information."
          breadcrumbs={[
            { name: 'Legal', href: '/legal' },
            { name: 'Privacy Policy', href: '/legal/privacy' },
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
                href="/legal/terms"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Terms of service
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
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
