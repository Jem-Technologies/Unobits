import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/siteConfig';
import { PRODUCT_SLUGS } from '@/lib/productData';
import { SOLUTION_SLUGS } from '@/lib/solutionsData';
import { RESOURCE_CATEGORIES, RESOURCE_SLUGS } from '@/lib/resourcesData';
import { slugify } from '@/lib/slugify';
import { ALTERNATIVE_SLUGS } from '@/lib/alternativesData';
import { TEMPLATE_SLUGS } from '@/lib/templatesData';

const base = SITE_URL.replace(/\/+$/, '');

const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = [
    '/',
    '/product',
    '/solutions',
    '/pricing',
    '/integrations',
    '/resources',
    '/security',
    '/about',
    '/contact',
    '/help-center',
    '/developers',
    '/community',
    '/status',
    '/team-portal',
    '/client-portal',
    '/careers',
    '/changelog',
    '/legal',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
    '/tab-overload',
    '/replace-10-business-subscriptions',
    '/one-app-for-crm-and-shared-inbox',
    '/alternatives',
    '/templates',
    '/reviews',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: url(p),
    lastModified,
    changeFrequency: p === '/' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1 : 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = PRODUCT_SLUGS.map((slug) => ({
    url: url(`/product/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const solutionsEntries: MetadataRoute.Sitemap = SOLUTION_SLUGS.map((slug) => ({
    url: url(`/solutions/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const resourceEntries: MetadataRoute.Sitemap = RESOURCE_SLUGS.map((slug) => ({
    url: url(`/resources/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const resourceCategoryEntries: MetadataRoute.Sitemap = RESOURCE_CATEGORIES.map((c) => ({
    url: url(`/resources/category/${slugify(c)}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const alternativesEntries: MetadataRoute.Sitemap = ALTERNATIVE_SLUGS.map((slug) => ({
    url: url(`/alternatives/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const templatesEntries: MetadataRoute.Sitemap = TEMPLATE_SLUGS.map((slug) => ({
    url: url(`/templates/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...productEntries,
    ...solutionsEntries,
    ...resourceEntries,
    ...resourceCategoryEntries,
    ...alternativesEntries,
    ...templatesEntries,
  ];
}
