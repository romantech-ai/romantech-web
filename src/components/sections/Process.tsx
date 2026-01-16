"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeader } from "../ui/Container";
import { ProcessCard } from "../ui/Card";
import { LinkButton } from "../ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Hablamos",
    description:
      "Me cuentas qué necesita tu negocio en una llamada de 30 minutos. Sin compromiso, sin presión.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creo la solución perfecta para ti: chatbot, web o automatización. Tú apruebas antes de empezar.",
  },
  {
    number: "03",
    title: "Lanzamos",
    description:
      "Implementamos, formamos a tu equipo y te acompañamos. Soporte continuo incluido.",
  },
];

export function Process() {
  return (
    <Section id="proceso" className="bg-bg-void">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="De la idea a la automatización en 3 pasos"
              subtitle="Simple. Rápido. Sin complicaciones."
            />
          </motion.div>

          {/* Desktop Timeline */}
          <motion.div
            variants={staggerContainer}
            className="hidden lg:grid lg:grid-cols-3 gap-16 relative mb-16"
          >
            {/* Connecting line */}
            <div className="absolute top-10 left-[16.67%] right-[16.67%] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-accent-cyan/30 via-accent-purple/30 to-accent-cyan/30 origin-left"
              />
            </div>

            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ProcessCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Timeline */}
          <motion.div
            variants={staggerContainer}
            className="lg:hidden space-y-12 relative mb-16"
          >
            {/* Vertical connecting line */}
            <div className="absolute left-10 top-10 bottom-10 w-px bg-gradient-to-b from-accent-cyan/30 via-accent-purple/30 to-accent-cyan/30" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative flex gap-8"
              >
                {/* Number */}
                <div
                  className="relative z-10 w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20
                              flex items-center justify-center border border-white/10
                              shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                >
                  <span className="text-2xl font-bold text-gradient">{step.number}</span>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="text-center">
            <LinkButton
              href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
              variant="primary"
              size="lg"
              withArrow
              external
            >
              Empezar con el paso 1
            </LinkButton>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
