"use client";

import { motion } from "framer-motion";
import { ChevronDown, Bot, Zap, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { AnimatedText } from "../AnimatedText";
import { GridBackground } from "../GridBackground";
import { fadeUp, staggerContainer } from "@/lib/animations";

// Beneficios que rotarán en el headline
const benefits = [
  "trabaja por ti",
  "ahorra tiempo",
  "capta clientes",
  "nunca descansa",
  "escala tu negocio",
];

const stats = [
  {
    value: "24/7",
    label: "Atención automatizada",
    icon: <Bot className="w-5 h-5" />
  },
  {
    value: "<7 días",
    label: "Implementación",
    icon: <Zap className="w-5 h-5" />
  },
  {
    value: "0€",
    label: "Demo sin compromiso",
    icon: <Clock className="w-5 h-5" />
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
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-accent-cyan/10 border border-accent-cyan/20 text-sm text-accent-cyan font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              Automatización & IA para negocios
            </span>
          </motion.div>

          {/* Headline con variantes rotativas */}
          <motion.h1
            variants={fadeUp}
            className="text-hero font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Tecnología que{" "}
            <br className="hidden sm:block" />
            <AnimatedText
              words={benefits}
              className="min-w-[220px] md:min-w-[320px]"
              interval={2500}
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Chatbots, automatizaciones y webs que captan clientes y eliminan tareas repetitivas.{" "}
            <span className="text-white font-medium">Sin complicaciones técnicas.</span>
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
              Ver demo gratis
            </LinkButton>
            <LinkButton href="#proceso" variant="secondary" size="lg">
              Cómo funciona
            </LinkButton>
          </motion.div>

          {/* Stats */}
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
