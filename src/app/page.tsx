import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import {
  Hero,
  Problems,
  ServicesExpanded,
  ChatbotShowcase,
  AICapabilities,
  UseCases,
  Integrations,
  Portfolio,
  Process,
  About,
  Technologies,
  FAQ,
  CTA,
  Footer,
} from "@/components/sections";

// Lazy loading for non-critical components (not above the fold)
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
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
      <Chatbot />
    </>
  );
}
