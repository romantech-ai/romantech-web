"use client";

import { motion } from "framer-motion";
import { ChevronDown, Bot, Zap, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { GridBackground } from "../ParticleBackground";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stats = [
  {
    value: "+50",
    label: "Clínicas automatizadas",
    icon: <CheckCircle2 className="w-5 h-5" />
  },
  {
    value: "24/7",
    label: "Atención sin descanso",
    icon: <Bot className="w-5 h-5" />
  },
  {
    value: "<7 días",
    label: "Tu chatbot funcionando",
    icon: <Zap className="w-5 h-5" />
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient">
      {/* Background */}
      <GridBackground />

      {/* Content */}
      <Container className="relative z-10 pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge - Específico para clínicas */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-accent-cyan/10 border border-accent-cyan/20 text-sm text-accent-cyan font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              Especialistas en clínicas y centros de salud
            </span>
          </motion.div>

          {/* Headline - Específico y orientado a beneficio */}
          <motion.h1
            variants={fadeUp}
            className="text-hero font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Tu clínica atendiendo pacientes{" "}
            <span className="text-gradient">24/7</span>
            <br />
            <span className="text-text-secondary text-[0.65em]">sin contratar más personal</span>
          </motion.h1>

          {/* Subheadline - Beneficio concreto */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Chatbots de WhatsApp que agendan citas, responden dudas y captan pacientes{" "}
            <span className="text-white font-medium">mientras tú te dedicas a lo importante.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <LinkButton
              href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
              variant="primary"
              size="lg"
              withArrow
              external
            >
              Ver demo para clínicas
            </LinkButton>
            <LinkButton href="#proceso" variant="secondary" size="lg">
              Cómo funciona
            </LinkButton>
          </motion.div>

          {/* Stats - Mejorados con iconos */}
          <motion.div variants={fadeUp}>
            <div className="border-t border-b border-white/5 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-accent-cyan">{stat.icon}</span>
                      <span className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</span>
                    </div>
                    <span className="text-text-secondary text-sm">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust signal */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-text-tertiary text-sm"
          >
            Clínicas dentales, estéticas, fisioterapia, psicología y más ya automatizan con nosotros
          </motion.p>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-tertiary"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
