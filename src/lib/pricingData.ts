// src/lib/pricingData.ts

import { SUPPORT_PHONE } from './siteConfig';

export type BillingCycle = 'monthly' | 'yearly';

export type PricingTier = {
  name: string;
  id: string;
  highlight?: boolean;
  description: string;
  price: {
    monthly?: number;
    yearly?: number;
    label?: string; // For custom/enterprise
  };
  features: string[];
  cta: {
    label: string;
    href?: string;
    action?: 'signup' | 'call';
    external?: boolean;
  };
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-free',
    description: 'For individuals, early projects, and trying the UNOBITS ecosystem.',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Unified dashboard (core)',
      'Chat + inbox for up to 3 teammates',
      'Projects & boards (basic)',
      'Notes + files (5GB)',
      'Community support',
    ],
    cta: { label: 'Start Free', action: 'signup', href: '/pricing' },
  },
  {
    name: 'Basic',
    id: 'tier-basic',
    description: 'For growing teams who want a single OS for daily work.',
    price: { monthly: 12, yearly: 115 },
    features: [
      'Everything in Free',
      'Email integration + shared inbox',
      'Time tracking + reporting',
      'Automations (starter)',
      'Clients & CRM (core)',
      'Standard support',
    ],
    cta: { label: 'Choose Basic', action: 'signup', href: '/pricing' },
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    highlight: true,
    description: 'For power users, agencies, and teams that run everything inside UNOBITS.',
    price: { monthly: 25, yearly: 240 },
    features: [
      'Everything in Basic',
      'Advanced CRM + sequences',
      'Builder + web elements',
      'Inventory + finance tools',
      'Digital Twin + integrations',
      'Role‑based access & advanced permissions',
      'Priority support',
    ],
    cta: { label: 'Go Pro', action: 'signup', href: '/pricing' },
  },
  {
    name: 'Custom',
    id: 'tier-custom',
    description: 'For enterprise requirements, bespoke workflows, and dedicated rollout support.',
    price: { label: 'Let’s talk' },
    features: [
      'Custom onboarding & migration',
      'Dedicated account team',
      'SLA + security review support',
      'Custom roles, portals, & environments',
      'Advanced integrations & data exports',
      'Team training sessions',
    ],
    cta: {
      label: `Call Support: ${SUPPORT_PHONE}`,
      action: 'call',
      href: `tel:${SUPPORT_PHONE.replace(/[^+\d]/g, '')}`,
      external: true,
    },
  },
];

export function formatTierPrice(tier: PricingTier, billing: BillingCycle): string {
  if (tier.price.label) return tier.price.label;
  const raw = billing === 'yearly' ? tier.price.yearly : tier.price.monthly;
  if (typeof raw !== 'number') return '—';
  return `$${raw}`;
}

export function billingSuffix(billing: BillingCycle): string {
  return billing === 'yearly' ? '/yr' : '/mo';
}
