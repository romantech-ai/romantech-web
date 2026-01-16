"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "María García",
    role: "Directora",
    company: "Clínica Dental Sonrisas",
    content:
      "El chatbot de WhatsApp que nos creó Emilio ha transformado nuestra gestión de citas. Ahora los pacientes pueden reservar 24/7 y nosotros ahorramos más de 15 horas semanales en llamadas.",
    rating: 5,
    result: "15h/semana ahorradas",
    initials: "MG",
  },
  {
    name: "Ana Ruiz",
    role: "Propietaria",
    company: "Centro Estética Belleza Natural",
    content:
      "Desde que tenemos el chatbot, no perdemos ni una consulta. Los clientes agendan sus tratamientos a cualquier hora y yo me dedico a lo importante: atenderlos cuando llegan.",
    rating: 5,
    result: "+40% más citas",
    initials: "AR",
  },
  {
    name: "Dr. Pablo Fernández",
    role: "Director",
    company: "Clínica Fisioterapia Avanzada",
    content:
      "La automatización de recordatorios ha reducido nuestras ausencias a casi cero. Los pacientes reciben WhatsApp automático y confirman con un click. Genial.",
    rating: 5,
    result: "90% menos ausencias",
    initials: "PF",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonios" className="bg-bg-void">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="Clínicas que ya automatizan con nosotros"
              subtitle="Resultados reales de centros de salud que confiaron en Román Tech."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeUp}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-gradient">+50</div>
              <div className="text-text-tertiary text-sm">Clínicas automatizadas</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-gradient">100%</div>
              <div className="text-text-tertiary text-sm">Satisfacción garantizada</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white flex items-center justify-center gap-1">
                5.0 <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-text-tertiary text-sm">Valoración media</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  result: string;
  initials: string;
}

function TestimonialCard({ name, role, company, content, rating, result, initials }: TestimonialCardProps) {
  return (
    <div
      className="relative p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]
                  hover:bg-white/[0.04] hover:border-accent-cyan/20
                  transition-all duration-500 h-full flex flex-col group"
    >
      {/* Result badge */}
      <div className="absolute -top-3 right-6">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold
                        bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
          <TrendingUp className="w-3 h-3" />
          {result}
        </span>
      </div>

      {/* Quote icon */}
      <Quote className="w-8 h-8 text-accent-cyan/30 mb-4" />

      {/* Content */}
      <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
        &ldquo;{content}&rdquo;
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Author with avatar */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple
                        flex items-center justify-center text-white font-semibold text-sm">
          {initials}
        </div>
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-text-tertiary text-sm">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}
