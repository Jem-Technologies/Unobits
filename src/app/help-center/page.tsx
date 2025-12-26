import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import HelpCenterContent from '@/components/help/HelpCenterContent';

export default function HelpCenterPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
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
