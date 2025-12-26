import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

const points = [
  {
    title: 'Internal source of truth',
    description: 'Projects, discussions, files, and tasks live together so context never disappears.',
  },
  {
    title: 'Role-based visibility',
    description: 'Team and leadership can see what they need without leaking client-specific or sensitive internal data.',
  },
  {
    title: 'Operational reporting',
    description: 'Dashboards and reports map work to outcomes—time, cost, and throughput.',
  },
];

export default function TeamPortalPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Team Portal"
          subtitle="Your internal hub for execution, collaboration, and reporting—connected to every client and project."
          breadcrumbs={[{ name: 'Team Portal', href: '/team-portal' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {points.map((p) => (
                <div key={p.title} className="u-surface-soft p-6">
                  <h3 className="text-lg font-bold text-headings dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-body-copy dark:text-slate-400">{p.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                Start free
              </OpenSignupButton>
              <Link
                href="/product/team-portal"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Portal feature details
              </Link>
              <Link
                href="/product/dashboard"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Dashboard overview
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">One place to run the business</h2>
                <p className="mt-4 text-gray-300">
                  When communication, work, and data share the same model, reporting becomes real-time and execution stays aligned.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/product/reports"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Reporting
                  </Link>
                  <Link
                    href="/client-portal"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Client Portal
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
