'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'For Solopreneurs testing the waters.',
      price: { monthly: 0, yearly: 0 },
      features: ['Up to 5 Projects', '1 Team Member', 'Basic Analytics', '1GB Storage'],
      cta: 'Start for Free',
    },
    {
      name: 'Pro',
      description: 'For growing teams that need more power.',
      price: { monthly: 25, yearly: 20 },
      features: ['Everything in Free', 'Unlimited Projects', 'Up to 10 Team Members', 'Advanced Analytics', '10GB Storage', 'Priority Support'],
      isPopular: true,
      cta: 'Choose Pro',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs.',
      price: 'Contact Us',
      features: ['Everything in Pro', 'Unlimited Team Members', 'Dedicated Account Manager', 'Custom Integrations', 'SAML SSO'],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-headings dark:text-white">Find the perfect plan for your business</h2>
          <p className="mt-4 text-lg text-body-copy dark:text-slate-400 max-w-2xl mx-auto">
            Start for free and scale as you grow. All plans include a 14-day trial of our premium features.
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800/50 rounded-2xl p-8 border ${
                plan.isPopular ? 'border-neon-teal scale-105' : 'border-slate-200 dark:border-slate-800'
              } relative flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 bg-neon-teal text-black text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-headings dark:text-white">{plan.name}</h3>
              <p className="mt-2 text-body-copy dark:text-slate-400 flex-grow">{plan.description}</p>

              <div className="my-8">
                {typeof plan.price === 'object' ? (
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-headings dark:text-white">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                    <span className="ml-2 text-body-copy dark:text-slate-400">/ month</span>
                  </div>
                ) : (
                  <span className="text-4xl font-extrabold text-headings dark:text-white">{plan.price}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-neon-teal mr-3" />
                    <span className="text-body-copy dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.isPopular ? 'bg-neon-teal text-black hover:bg-opacity-80' : 'bg-slate-100 dark:bg-slate-700 text-headings dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
