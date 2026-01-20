// src/lib/pricingData.ts

import { SUPPORT_PHONE } from './siteConfig';

export type BillingCycle = 'monthly' | 'yearly';

export type PricingTier = {
  // Required schema (configurable pricing component)
  planName: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];

  // UI + behavior metadata
  id: string;
  highlight?: boolean;
  description: string;
  priceLabel?: string; // For custom/enterprise
  cta: {
    label: string;
    href?: string;
    action?: 'signup' | 'call';
    external?: boolean;
  };
};

export const PRICING_TIERS: PricingTier[] = [
  {
    planName: 'Basic',
    id: 'tier-basic',
    description: 'For teams that want the full UNOBITS workflow (without tool sprawl).',
    monthlyPrice: 12,
    annualPrice: 115,
    features: [
      'Unified dashboard + global search',
      'Chat + inbox workflows (assign, tag, SLA)',
      'Projects, boards, and time tracking',
      'Docs, files, and team notes',
      'CRM (core) + basic reporting',
      'Standard support',
    ],
    cta: { label: 'Start free trial', action: 'signup', href: '/pricing' },
  },
  {
    planName: 'Pro',
    id: 'tier-pro',
    highlight: true,
    description: 'For teams running revenue, delivery, and ops in a single connected OS.',
    monthlyPrice: 25,
    annualPrice: 240,
    features: [
      'Everything in Basic, plus:',
      'Advanced CRM + sequences & email marketing',
      'Funnels, onboarding flows, and automation triggers',
      'Builder + client-facing web elements',
      'Finance & inventory tooling',
      'Digital Twin reporting + integrations',
      'Priority support',
    ],
    cta: { label: 'Start free trial', action: 'signup', href: '/pricing' },
  },
  {
    planName: 'Enterprise',
    id: 'tier-enterprise',
    description: 'For org-wide rollouts that need advanced security, governance, and controls.',
    monthlyPrice: 49,
    annualPrice: 470,
    features: [
      'Everything in Pro, plus:',
      'Advanced roles, permissions, and audit visibility',
      'SAML/SSO options and provisioning support',
      'Dedicated environments + data export controls',
      'Higher limits for automation, storage, and reporting',
      'Priority onboarding and solution design',
    ],
    cta: { label: 'Start free trial', action: 'signup', href: '/pricing' },
  },
  {
    planName: 'Custom',
    id: 'tier-custom',
    description: 'For bespoke workflows, regulated environments, and dedicated rollout support.',
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: 'Let’s talk',
    features: [
      'Custom onboarding, migration, and training',
      'Dedicated account team + rollout milestones',
      'SLA options + security review support',
      'Custom roles, portals, and dedicated environments',
      'Advanced integrations, data exports, and governance',
      'Ongoing solution design sessions',
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
  if (tier.priceLabel) return tier.priceLabel;
  const raw = billing === 'yearly' ? tier.annualPrice : tier.monthlyPrice;
  return typeof raw === 'number' ? `$${raw}` : '—';
}

export function billingSuffix(billing: BillingCycle): string {
  return billing === 'yearly' ? '/yr' : '/mo';
}
