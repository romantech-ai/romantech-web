import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Hero,
  Problems,
  Services,
  Process,
  About,
  Testimonials,
  Technologies,
  FAQ,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Technologies />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
