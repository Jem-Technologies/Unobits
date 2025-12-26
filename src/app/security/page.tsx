import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

import { SUPPORT_EMAIL } from '@/lib/siteConfig';

const controls = [
  {
    title: 'Encryption & data protection',
    description: 'Best-practice encryption for data in transit and at rest, plus controls to keep access scoped.',
    bullets: ['HTTPS/TLS for transport', 'Encryption at rest where supported', 'Granular permissioning and audit-friendly history'],
  },
  {
    title: 'Access & identity',
    description: 'Make sure the right people have the right access — and nothing more.',
    bullets: ['Role-based access control (RBAC)', 'Team + client portals with separate permissions', 'Optional SSO and provisioning (plan dependent)'],
  },
  {
    title: 'Operational resilience',
    description: 'Designed for reliability with monitoring, backups, and incident response processes.',
    bullets: ['Backups and disaster recovery practices', 'Monitoring and alerting', 'Dedicated support options for Custom plans'],
  },
  {
    title: 'Privacy and governance',
    description: 'Clear policies and tooling to support your governance requirements.',
    bullets: ['Privacy and cookie policies', 'Data export and retention options', 'Security review support on Custom plans'],
  },
];

export default function SecurityPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Security"
          subtitle="Enterprise‑grade security controls, designed to keep your data protected while your team works in one connected OS."
          breadcrumbs={[{ name: 'Security', href: '/security' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-headings dark:text-white">Security built for real businesses</h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">
                  UNOBITS is designed to support modern security expectations (access controls, encryption, and governance).
                  For regulated environments, our team can support security reviews on Custom plans.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                >
                  View pricing
                </Link>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Security questions')}`}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Contact security
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {controls.map((c) => (
                <div
                  key={c.title}
                  className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian"
                >
                  <h3 className="text-xl font-bold text-headings dark:text-white">{c.title}</h3>
                  <p className="mt-3 text-body-copy dark:text-slate-400">{c.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-body-copy dark:text-slate-400">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-x-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-neon-teal" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Policies & documentation</h2>
                <p className="mt-4 text-gray-300">
                  Need legal documents for your review? We keep the standard policies available on the site.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/legal/privacy"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="/legal/terms"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
