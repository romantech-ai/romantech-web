"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "María García",
    role: "CEO, Clínica Dental Sonrisas",
    content:
      "El chatbot de WhatsApp que nos creó Emilio ha transformado nuestra gestión de citas. Ahora los pacientes pueden reservar 24/7 y nosotros ahorramos más de 15 horas semanales en llamadas.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Fundador, Inmobiliaria CR",
    content:
      "La automatización de seguimiento de leads nos ha multiplicado las conversiones. Antes perdíamos clientes por no responder a tiempo, ahora el sistema trabaja incluso cuando dormimos.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Directora, Academia de Inglés",
    content:
      "Nuestra nueva web convierte el triple que la anterior. Emilio entendió perfectamente lo que necesitábamos y lo entregó en tiempo récord. 100% recomendable.",
    rating: 5,
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
              title="Lo que dicen mis clientes"
              subtitle="Resultados reales de negocios que confiaron en automatizar con IA."
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
              <div className="text-2xl font-bold text-white">+50</div>
              <div className="text-text-tertiary text-sm">Proyectos completados</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-text-tertiary text-sm">Clientes satisfechos</div>
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
  content: string;
  rating: number;
}

function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div
      className="relative p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]
                  hover:bg-white/[0.04] hover:border-accent-cyan/20
                  transition-all duration-500 h-full flex flex-col"
    >
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

      {/* Author */}
      <div>
        <div className="font-semibold text-white">{name}</div>
        <div className="text-text-tertiary text-sm">{role}</div>
      </div>
    </div>
  );
}
