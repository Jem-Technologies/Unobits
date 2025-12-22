// src/components/pricing/PricingPageContent.tsx
'use client';

import { useState, Fragment } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '#',
    price: { monthly: '$0', annually: '$0' },
    description: 'For solopreneurs and hobbyists getting started.',
    features: ['Up to 5 Projects', 'Basic Analytics', 'Community Support'],
    mostPopular: false,
    dark: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: { monthly: '$25', annually: '$240' },
    description: 'For growing teams that need more power and features.',
    features: [
      'Everything in Free, plus:',
      'Unlimited Projects',
      'Advanced Analytics & Reporting',
      'Priority Email Support',
      'Team Collaboration Tools',
    ],
    mostPopular: true,
    dark: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: 'Custom', annually: 'Custom' },
    description: 'For large organizations with complex needs.',
    features: [
      'Everything in Pro, plus:',
      'Dedicated Account Manager',
      'Single Sign-On (SSO)',
      'Enterprise-grade Security & Compliance',
      'Custom Integrations & API Access',
    ],
    mostPopular: false,
    dark: true,
  },
];

const sections = [
  {
    name: 'Core Features',
    features: [
      { name: 'Project Management', tiers: { Free: true, Pro: true, Enterprise: true } },
      { name: 'Team Chat', tiers: { Free: true, Pro: true, Enterprise: true } },
      { name: 'Document Collaboration', tiers: { Free: 'Basic', Pro: 'Advanced', Enterprise: 'Advanced' } },
      { name: 'Cloud Storage (per user)', tiers: { Free: '2GB', Pro: '1TB', Enterprise: 'Unlimited' } },
    ],
  },
  {
    name: 'Support & Security',
    features: [
      { name: 'Community Support', tiers: { Free: true, Pro: true, Enterprise: true } },
      { name: 'Priority Email Support', tiers: { Free: false, Pro: true, Enterprise: true } },
      { name: 'Dedicated Account Manager', tiers: { Free: false, Pro: false, Enterprise: true } },
      { name: 'Two-Factor Authentication (2FA)', tiers: { Free: true, Pro: true, Enterprise: true } },
      { name: 'Single Sign-On (SSO)', tiers: { Free: false, Pro: false, Enterprise: true } },
      { name: 'SOC2 Compliance', tiers: { Free: false, Pro: false, Enterprise: true } },
    ],
  },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPageContent() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base font-semibold leading-7 text-neon-teal">Save 20% with yearly billing</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-headings dark:text-white sm:text-5xl">
            The right plan for your team
          </h2>
        </div>

        {/* Toggle */}
        <div className="mt-16 flex justify-center">
          <div className="relative grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-slate-700">
            <span
              className="absolute bg-neon-teal/50 dark:bg-neon-teal/30 rounded-full transition-transform duration-300 ease-in-out"
              style={{
                width: 'calc(50% - 2px)',
                height: 'calc(100% - 4px)',
                transform: `translateX(${frequency.value === 'monthly' ? '2px' : '100%'})`,
              }}
            />
            {frequencies.map((option) => (
              <button
                key={option.value}
                onClick={() => setFrequency(option)}
                className={classNames(
                  'cursor-pointer rounded-full px-4 py-2 text-sm transition-colors duration-300 z-10',
                  frequency.value === option.value
                    ? 'text-headings dark:text-white'
                    : 'text-body-copy dark:text-slate-400 hover:text-headings dark:hover:text-white'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-neon-teal' : 'ring-1 ring-gray-200 dark:ring-slate-800',
                tier.dark ? 'bg-obsidian text-white' : 'bg-white dark:bg-slate-800/50',
                'rounded-3xl p-8 xl:p-10 transform hover:scale-105 transition-transform duration-300'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8">
                  {tier.name}
                </h3>
                {tier.mostPopular && (
                  <p className="rounded-full bg-neon-teal/10 px-2.5 py-1 text-xs font-semibold leading-5 text-neon-teal">
                    Most popular
                  </p>
                )}
              </div>
              <p className={classNames('mt-4 text-sm leading-6', tier.dark ? 'text-gray-300' : 'text-body-copy dark:text-slate-400')}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  {tier.price[frequency.value as keyof typeof tier.price]}
                </span>
                {typeof tier.price[frequency.value as keyof typeof tier.price] === 'string' && tier.price[frequency.value as keyof typeof tier.price].startsWith('$') && (
                  <span className="text-sm font-semibold leading-6 text-body-copy dark:text-slate-400">{frequency.priceSuffix}</span>
                )}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-neon-teal text-black shadow-sm hover:bg-opacity-80'
                    : 'bg-white/10 text-white ring-1 ring-inset ring-white/10 hover:ring-white/20',
                  tier.dark
                    ? 'bg-white text-obsidian hover:bg-slate-200'
                    : 'bg-obsidian text-white hover:bg-opacity-90',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-teal'
                )}
              >
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get started'}
              </a>
              <ul
                role="list"
                className={classNames(
                  'mt-8 space-y-3 text-sm leading-6',
                  tier.dark ? 'text-gray-300' : 'text-body-copy dark:text-slate-400'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-neon-teal" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-headings dark:text-white sm:text-4xl">
                Compare all features
              </h2>
              <p className="mt-4 text-lg leading-8 text-body-copy dark:text-slate-400">
                A detailed look at what's included in each plan.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-xl ring-1 ring-gray-200 dark:ring-slate-800">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-800">
                <thead className="bg-gray-50 dark:bg-slate-800/50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-headings dark:text-white lg:w-1/4">Feature</th>
                    {tiers.map(tier => (
                      <th key={tier.id} scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-headings dark:text-white">{tier.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <tr className="bg-gray-50 dark:bg-slate-800/50">
                      <th
                        scope="colgroup"
                        /* If you ever change tier count, use 1 + tiers.length */
                        colSpan={4}
                        className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-headings dark:text-white"
                      >
                        {section.name}
                      </th>
                    </tr>

                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-headings dark:text-white">
                          {feature.name}
                        </td>

                        {tiers.map((tier) => {
                          const v = feature.tiers[tier.name as keyof typeof feature.tiers];
                          return (
                            <td
                              key={`${tier.id}-${feature.name}`}
                              className="whitespace-nowrap px-3 py-4 text-center text-sm text-body-copy dark:text-slate-400"
                            >
                              {typeof v === 'boolean' ? (
                                v ? (
                                  <CheckIcon className="mx-auto h-5 w-5 text-neon-teal" aria-hidden="true" />
                                ) : (
                                  <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                )
                              ) : (
                                <span>{v}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}