// src/lib/seo.ts

import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/siteConfig';

export const DEFAULT_OG_IMAGE = '/og.png';

/**
 * Convert a relative path ("/pricing") into an absolute URL using SITE_URL.
 * If a full URL is provided, it is returned unchanged.
 */
export function absoluteUrl(pathOrUrl: string): string {
  const input = (pathOrUrl || '').trim();

  if (!input) {
    const base = SITE_URL.replace(/\/+$/, '');
    return `${base}/`;
  }

  // If it's already an absolute URL, keep it as-is.
  try {
    const u = new URL(input);
    return u.toString();
  } catch {
    // Not an absolute URL — treat as a path.
  }

  const base = SITE_URL.replace(/\/+$/, '');
  const path = input.startsWith('/') ? input : `/${input}`;
  return `${base}${path}`;
}

export type BuildMetadataArgs = {
  /** Page title *without* the site name suffix (RootLayout adds the template). */
  title: string;
  description: string;
  /** Canonical path (e.g. "/pricing"). Defaults to "/". */
  path?: string;
  /** Optional keywords to add to the page. */
  keywords?: string[];
  /** OG image path or absolute URL. Defaults to /og.png */
  image?: string;
  /** Set true for non-indexed pages. */
  noIndex?: boolean;
  /** OpenGraph type. */
  type?: 'website' | 'article';
};

export function buildMetadata(args: BuildMetadataArgs): Metadata {
  const {
    title,
    description,
    path = '/',
    keywords = [],
    image = DEFAULT_OG_IMAGE,
    noIndex = false,
    type = 'website',
  } = args;

  const pageTitle = title.trim();
  const brandedTitle =
    pageTitle.toLowerCase().includes(SITE_NAME.toLowerCase())
      ? pageTitle
      : `${pageTitle} | ${SITE_NAME}`;

  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    alternates: {
      canonical,
    },
    keywords,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      title: brandedTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: brandedTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [ogImage],
    },
  };
}
