"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Zap, Lightbulb } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { ServiceCard } from "../ui/Card";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Chatbots IA para Clínicas",
    description:
      "Asistentes de WhatsApp que agendan citas, responden dudas de pacientes y envían recordatorios. Tu recepción virtual 24/7.",
    features: ["WhatsApp Business API", "Agenda citas automáticamente", "Envía recordatorios"],
    href: "#contacto",
    ctaText: "Quiero mi chatbot",
    badge: "Más popular",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Web para tu Clínica",
    description:
      "Webs que convierten visitantes en pacientes. Diseño profesional, SEO local y formularios optimizados.",
    features: ["Diseño médico profesional", "SEO local optimizado", "Integración con chatbot"],
    href: "#contacto",
    ctaText: "Ver ejemplos",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Automatizaciones",
    description:
      "Conecta tu software de gestión, envía recordatorios automáticos y elimina el trabajo manual de tu equipo.",
    features: ["Integración con tu software", "Recordatorios automáticos", "Informes sin esfuerzo"],
    href: "#contacto",
    ctaText: "Automatizar mi clínica",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Consultoría IA",
    description:
      "¿No sabes por dónde empezar? Te ayudo a identificar qué automatizar primero para máximo impacto.",
    features: ["Auditoría de procesos", "Plan de implementación", "Formación a tu equipo"],
    href: "#contacto",
    ctaText: "Agendar consultoría",
  },
];

export function Services() {
  return (
    <Section id="servicios" gradient>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="Soluciones diseñadas para clínicas"
              subtitle="Tecnología que entiende las necesidades de tu centro de salud."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  href={service.href}
                  ctaText={service.ctaText}
                  badge={service.badge}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
