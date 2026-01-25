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
    icon: <Bot className="w-5 h-5" />,
  },
  {
    value: "<7 días",
    label: "Implementación",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    value: "0€",
    label: "Demo sin compromiso",
    icon: <Clock className="w-5 h-5" />,
  },
];

// Decorative abstract visual element
function DecorativeVisual() {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
      {/* Main geometric composition */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer ring */}
        <motion.div
          className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-accent-cyan/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle ring with gradient */}
        <motion.div
          className="absolute w-48 h-48 lg:w-60 lg:h-60 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 200, 240, 0.1) 0%, rgba(147, 102, 255, 0.1) 100%)",
            border: "1px solid rgba(147, 102, 255, 0.2)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner glowing core */}
        <motion.div
          className="absolute w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 blur-sm"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center dot */}
        <div className="absolute w-4 h-4 rounded-full bg-accent-cyan shadow-glow-cyan" />

        {/* Orbiting elements */}
        <motion.div
          className="absolute w-64 h-64 lg:w-80 lg:h-80"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-purple shadow-glow-purple" />
        </motion.div>

        <motion.div
          className="absolute w-48 h-48 lg:w-60 lg:h-60"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-cyan shadow-glow-cyan" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Glow effect behind */}
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 200, 240, 0.3) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient">
      {/* Background */}
      <GridBackground />

      {/* Content */}
      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-8 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-accent-cyan/10 border border-accent-cyan/20 text-sm text-accent-cyan font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
                </span>
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
              className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-xl"
            >
              Chatbots, automatizaciones y webs que captan clientes y eliminan
              tareas repetitivas.{" "}
              <span className="text-white font-medium">
                Sin complicaciones técnicas.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start gap-4"
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
              <LinkButton href="/demos" variant="secondary" size="lg">
                Cómo funciona
              </LinkButton>
            </motion.div>
          </motion.div>

          {/* Right column - Decorative visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <DecorativeVisual />
          </motion.div>
        </div>

        {/* Stats - Full width with dividers */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="border-t border-b border-white/5 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className={`flex flex-col items-center gap-3 py-6 sm:py-0 ${
                    index !== stats.length - 1
                      ? "sm:border-r border-white/10"
                      : ""
                  } ${index !== 0 ? "border-t sm:border-t-0 border-white/10" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-accent-cyan">{stat.icon}</span>
                    <span className="text-3xl md:text-4xl font-bold text-gradient">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-text-secondary text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
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
