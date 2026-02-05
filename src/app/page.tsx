import AnimatedSection from "@/components/AnimatedSection";
import BentoGrid from "@/components/BentoGrid";
import ChaosVsOrder from "@/components/ChaosVsOrder";
import CorePillars from "@/components/CorePillars";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntegrationMarquee from "@/components/IntegrationMarquee";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import SecurityStrip from "@/components/SecurityStrip";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AnimatedSection className="-mt-[80px]">
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <ChaosVsOrder />
      </AnimatedSection>
      <AnimatedSection>
        <CorePillars />
      </AnimatedSection>
      <AnimatedSection>
        <BentoGrid />
      </AnimatedSection>
      <AnimatedSection>
        <SecurityStrip />
      </AnimatedSection>
      <AnimatedSection>
        <IntegrationMarquee />
      </AnimatedSection>
      <AnimatedSection>
        <Pricing />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
