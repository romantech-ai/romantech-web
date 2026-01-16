"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Zap, Lightbulb } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { ServiceCard } from "../ui/Card";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Chatbots IA",
    description:
      "Asistentes virtuales inteligentes que atienden a tus clientes 24/7, responden preguntas y captan leads mientras duermes.",
    features: ["WhatsApp & Web", "Respuestas inteligentes", "Integración con tu CRM"],
    href: "#contacto",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Desarrollo Web",
    description:
      "Webs modernas que convierten visitantes en clientes. Rápidas, optimizadas para SEO y con diseño único.",
    features: ["Diseño premium", "SEO optimizado", "Integración con IA"],
    href: "#contacto",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Automatizaciones",
    description:
      "Workflows que eliminan trabajo manual y conectan todas tus herramientas. Ahorra horas cada semana.",
    features: ["n8n, Make, Zapier", "Integraciones a medida", "Notificaciones automáticas"],
    href: "#contacto",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Consultoría IA",
    description:
      "Te ayudo a identificar dónde la IA puede transformar tu negocio. Estrategia personalizada y formación.",
    features: ["Auditoría de procesos", "Roadmap personalizado", "Formación para tu equipo"],
    href: "#contacto",
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
              title="Soluciones que transforman tu negocio"
              subtitle="Tecnología avanzada, resultados tangibles, sin complicaciones."
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
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
