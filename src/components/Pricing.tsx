'use client';
import React, { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { PRICING_TIERS, billingSuffix, formatTierPrice } from '@/lib/pricingData';

function openSignup() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('unobits:open-signup'));
}

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const billing = isYearly ? 'yearly' : 'monthly';
  const tiers = useMemo(() => PRICING_TIERS, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-headings dark:text-white">Find the perfect plan for your business</h2>
          <p className="mt-4 text-lg text-body-copy dark:text-slate-400 max-w-2xl mx-auto">
            Start free, consolidate your tools, and scale when you’re ready. Upgrade anytime.
          </p>
        </div>

        <div className="flex justify-center items-center mb-12">
          <span className="mr-4 font-semibold text-body-copy dark:text-slate-300">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} className="sr-only peer" />
            <div className="w-14 h-8 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-neon-teal"></div>
          </label>
          <span className="ml-4 font-semibold text-body-copy dark:text-slate-300">
            Yearly <span className="text-neon-teal">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white dark:bg-slate-800/50 rounded-2xl p-8 border ${
                tier.highlight ? 'border-neon-teal scale-[1.02]' : 'border-slate-200 dark:border-slate-800'
              } relative flex flex-col`}
            >
              {tier.highlight && (
                <div className="absolute top-0 -translate-y-1/2 bg-neon-teal text-black text-xs font-bold px-3 py-1 rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold text-headings dark:text-white">{tier.name}</h3>
              <p className="mt-2 text-body-copy dark:text-slate-400 flex-grow">{tier.description}</p>

              <div className="my-8">
                <div className="flex items-baseline gap-x-2">
                  <span className="text-5xl font-extrabold text-headings dark:text-white">
                    {formatTierPrice(tier, billing)}
                  </span>
                  {!tier.price.label && (
                    <span className="text-body-copy dark:text-slate-400">{billingSuffix(billing)}</span>
                  )}
                </div>
                {billing === 'yearly' && !tier.price.label && tier.price.yearly && (
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Billed annually.</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-neon-teal mr-3" />
                    <span className="text-body-copy dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.cta.external ? (
                <a
                  href={tier.cta.href}
                  className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors text-center ${
                    tier.highlight
                      ? 'bg-neon-teal text-black hover:bg-opacity-80'
                      : 'bg-slate-100 dark:bg-slate-700 text-headings dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
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
                  className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors text-center ${
                    tier.highlight
                      ? 'bg-neon-teal text-black hover:bg-opacity-80'
                      : 'bg-slate-100 dark:bg-slate-700 text-headings dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {tier.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
