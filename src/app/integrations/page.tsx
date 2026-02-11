import Link from 'next/link';
import Script from 'next/script';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import { buildMetadata } from '@/lib/seo';
import {
  INTEGRATION_SPHERE_LOGOS,
  INTEGRATION_SPRITE,
  getIntegrationSpritePosition,
} from '@/lib/integrationSphereData';


export const metadata = buildMetadata({
  title: 'Integrations',
  description:
    'Connect the tools you must keep — while doing the real work inside UNOBITS. Integrations, webhooks, and automation connectors.',
  path: '/integrations',
  keywords: [
    'integrations',
    'webhooks',
    'Zapier alternative',
    'automation',
  ],
});


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
  const spherePayload = {
    logos: INTEGRATION_SPHERE_LOGOS,
    sprite: INTEGRATION_SPRITE,
  };

  const tile = 56; // CSS px for fallback grid + directory icons
  const bgSize = `${INTEGRATION_SPRITE.columns * tile}px ${INTEGRATION_SPRITE.rows * tile}px`;

  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Integrations"
          subtitle="UNOBITS is the command center — connect what you need, keep execution in one OS, and avoid living in 12 browser tabs."
          breadcrumbs={[{ name: 'Integrations', href: '/integrations' }]}
          visual="operations"
        />

        {/* Payload first, then the dependency-free canvas module. */}
        <Script
          id="integrationSpherePayload"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.__UNOBITS_INTEGRATION_SPHERE__=${JSON.stringify(spherePayload)};`,
          }}
        />
        <Script src="/js/integration-sphere.js" strategy="afterInteractive" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
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

        {/* 3D Canvas Sphere (100 logos) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-neon-teal">Interactive</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-headings dark:text-white">
                  100 integrations, one visual map
                </h2>
                <p className="mt-4 text-body-copy dark:text-slate-400">
                  Drag (or swipe) to spin the sphere. Click a logo to jump to its listing below. This runs entirely on a
                  single HTML5 canvas for smooth FPS on mobile.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="u-surface-soft p-4 dark:bg-white/5">
                    <p className="text-sm font-semibold text-headings dark:text-white">Depth-aware</p>
                    <p className="mt-1 text-sm text-body-copy dark:text-slate-400">Front logos scale up and brighten automatically.</p>
                  </div>
                  <div className="u-surface-soft p-4 dark:bg-white/5">
                    <p className="text-sm font-semibold text-headings dark:text-white">Physics rotation</p>
                    <p className="mt-1 text-sm text-body-copy dark:text-slate-400">Swipe → inertia → gentle magnetic follow.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="u-glow relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-black/40">
                  <canvas
                    id="integrationSphere"
                    className="block w-full h-[360px] sm:h-[460px] lg:h-[520px]"
                  />

                  {/* Fallback grid (used if canvas fails) */}
                  <div id="integrationSphereFallback" className="hidden p-6">
                    <div className="grid grid-cols-5 gap-3 sm:grid-cols-8 md:grid-cols-10">
                      {INTEGRATION_SPHERE_LOGOS.map((it) => {
                        const pos = getIntegrationSpritePosition(it.spriteIndex, tile);
                        return (
                          <a
                            key={it.id}
                            href={it.href}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white/60 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-white/5"
                            aria-label={it.name}
                          >
                            <span className="sr-only">{it.name}</span>
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url(${INTEGRATION_SPRITE.url})`,
                                backgroundSize: bgSize,
                                backgroundPosition: `-${pos.x}px -${pos.y}px`,
                              }}
                            />
                          </a>
                        );
                      })}
                    </div>
                    <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
                      Canvas is unavailable — showing a static grid fallback.
                    </p>
                  </div>

                  {/* HUD */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 py-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm dark:bg-black/60">
                      <span className="inline-block h-2 w-2 rounded-full bg-neon-teal" />
                      Drag / swipe to spin
                    </div>
                    <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm dark:bg-black/60">
                      Click a logo to jump
                    </div>
                  </div>
                </div>

                {/* Noscript fallback */}
                <noscript>
                  <div className="mt-6 u-surface p-6 shadow-sm dark:border-white/10 dark:bg-obsidian">
                    <h3 className="text-lg font-bold text-headings dark:text-white">Integrations grid</h3>
                    <p className="mt-2 text-sm text-body-copy dark:text-slate-400">
                      JavaScript is disabled, so the 3D sphere is unavailable. Here is a static grid instead.
                    </p>
                    <div className="mt-5 grid grid-cols-5 gap-3 sm:grid-cols-8 md:grid-cols-10">
                      {INTEGRATION_SPHERE_LOGOS.map((it) => {
                        const pos = getIntegrationSpritePosition(it.spriteIndex, tile);
                        return (
                          <a
                            key={it.id}
                            href={it.href}
                            className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white/60 shadow-sm dark:border-white/10 dark:bg-white/5"
                            aria-label={it.name}
                          >
                            <span className="sr-only">{it.name}</span>
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url(${INTEGRATION_SPRITE.url})`,
                                backgroundSize: bgSize,
                                backgroundPosition: `-${pos.x}px -${pos.y}px`,
                              }}
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </noscript>
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

            <div className="mt-12 rounded-2xl bg-obsidian px-6 py-12 sm:px-12">
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

            {/* Directory (anchors that sync with the sphere links) */}
            <div className="mt-16">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-headings dark:text-white">Integration directory</h2>
                  <p className="mt-2 text-body-copy dark:text-slate-400">
                    Click any logo in the sphere to jump to its entry. Each entry shows status and category.
                  </p>
                </div>
                <Link
                  href="/developers"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
                >
                  Build your own via API
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {INTEGRATION_SPHERE_LOGOS.map((it) => {
                  const pos = getIntegrationSpritePosition(it.spriteIndex, 44);
                  return (
                    <div
                      key={it.id}
                      id={it.id}
                      className="u-surface p-5 shadow-sm scroll-mt-28 dark:border-white/10 dark:bg-obsidian"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="h-11 w-11 flex-none overflow-hidden rounded-2xl border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/5"
                          style={{
                            backgroundImage: `url(${INTEGRATION_SPRITE.url})`,
                            backgroundSize: `${INTEGRATION_SPRITE.columns * 44}px ${INTEGRATION_SPRITE.rows * 44}px`,
                            backgroundPosition: `-${pos.x}px -${pos.y}px`,
                          }}
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <a href={`#${it.id}`} className="font-semibold text-headings hover:text-neon-teal dark:text-white">
                            {it.name}
                          </a>
                          <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{it.category}</p>
                        </div>
                        <span
                          className={
                            it.status === 'Coming soon'
                              ? 'ml-auto inline-flex items-center rounded-full bg-neon-teal/10 px-3 py-1 text-xs font-semibold text-neon-teal'
                              : 'ml-auto inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                          }
                        >
                          {it.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
