import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

import { SUPPORT_EMAIL } from '@/lib/siteConfig';

const roles = [
  {
    title: 'Senior Full‑Stack Engineer',
    location: 'Remote / Hybrid',
    type: 'Full‑time',
    description: 'Build core product experiences across the OS: communication, projects, portals, and real‑time collaboration.',
  },
  {
    title: 'Product Designer',
    location: 'Remote / Hybrid',
    type: 'Full‑time',
    description: 'Design world‑class workflows that reduce tool sprawl and keep context attached to the work.',
  },
  {
    title: 'Solutions Engineer',
    location: 'Remote / Hybrid',
    type: 'Full‑time',
    description: 'Help teams roll out UNOBITS, design automations, and deliver integrations for Custom plans.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Careers"
          subtitle="Help build the connected operating system for work."
          breadcrumbs={[{ name: 'Careers', href: '/careers' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-bold text-headings dark:text-white">Open roles</h2>
            <p className="mt-3 text-body-copy dark:text-slate-400">
              We’re building a product that feels like an industry giant—fast, polished, reliable, and built for real businesses.
              If that’s how you like to work, we’d love to hear from you.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <h3 className="text-xl font-bold text-headings dark:text-white">{role.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {role.location} • {role.type}
                  </p>
                  <p className="mt-4 text-body-copy dark:text-slate-400">{role.description}</p>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`Careers: ${role.title}`)}`}
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-neon-teal px-4 py-2 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Apply via email
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
              <h3 className="text-lg font-bold text-headings dark:text-white">Don’t see a perfect match?</h3>
              <p className="mt-2 text-body-copy dark:text-slate-400">
                Send a short note about what you’d like to work on and we’ll keep you in mind.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Careers: General interest')}`}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Email us
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  About UNOBITS
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20" />
      </main>
      <Footer />
    </div>
  );
}
