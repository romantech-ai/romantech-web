import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import {
  Hero,
  Problems,
  Services,
  Process,
  About,
  // Testimonials, // TODO: Descomentar cuando tengamos testimonios reales
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
        <Services />
        <Process />
        <About />
        {/* <Testimonials /> TODO: Añadir cuando tengamos testimonios reales */}
        <Technologies />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </>
  );
}
