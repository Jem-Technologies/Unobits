import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "UNOBITS | The One Operating System for Your Entire Business.",
  description: "Replace 15+ disconnected apps. From Email and CRM to Project Management and Docs—UNOBITS is the only tab you need open.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="unobits:app-origin" content={process.env.NEXT_PUBLIC_APP_ORIGIN ?? 'https://unobits.app'} />
      </head>
      <body className={`${poppins.className} bg-white dark:bg-black text-body-copy`}>
        {children}
      </body>
    </html>
  );
}
