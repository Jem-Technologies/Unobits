import InnerPageHero from '@/components/common/InnerPageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingPageContent from '@/components/pricing/PricingPageContent';

export default function PricingPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that’s right for your business. No per‑seat pricing until you pass 10 users (Enterprise includes unlimited seats)."
          breadcrumbs={[{ name: 'Pricing', href: '/pricing' }]}
        />

        <PricingPageContent />

      </main>
      <Footer />
    </div>
  );
}
