import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import Chatbot from "@/components/Chatbot";
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
