"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Zap, Lightbulb } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { ServiceCard } from "../ui/Card";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Chatbots con IA",
    description:
      "Asistentes de WhatsApp e Instagram que responden clientes, agendan citas y captan leads. Disponibles 24/7.",
    features: ["WhatsApp & Instagram", "Respuestas inteligentes", "Captación automática"],
    href: "#contacto",
    ctaText: "Quiero mi chatbot",
    badge: "Más popular",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Automatizaciones",
    description:
      "Conecta tus herramientas, elimina tareas repetitivas y haz que tu negocio funcione en piloto automático.",
    features: ["Integración de sistemas", "Flujos automáticos", "Informes sin esfuerzo"],
    href: "#contacto",
    ctaText: "Ver posibilidades",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Desarrollo Web",
    description:
      "Webs rápidas, modernas y optimizadas para convertir visitantes en clientes. SEO incluido.",
    features: ["Diseño profesional", "SEO optimizado", "Alta velocidad"],
    href: "#contacto",
    ctaText: "Ver ejemplos",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Consultoría IA",
    description:
      "¿No sabes por dónde empezar? Te ayudo a identificar qué automatizar primero para máximo impacto.",
    features: ["Auditoría de procesos", "Plan personalizado", "Formación incluida"],
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
          viewport={{ once: true, margin: "0px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="Soluciones que impulsan tu negocio"
              subtitle="Tecnología que trabaja por ti mientras tú te centras en lo importante."
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
