"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { Container, Section } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CTA() {
  return (
    <Section id="contacto" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 30% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            ¿Listo para automatizar tu negocio?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Agenda una demo gratuita de 30 minutos y descubre cómo la IA puede
            trabajar para ti.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-12">
            <LinkButton
              href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
              variant="primary"
              size="lg"
              withArrow
              external
              className="shadow-glow-cyan-intense"
            >
              Agenda tu demo gratis
            </LinkButton>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-text-tertiary mb-6">
              ¿Prefieres escribirme directamente?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/34664241328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-white/5 border border-white/10 text-text-secondary
                           hover:bg-white/10 hover:text-white hover:border-white/20
                           transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="mailto:emilio@romantech.es"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-white/5 border border-white/10 text-text-secondary
                           hover:bg-white/10 hover:text-white hover:border-white/20
                           transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                emilio@romantech.es
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
