"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { StatCard } from "../ui/Card";
import { AnimatedText } from "../AnimatedText";
import { GridBackground } from "../ParticleBackground";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: "+50", label: "Automatizaciones creadas" },
  { value: "24/7", label: "Disponibilidad de tus chatbots" },
  { value: "<1 sem", label: "Entrega promedio" },
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
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-white/5 border border-white/10 text-sm text-text-secondary"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              Agencia de IA & Automatización
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-hero font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            La IA que tu negocio{" "}
            <AnimatedText
              words={["necesita", "merece", "impulsa", "escala", "transforma"]}
              className="min-w-[200px] md:min-w-[280px]"
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Diseño chatbots, automatizaciones y webs que trabajan por ti mientras
            tú descansas.{" "}
            <span className="text-white">Sin complicaciones técnicas.</span>
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
              Agenda tu demo gratis
            </LinkButton>
            <LinkButton href="#proceso" variant="secondary" size="lg">
              Ver cómo funciona
            </LinkButton>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp}>
            <div className="border-t border-b border-white/5 py-8">
              <div className="grid grid-cols-3 gap-8 md:gap-16">
                {stats.map((stat, index) => (
                  <StatCard key={index} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </motion.div>
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
