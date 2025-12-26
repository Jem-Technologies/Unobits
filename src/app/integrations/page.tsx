import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

const integrations = [
  {
    title: 'Email & Inbox connections',
    status: 'Available',
    description: 'Route messages into UNOBITS and keep conversations connected to clients and projects.',
    bullets: ['Shared inbox routing', 'Link threads to CRM & Projects', 'Notifications and assignments'],
  },
  {
    title: 'Calendar sync',
    status: 'Available',
    description: 'Keep time, meetings, and deadlines connected to the work that follows.',
    bullets: ['Team availability', 'Event → task conversion', 'Reminders and follow‑ups'],
  },
  {
    title: 'Files & storage',
    status: 'Available',
    description: 'Organize files where the work happens — and share them through portals when needed.',
    bullets: ['Attach files to projects and clients', 'Permissions and link sharing', 'Search across your workspace'],
  },
  {
    title: 'Automation connectors',
    status: 'Available',
    description: 'Trigger workflows and connect external tools while keeping execution inside UNOBITS.',
    bullets: ['Webhooks + event triggers', 'No-code workflow builder', 'Integrate without tab overload'],
  },
  {
    title: 'Social media integration',
    status: 'Coming soon',
    description: 'Bring social signals into UNOBITS so teams can route messages, tasks, and workflows from one place.',
    bullets: ['Inbound signals → inbox and tasks', 'Team collaboration on social workflows', 'Reporting and attribution over time'],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Integrations"
          subtitle="UNOBITS is the command center — connect what you need, keep execution in one OS, and avoid living in 12 browser tabs."
          breadcrumbs={[{ name: 'Integrations', href: '/integrations' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-headings dark:text-white">Connect, don’t context‑switch</h2>
                <p className="mt-2 text-body-copy dark:text-slate-400">
                  Integrations should reduce the stack, not create a second one. UNOBITS keeps the work inside the OS and uses
                  integrations for sync, signals, and automation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-5 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                  Start free
                </OpenSignupButton>
                <Link
                  href="/developers"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  API & Webhooks
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {integrations.map((i) => (
                <div
                  key={i.title}
                  className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-headings dark:text-white">{i.title}</h3>
                    <span
                      className={
                        i.status === 'Coming soon'
                          ? 'inline-flex items-center rounded-full bg-neon-teal/10 px-3 py-1 text-xs font-semibold text-neon-teal'
                          : 'inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }
                    >
                      {i.status}
                    </span>
                  </div>
                  <p className="mt-3 text-body-copy dark:text-slate-400">{i.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-body-copy dark:text-slate-400">
                    {i.bullets.map((b) => (
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
                <h2 className="text-3xl font-bold text-white">Need a custom integration?</h2>
                <p className="mt-4 text-gray-300">
                  Use webhooks and the API to connect internal systems, data warehouses, or third‑party tools. If you need help
                  designing the integration, our team can assist on Custom plans.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Talk to support
                  </Link>
                  <Link
                    href="/product/external"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    External collaboration app
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
