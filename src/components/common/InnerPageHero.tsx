// src/components/common/InnerPageHero.tsx
'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

type Breadcrumb = {
  name: string;
  href: string;
};

type InnerPageHeroProps = {
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  /** Optional hero visual image (used heavily on product pages). */
  imageUrl?: string;
  imageAlt?: string;
  /** Optional visual theme key for default illustrations. */
  visual?: 'communication' | 'productivity' | 'operations' | 'growth';
};

function resolveVisualKey(title: string, breadcrumbs: Breadcrumb[]): NonNullable<InnerPageHeroProps['visual']> {
  const t = title.toLowerCase();
  const bc = (breadcrumbs?.[0]?.name ?? '').toLowerCase();

  if (t.includes('integration') || bc.includes('integration')) return 'operations';
  if (t.includes('developer') || t.includes('api') || t.includes('webhook')) return 'operations';
  if (t.includes('security') || t.includes('status')) return 'operations';
  if (t.includes('pricing') || t.includes('careers') || t.includes('solutions')) return 'growth';
  if (t.includes('resources') || t.includes('changelog')) return 'productivity';
  if (t.includes('contact') || t.includes('community') || t.includes('help') || t.includes('about')) return 'communication';
  if (t.includes('portal')) return 'productivity';
  return 'productivity';
}

export default function InnerPageHero({ title, subtitle, breadcrumbs, imageUrl, imageAlt, visual }: InnerPageHeroProps) {
  const visualKey = visual ?? resolveVisualKey(title, breadcrumbs);
  const fallbackImageUrl = `/illustrations/pillars/${visualKey}.svg`;
  const resolvedImageUrl = imageUrl ?? fallbackImageUrl;
  const resolvedImageAlt = imageAlt ?? `${title} illustration`;

  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:flex lg:items-center lg:gap-x-12 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl lg:flex-shrink-0 lg:pt-2">
          {/* Breadcrumbs */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <div>
                  <Link href="/" className="text-sm font-medium text-gray-400 hover:text-gray-200">
                    Home
                  </Link>
                </div>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
                    <Link
                      href={crumb.href}
                      className="ml-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      aria-current={crumb.href ? 'page' : undefined}
                    >
                      {crumb.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="mt-10 text-4xl font-bold tracking-tight text-headings dark:text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* Visual panel (ensures every page has a strong visual anchor). */}
        <div className="mx-auto mt-12 w-full max-w-2xl lg:mt-0 lg:mx-0 lg:max-w-none lg:flex-1">
          <div className="relative">
            {/* Decorative orbits */}
            <svg
              className="pointer-events-none absolute -left-10 -top-10 h-[260px] w-[260px] opacity-30 blur-[0.2px]"
              viewBox="0 0 260 260"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="130" cy="130" r="98" stroke="rgba(0,212,255,0.55)" strokeWidth="2" />
              <circle cx="130" cy="130" r="72" stroke="rgba(79,70,229,0.35)" strokeWidth="2" />
              <circle cx="130" cy="130" r="122" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            </svg>
            <svg
              className="pointer-events-none absolute -bottom-14 -right-10 h-[320px] w-[320px] opacity-25"
              viewBox="0 0 320 320"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M30 200C90 70 210 70 290 200"
                stroke="rgba(0,212,255,0.35)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 220C88 86 220 86 302 220"
                stroke="rgba(79,70,229,0.25)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="u-glow u-float u-scanline relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
              {/* Soft gradient wash */}
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 15% 20%, rgba(0, 212, 255, 0.22), transparent 45%), radial-gradient(circle at 75% 30%, rgba(79, 70, 229, 0.18), transparent 55%), radial-gradient(circle at 55% 85%, rgba(0, 212, 255, 0.10), transparent 55%)',
                }}
              />

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/10 dark:bg-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolvedImageUrl}
                  alt={resolvedImageAlt}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
              </div>

              <div className="relative mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-neon-teal/10 px-3 py-1 text-xs font-semibold text-neon-teal">
                  Visual OS
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {visualKey}
                </span>
                <span className="ml-auto hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="inline-block h-2 w-2 rounded-full bg-neon-teal" />
                  Interactive-ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle Gradient */}
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu blur-md"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-neon-teal to-electric-indigo opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}