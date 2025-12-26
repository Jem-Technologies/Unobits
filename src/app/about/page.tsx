import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';

const values = [
  {
    title: 'One connected OS',
    description:
      'Your business shouldn’t live across 15 tabs. We build systems that keep communication, execution, and data connected by default.',
  },
  {
    title: 'Real-time collaboration',
    description:
      'Work is social. UNOBITS is designed for fast, real-time collaboration—from chat to boards to live portals.',
  },
  {
    title: 'Automation with clarity',
    description:
      'Automations should reduce chaos. We focus on predictable workflows that keep teams aligned and accountable.',
  },
  {
    title: 'Built to scale',
    description:
      'Start simple and grow into portals, Digital Twin capabilities, and integrations without rebuilding your process.',
  },
];

export default function AboutPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="About UNOBITS"
          subtitle="We’re building the world’s most connected operating system for work—so teams stop context-switching and start shipping."
          breadcrumbs={[{ name: 'About', href: '/about' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-headings dark:text-white">Our mission</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Replace tool sprawl with one OS that connects communication, projects, client work, and reporting.
                </p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-body-copy dark:text-slate-300 leading-relaxed">
                  Modern teams are faster than ever—but the software stack hasn’t caught up. We jump between chat, email,
                  project trackers, docs, CRMs, calendars, and spreadsheets… and we lose context every time.
                </p>
                <p className="mt-4 text-body-copy dark:text-slate-300 leading-relaxed">
                  UNOBITS is designed as an operating system: the same underlying model connects clients, conversations,
                  projects, files, and automation. Instead of “integrating” a fragile tool stack, you work from a single
                  source of truth.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                    Start free
                  </OpenSignupButton>
                  <Link
                    href="/product"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                  >
                    Explore modules
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian"
                >
                  <h3 className="text-xl font-bold text-headings dark:text-white">{v.title}</h3>
                  <p className="mt-3 text-body-copy dark:text-slate-400">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Want a guided rollout?</h2>
                <p className="mt-4 text-gray-300">
                  If you’re rolling out UNOBITS to a larger team, we can help design workflows, portals, and integration paths.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    View pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Contact support
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
