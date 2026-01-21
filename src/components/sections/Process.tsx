"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Rocket } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ReactNode } from "react";

const steps = [
  {
    number: "01",
    title: "Hablamos",
    description:
      "Me cuentas qué necesita tu clínica en una llamada de 30 minutos. Sin compromiso, sin presión.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creo la solución perfecta para ti: chatbot, automatizaciones o web. Tú apruebas antes de empezar.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Lanzamos",
    description:
      "Implementamos en menos de 7 días, formamos a tu equipo y te acompañamos. Soporte incluido.",
    icon: <Rocket className="w-6 h-6" />,
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
          viewport={{ once: true, margin: "0px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="Tu chatbot funcionando en 3 simples pasos"
              subtitle="Sin tecnicismos. Sin complicaciones. Tú te dedicas a tus pacientes."
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
                <ProcessCardWithIcon
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
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
              Agendar llamada gratuita
            </LinkButton>
            <p className="mt-4 text-text-tertiary text-sm">
              30 minutos · Sin compromiso · 100% personalizado
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

// Process card with icon
interface ProcessCardWithIconProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
}

function ProcessCardWithIcon({ number, title, description, icon, isLast = false }: ProcessCardWithIconProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number with icon */}
      <div
        className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20
                    flex flex-col items-center justify-center mb-6 border border-white/10
                    shadow-[0_0_30px_rgba(0,212,255,0.2)]"
      >
        <span className="text-2xl font-bold text-gradient">{number}</span>
        <span className="absolute -bottom-3 p-1.5 rounded-lg bg-bg-void border border-white/10 text-accent-cyan">
          {icon}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-3 mt-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed max-w-xs">{description}</p>

      {/* Connector line (hidden on last card) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px
                      bg-gradient-to-r from-accent-cyan/30 via-accent-purple/30 to-accent-cyan/30"
        />
      )}
    </div>
  );
}
