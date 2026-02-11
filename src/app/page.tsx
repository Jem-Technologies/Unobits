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
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The all‑in‑one business OS to kill tab overload",
  description:
    "Replace 10+ business subscriptions and stop living in 20 tabs. UNOBITS combines CRM, shared inbox, projects, docs, chat, automations, portals, reporting, and more — designed mobile‑first so founders can run everything from their phone.",
  path: "/",
  keywords: [
    "tab overload",
    "subscription fatigue",
    "replace business subscriptions",
    "one app for CRM and shared inbox",
    "all-in-one business software",
    "business operating system",
    "CRM",
    "shared inbox",
    "project management",
    "workflow automation",
  ],
});


export default function Home() {
  return (
    <main>
      <Navbar />
      <AnimatedSection className="-mt-[90px]">
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
