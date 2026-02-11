import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import HelpCenterContent from '@/components/help/HelpCenterContent';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Help Center',
  description:
    'Guides and help articles for using UNOBITS — from onboarding to automations, workflows, and best practices.',
  path: '/help-center',
  keywords: [
    'help center',
    'support docs',
    'UNOBITS guides',
  ],
});


export default function HelpCenterPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Help Center"
          subtitle="Get answers, learn best practices, and contact support."
          breadcrumbs={[{ name: 'Help Center', href: '/help-center' }]}
        />

        <HelpCenterContent />
      </main>
      <Footer />
    </div>
  );
}
