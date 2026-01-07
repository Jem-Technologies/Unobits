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
    <div className="u-page">
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
                href="/legal/terms"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
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
