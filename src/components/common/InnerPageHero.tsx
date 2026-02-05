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
};

export default function InnerPageHero({ title, subtitle, breadcrumbs }: InnerPageHeroProps) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-4">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl lg:flex-shrink-0 lg:pt-8">
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