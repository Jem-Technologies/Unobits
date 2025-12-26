import InnerPageHero from '@/components/common/InnerPageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingPageContent from '@/components/pricing/PricingPageContent';

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that’s right for your business. No hidden fees, no surprises."
          breadcrumbs={[{ name: 'Pricing', href: '/pricing' }]}
        />

        <PricingPageContent />

      </main>
      <Footer />
    </div>
  );
}
