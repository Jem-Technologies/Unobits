// src/components/pricing/PricingPageContent.tsx
'use client';

import { Fragment, useMemo, useState } from 'react';
import Link from 'next/link';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { PRICING_TIERS, billingSuffix, formatTierPrice, type BillingCycle } from '@/lib/pricingData';
import { SUPPORT_EMAIL, SUPPORT_PHONE } from '@/lib/siteConfig';

type TierName = 'Basic' | 'Pro' | 'Enterprise' | 'Custom';

const frequencies: { value: BillingCycle; label: string; suffix: string }[] = [
  { value: 'monthly', label: 'Monthly', suffix: '/month' },
  { value: 'yearly', label: 'Yearly', suffix: '/year' },
];

const comparisonSections: Array<{
  name: string;
  features: Array<{ name: string; tiers: Record<TierName, boolean | string> }>;
}> = [
  {
    name: 'Core Platform',
    features: [
      { name: 'Unified dashboard + global search', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Workspace (projects, boards, office)', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Files, docs, and notes', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Calendar + time tracking', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
    ],
  },
  {
    name: 'Communication',
    features: [
      { name: 'Chat', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Shared Inbox workflows', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Email (connected accounts)', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Video calls + meeting notes in context', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Social media inbox integrations', tiers: { Basic: 'Coming soon', Pro: 'Coming soon', Enterprise: 'Coming soon', Custom: 'Coming soon' } },
    ],
  },
  {
    name: 'Clients & Business',
    features: [
      { name: 'CRM', tiers: { Basic: 'Core', Pro: true, Enterprise: true, Custom: true } },
      { name: 'Onboarding', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Sequences + email marketing', tiers: { Basic: 'Starter', Pro: true, Enterprise: true, Custom: true } },
      { name: 'Builder + web elements', tiers: { Basic: false, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Finance + inventory + add‑ons', tiers: { Basic: false, Pro: true, Enterprise: true, Custom: true } },
    ],
  },
  {
    name: 'Digital Twin',
    features: [
      { name: 'Reports', tiers: { Basic: true, Pro: true, Enterprise: true, Custom: true } },
      { name: 'Integrations + API access', tiers: { Basic: true, Pro: true, Enterprise: 'Advanced', Custom: 'Advanced + custom' } },
    ],
  },
  {
    name: 'Support & Security',
    features: [
      { name: 'Support', tiers: { Basic: 'Standard', Pro: 'Priority', Enterprise: 'Enterprise', Custom: 'Dedicated' } },
      { name: 'Roles + permissions', tiers: { Basic: true, Pro: true, Enterprise: 'Advanced', Custom: 'Custom' } },
      { name: 'SSO / provisioning options', tiers: { Basic: false, Pro: 'Optional', Enterprise: true, Custom: true } },
      { name: 'Client portal + team portal', tiers: { Basic: 'Limited', Pro: true, Enterprise: true, Custom: true } },
      { name: 'Audit logs + governance controls', tiers: { Basic: false, Pro: 'Optional', Enterprise: true, Custom: true } },
    ],
  },
];

function openSignup() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('unobits:open-signup'));
}

function classNames(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPageContent() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const tiers = useMemo(() => PRICING_TIERS, []);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base font-semibold leading-7 text-neon-teal">Save 20% with yearly billing</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-headings dark:text-white sm:text-5xl">
            Plans that scale from "single tab" to "entire company OS"
          </h1>
          <p className="mt-6 text-lg leading-8 text-body-copy dark:text-slate-400">
            Start with a free trial on any plan, then scale into deeper CRM, automations, portals, reporting, and Digital Twin capabilities. No per‑seat pricing until you pass 10 users — and Enterprise includes unlimited seats.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <a className="font-semibold text-headings dark:text-white hover:text-neon-teal" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            <span className="hidden sm:inline text-slate-400">•</span>
            <a
              className="font-semibold text-headings dark:text-white hover:text-neon-teal"
              href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, '')}`}
            >
              {SUPPORT_PHONE}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/templates" className="font-semibold text-headings dark:text-white hover:text-neon-teal">
            Browse templates
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/reviews" className="font-semibold text-headings dark:text-white hover:text-neon-teal">
            Read reviews
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/tab-overload" className="font-semibold text-headings dark:text-white hover:text-neon-teal">
            Tab overload guide
          </Link>
        </div>

        {/* Billing toggle */}
        <div className="mt-16 flex justify-center">
          <div className="relative grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-white/10">
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

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.highlight ? 'ring-2 ring-neon-teal' : 'ring-1 ring-gray-200 dark:ring-white/10',
                tier.planName === 'Custom' ? 'bg-obsidian text-white' : 'bg-white dark:bg-white/5',
                'rounded-3xl p-8 xl:p-10 transform hover:scale-[1.02] transition-transform duration-300'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h2 id={tier.id} className="text-lg font-semibold leading-8">
                  {tier.planName}
                </h2>
                {tier.highlight && (
                  <p className="rounded-full bg-neon-teal/10 px-2.5 py-1 text-xs font-semibold leading-5 text-neon-teal">
                    Most popular
                  </p>
                )}
              </div>

              <p className={classNames('mt-4 text-sm leading-6', tier.planName === 'Custom' ? 'text-gray-300' : 'text-body-copy dark:text-slate-400')}>
                {tier.description}
              </p>

              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight">
                  {formatTierPrice(tier, frequency.value)}
                </span>
                {!tier.priceLabel && (
                  <span className={classNames('text-sm font-semibold leading-6', tier.planName === 'Custom' ? 'text-gray-300' : 'text-body-copy dark:text-slate-400')}>
                    {billingSuffix(frequency.value)}
                  </span>
                )}
              </p>

              {tier.cta.external ? (
                <a
                  href={tier.cta.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-teal',
                    tier.highlight ? 'bg-neon-teal text-black hover:bg-opacity-80' : 'bg-white text-obsidian hover:bg-slate-200'
                  )}
                >
                  {tier.cta.label}
                </a>
              ) : (
                <Link
                  href={tier.cta.href ?? '/pricing'}
                  onClick={(e) => {
                    if (tier.cta.action === 'signup') {
                      e.preventDefault();
                      openSignup();
                    }
                  }}
                  aria-describedby={tier.id}
                  className={classNames(
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-teal',
                    tier.highlight ? 'bg-neon-teal text-black hover:bg-opacity-80' : 'bg-obsidian text-white hover:bg-opacity-90'
                  )}
                >
                  {tier.cta.label}
                </Link>
              )}

              <ul
                role="list"
                className={classNames('mt-8 space-y-3 text-sm leading-6', tier.planName === 'Custom' ? 'text-gray-300' : 'text-body-copy dark:text-slate-400')}
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

        {/* Feature comparison */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-headings dark:text-white sm:text-4xl">
              Compare features
            </h2>
            <p className="mt-4 text-lg leading-8 text-body-copy dark:text-slate-400">
              A clear view of what’s included at each level.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-xl ring-1 ring-gray-200 dark:ring-white/10">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10">
              <thead className="bg-gray-50 dark:bg-white/5">
                <tr>
                  <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-headings dark:text-white lg:w-1/3">
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-headings dark:text-white">
                      {tier.planName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-obsidian">
                {comparisonSections.map((section) => (
                  <Fragment key={section.name}>
                    <tr className="bg-gray-50 dark:bg-white/5">
                      <th
                        scope="colgroup"
                        colSpan={1 + tiers.length}
                        className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-headings dark:text-white"
                      >
                        {section.name}
                      </th>
                    </tr>

                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <td className="py-4 pl-6 pr-3 text-sm font-medium text-headings dark:text-white">
                          {feature.name}
                        </td>

                        {tiers.map((tier) => {
                          const v = feature.tiers[tier.planName as TierName];
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

          <div className="mt-10 text-center">
            <p className="text-sm text-body-copy dark:text-slate-400">
              Need a custom rollout, migration, or dedicated environment?{' '}
              <Link className="font-semibold hover:text-neon-teal" href="/contact">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
