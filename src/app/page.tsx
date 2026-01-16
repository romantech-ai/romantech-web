import { Navbar } from "@/components/Navbar";
import {
  Hero,
  Problems,
  Services,
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
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <About />
        <Technologies />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
