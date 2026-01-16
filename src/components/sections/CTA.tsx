"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Calendar } from "lucide-react";
import { Container, Section } from "../ui/Container";
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
            className="text-xl text-text-secondary mb-6 max-w-2xl mx-auto"
          >
            Escríbeme por WhatsApp y cuéntame tu idea. Te respondo en menos de 24 horas.
          </motion.p>

          {/* Availability indicator */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-text-tertiary">
              Disponible ahora · Respondo en &lt;2h
            </span>
          </motion.div>

          {/* Primary CTA - WhatsApp */}
          <motion.div variants={fadeUp} className="mb-8">
            <a
              href="https://wa.me/34664241328?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20automatización%20e%20IA%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-xl
                         bg-[#25D366] hover:bg-[#20BD5A]
                         text-white font-semibold text-lg
                         shadow-[0_0_30px_rgba(37,211,102,0.4)]
                         hover:shadow-[0_0_50px_rgba(37,211,102,0.5)]
                         hover:scale-[1.02] hover:-translate-y-0.5
                         active:scale-[0.98]
                         transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Escríbeme por WhatsApp
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-text-tertiary mb-6">
              O si prefieres, agenda una videollamada:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-white/5 border border-white/10 text-text-secondary
                           hover:bg-white/10 hover:text-white hover:border-white/20
                           transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Agendar demo gratis
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
