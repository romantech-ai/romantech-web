"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Cada proyecto se presupuesta de forma personalizada según tus necesidades. Chatbots desde 500€, webs desde 800€, automatizaciones desde 300€. Agenda una llamada gratuita y te daré un presupuesto cerrado sin compromiso.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar listo un proyecto?",
    answer:
      "La mayoría de chatbots están operativos en 1-2 semanas. Webs entre 1-3 semanas dependiendo de la complejidad. Siempre acordamos fechas antes de empezar.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "Para nada. Yo me encargo de toda la parte técnica. Tú solo necesitas saber qué quieres conseguir, y yo lo hago realidad. Te formo para que puedas gestionar lo básico de forma autónoma.",
  },
  {
    question: "¿Qué garantía tengo de que funcionará?",
    answer:
      "Todos mis proyectos incluyen garantía de satisfacción. Si algo no funciona como acordamos, lo arreglo sin coste adicional. Además, ofrezco soporte post-lanzamiento para asegurar que todo va sobre ruedas.",
  },
  {
    question: "¿Qué pasa si necesito cambios después?",
    answer:
      "Todos los proyectos incluyen un período de ajustes. Además, ofrezco planes de mantenimiento para que tu solución evolucione con tu negocio. Siempre estaré disponible para ayudarte.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Empezamos con una llamada para entender tus necesidades. Luego diseño una propuesta personalizada, la desarrollamos juntos con feedback constante, y finalmente te formo para que puedas sacarle el máximo partido.",
  },
  {
    question: "¿Tienes casos de éxito o referencias?",
    answer:
      "Sí, he trabajado con más de 50 negocios en diferentes sectores: clínicas, inmobiliarias, academias, ecommerce... Puedo mostrarte proyectos similares al tuyo en nuestra llamada.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" gradient>
      <Container size="tight">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="Preguntas frecuentes"
              subtitle="Todo lo que necesitas saber antes de dar el siguiente paso."
            />
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeUp}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  id={`faq-${index}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

function FAQItem({ question, answer, isOpen, onClick, id }: FAQItemProps) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-300",
        isOpen
          ? "bg-white/[0.03] border-accent-cyan/20"
          : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1]"
      )}
    >
      <button
        id={buttonId}
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors duration-300",
            isOpen ? "text-white" : "text-text-secondary"
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "ml-4 shrink-0 p-1 rounded-lg transition-all duration-300",
            isOpen
              ? "bg-accent-cyan/20 text-accent-cyan"
              : "bg-white/5 text-text-tertiary"
          )}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="text-text-secondary leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
