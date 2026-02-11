import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import ContactForm from '@/components/contact/ContactForm';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Talk to UNOBITS — ask questions, request a demo, or get support. We’ll help you reduce tool sprawl and run everything in one OS.',
  path: '/contact',
  keywords: [
    'contact UNOBITS',
    'support',
    'demo',
    'sales',
  ],
});


export default function ContactPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Contact"
          subtitle="Support, Custom plans, integrations, and partnership inquiries."
          breadcrumbs={[{ name: 'Contact', href: '/contact' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ContactForm />
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-obsidian px-6 py-12 sm:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white">Looking for answers fast?</h2>
                <p className="mt-4 text-gray-300">
                  Visit the Help Center for common questions and rollout best practices.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/help-center"
                    className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80"
                  >
                    Open Help Center
                  </Link>
                  <Link
                    href="/security"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Security overview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
