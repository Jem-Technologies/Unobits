import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

const points = [
  {
    title: 'A clean client view',
    description: 'Clients see status, deliverables, and next steps without internal noise.',
  },
  {
    title: 'Approvals & requests',
    description: 'Turn approvals and new requests into trackable work—without long email threads.',
  },
  {
    title: 'Secure file sharing',
    description: 'Attach files to projects and control permissions with portal-scoped access.',
  },
];

export default function ClientPortalPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Client Portal"
          subtitle="Give clients a single destination for updates, approvals, and files—without clogging your inbox."
          breadcrumbs={[{ name: 'Client Portal', href: '/client-portal' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
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
                href="/product/client-portal"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Portal feature details
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Stop shipping updates through email</h2>
                <p className="mt-4 text-gray-300">
                  The portal turns client communication into a structured workflow. Everything ties back to projects, tasks, and files inside UNOBITS.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/solutions/agencies"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Built for agencies
                  </Link>
                  <Link
                    href="/team-portal"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Team Portal
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
