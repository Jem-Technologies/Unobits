import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/siteConfig";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | The All‑in‑One Operating System for Your Entire Business`,
  description:
    "Run your whole business in one connected OS: email, CRM, projects, docs, chat, automations, finance, portals, reporting—and more. Built to scale for any company size, industry, and data volume.",
  applicationName: SITE_NAME,
  keywords: [
    'business operating system',
    'all-in-one business software',
    'CRM',
    'project management',
    'shared inbox',
    'team chat',
    'docs',
    'automations',
    'invoicing',
    'inventory',
    'ERP alternative',
    'SaaS alternative',
  ],
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
    title: `${SITE_NAME} | The All‑in‑One Operating System for Your Entire Business`,
    description:
      'Replace app sprawl with one platform that scales: CRM, email, projects, docs, chat, automations, finance, portals, reporting, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | The All‑in‑One Operating System for Your Entire Business`,
    description:
      'Run your entire business in one OS—CRM, email, projects, docs, chat, automations, finance, reporting, and more.',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="unobits:app-origin" content={process.env.NEXT_PUBLIC_APP_ORIGIN ?? 'https://unobits.app'} />
        {/* Render-blocking theme init to prevent FOUC and hydration mismatches. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${dmSans.className} bg-white text-slate-900 dark:bg-black dark:text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
