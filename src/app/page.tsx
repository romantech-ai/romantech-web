import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero, Footer } from "@/components/sections";

// Lazy load all sections below the fold
const Problems = dynamic(() => import("@/components/sections").then(m => ({ default: m.Problems })));
const ServicesExpanded = dynamic(() => import("@/components/sections").then(m => ({ default: m.ServicesExpanded })));
const ChatbotShowcase = dynamic(() => import("@/components/sections").then(m => ({ default: m.ChatbotShowcase })));
const AICapabilities = dynamic(() => import("@/components/sections").then(m => ({ default: m.AICapabilities })));
const UseCases = dynamic(() => import("@/components/sections").then(m => ({ default: m.UseCases })));
const Integrations = dynamic(() => import("@/components/sections").then(m => ({ default: m.Integrations })));
const Portfolio = dynamic(() => import("@/components/sections").then(m => ({ default: m.Portfolio })));
const Process = dynamic(() => import("@/components/sections").then(m => ({ default: m.Process })));
const About = dynamic(() => import("@/components/sections").then(m => ({ default: m.About })));
const Technologies = dynamic(() => import("@/components/sections").then(m => ({ default: m.Technologies })));
const FAQ = dynamic(() => import("@/components/sections").then(m => ({ default: m.FAQ })));
const CTA = dynamic(() => import("@/components/sections").then(m => ({ default: m.CTA })));

// Lazy loading for non-critical components
const Chatbot = dynamic(() => import("@/components/Chatbot"));
const WhatsAppButton = dynamic(() =>
  import("@/components/WhatsAppButton").then((m) => ({ default: m.WhatsAppButton }))
);
const MobileStickyCTA = dynamic(() =>
  import("@/components/MobileStickyCTA").then((m) => ({ default: m.MobileStickyCTA }))
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <Problems />
          <ServicesExpanded />
          <ChatbotShowcase />
          <AICapabilities />
          <UseCases />
          <Integrations />
          <Portfolio />
          <Process />
          <About />
          <Technologies />
          <FAQ />
          <CTA />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
      <Chatbot />
    </>
  );
}
