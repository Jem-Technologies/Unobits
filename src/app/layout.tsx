import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

import { COMPANY, SITE_NAME, SITE_URL, SOCIAL, SUPPORT_EMAIL, SUPPORT_PHONE } from '@/lib/siteConfig';
import { absoluteUrl, DEFAULT_OG_IMAGE } from '@/lib/seo';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const DEFAULT_DESCRIPTION =
  'Run your whole business in one connected OS: email, CRM, projects, docs, chat, automations, finance, portals, reporting—and more. Built to scale for any company size, industry, and data volume.';

const DEFAULT_KEYWORDS = [
  'tab overload',
  'subscription fatigue',
  'tool sprawl',
  'business operating system',
  'all-in-one business software',
  'one app for business',
  'CRM',
  'project management',
  'shared inbox',
  'team chat',
  'docs',
  'automations',
  'invoicing',
  'inventory',
  'ERP alternative',
  'Zoho alternative',
  'Odoo alternative',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      'Kill tab overload with one platform: CRM, shared inbox, projects, docs, chat, automations, reporting, portals, and more.',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — One OS for your business`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description:
      'Replace app sprawl with one connected OS: CRM, shared inbox, projects, docs, chat, automations, reporting, portals, and more.',
    images: [DEFAULT_OG_IMAGE],
  },
};

const THEME_INIT_SCRIPT = `
(() => {
  try {
    const storageKey = 'theme';
    const root = document.documentElement;
    const saved = localStorage.getItem(storageKey);
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = saved === 'light' || saved === 'dark' ? saved : (prefersDark ? 'dark' : 'light');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    root.style.colorScheme = theme;
    root.style.backgroundColor = theme === 'dark' ? '#000' : '#fff';
    if (!saved) localStorage.setItem(storageKey, theme);
  } catch (e) {
    // Dark-first fallback.
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    document.documentElement.style.backgroundColor = '#000';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = SITE_URL.replace(/\/+$/, '');

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: baseUrl,
    logo: absoluteUrl('/brand/unobits-mark-192.png'),
    sameAs: [SOCIAL.x, SOCIAL.linkedin, SOCIAL.github].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SUPPORT_EMAIL,
        telephone: SUPPORT_PHONE,
        availableLanguage: ['English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.addressLine1,
      addressLocality: COMPANY.addressLine2,
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: baseUrl,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="unobits:app-origin" content={process.env.NEXT_PUBLIC_APP_ORIGIN ?? 'https://unobits.app'} />
        {/* Render-blocking theme init to prevent FOUC and hydration mismatches. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        {/* Structured data for brand knowledge panels + rich results. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body className={`${dmSans.className} bg-white text-slate-900 dark:bg-black dark:text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
