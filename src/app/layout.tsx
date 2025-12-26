import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "UNOBITS | The One Operating System for Your Entire Business.",
  description:
    "Replace 15+ disconnected apps. From Email and CRM to Project Management and Docs—UNOBITS is the only tab you need open.",
};

const THEME_INIT_SCRIPT = `
(() => {
  try {
    const saved = localStorage.getItem('theme');
    const theme = saved === 'light' ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;

    // Default to dark for first-time visitors.
    if (!saved) localStorage.setItem('theme', theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
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
        <Script id="unobits-theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
      </head>
      <body className={`${poppins.className} bg-black text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
