// src/lib/siteConfig.ts

/**
 * Central place for brand/site constants.
 *
 * This marketing site is statically exported (next.config.ts -> output: 'export'),
 * so values should be safe to inline at build time.
 */

export const SITE_NAME = 'UNOBITS';

// Public site URL (used for metadata, social previews, etc.)
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://unobits.com';

// Main app origin (where login/signup should send users)
export const APP_ORIGIN =
  process.env.NEXT_PUBLIC_APP_ORIGIN?.trim() || 'https://unobits.app';

// Customer support (shown across the site)
export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || 'support@unobits.app';

// Use a reserved 555 number by default. Replace via NEXT_PUBLIC_SUPPORT_PHONE.
export const SUPPORT_PHONE =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE?.trim() || '+1 (555) 0100';

export const SALES_EMAIL =
  process.env.NEXT_PUBLIC_SALES_EMAIL?.trim() || 'sales@unobits.app';

// Socials (optional)
export const SOCIAL = {
  x: process.env.NEXT_PUBLIC_X_URL?.trim() || 'https://x.com/unobits',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || 'https://www.linkedin.com/company/unobits',
  github: process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || 'https://github.com/unobits',
};

// A light-weight, public-facing address block.
export const COMPANY = {
  legalName: 'UNOBITS, Inc.',
  // Keep as a generic placeholder to avoid accidental misinformation.
  addressLine1: process.env.NEXT_PUBLIC_COMPANY_ADDRESS_LINE1?.trim() || 'Global (Remote‑first)',
  addressLine2: process.env.NEXT_PUBLIC_COMPANY_ADDRESS_LINE2?.trim() || 'Serving customers worldwide',
};
