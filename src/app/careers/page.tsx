import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';

import { SUPPORT_EMAIL } from '@/lib/siteConfig';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Careers',
  description:
    'Join UNOBITS and help build the modern all‑in‑one business OS. Remote‑first, product‑driven, and obsessed with killing tab overload.',
  path: '/careers',
  keywords: [
    'UNOBITS careers',
    'remote jobs',
    'startup software',
    'business OS',
  ],
});


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
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Careers"
          subtitle="Help build the connected operating system for work."
          breadcrumbs={[{ name: 'Careers', href: '/careers' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <h2 className="text-2xl font-bold text-headings dark:text-white">Open roles</h2>
            <p className="mt-3 text-body-copy dark:text-slate-400">
              We’re building a product that feels like an industry giant—fast, polished, reliable, and built for real businesses.
              If that’s how you like to work, we’d love to hear from you.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian"
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

            <div className="mt-12 u-surface-soft p-6">
              <h3 className="text-lg font-bold text-headings dark:text-white">Don’t see a perfect match?</h3>
              <p className="mt-2 text-body-copy dark:text-slate-400">
                Send a short note about what you’d like to work on and we’ll keep you in mind.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Careers: General interest')}`}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Email us
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  About UNOBITS
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="u-surface p-6">
                <h3 className="text-lg font-bold text-headings dark:text-white">What we value</h3>
                <ul className="mt-4 space-y-3 text-body-copy dark:text-slate-400">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Craft over hype—ship features that feel effortless to use.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Ownership—take problems end-to-end and make sensible tradeoffs.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Reliability—performance, accessibility, and trust are non-negotiable.</span>
                  </li>
                </ul>
              </div>

              <div className="u-surface p-6">
                <h3 className="text-lg font-bold text-headings dark:text-white">How we work</h3>
                <ul className="mt-4 space-y-3 text-body-copy dark:text-slate-400">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Async-friendly communication with crisp writing and clear context.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Small teams, fast iteration, and measurable outcomes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>Obsess over edge cases—the details are the product.</span>
                  </li>
                </ul>
              </div>

              <div className="u-surface p-6">
                <h3 className="text-lg font-bold text-headings dark:text-white">Interview process</h3>
                <ol className="mt-4 space-y-3 text-body-copy dark:text-slate-400">
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-sm font-semibold text-neon-teal">1.</span>
                    <span>Short intro call to align on role and expectations.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-sm font-semibold text-neon-teal">2.</span>
                    <span>Practical work sample (small, focused, and respectful of your time).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-sm font-semibold text-neon-teal">3.</span>
                    <span>Team conversations about craft, collaboration, and execution.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Want to introduce yourself?</h2>
                <p className="mt-4 text-gray-300">
                  If you’re excited about building a black-first product with teal accents—and obsessing over the little details—send a note.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Careers: General interest')}`}
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Email careers
                  </a>
                  <Link
                    href="/community"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Join the community
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
