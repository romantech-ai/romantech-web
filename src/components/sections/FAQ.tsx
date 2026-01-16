"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto cuesta un chatbot para mi clínica?",
    answer:
      "Los chatbots de WhatsApp para clínicas parten desde 500€, dependiendo de las funcionalidades que necesites (agenda citas, responde preguntas frecuentes, envía recordatorios, etc.). En la llamada gratuita te doy un presupuesto cerrado sin sorpresas.",
  },
  {
    question: "¿Cuánto tarda en estar funcionando?",
    answer:
      "La mayoría de chatbots están operativos en menos de 7 días. Una vez que me das el OK, configuro todo y lo dejo funcionando con tu equipo formado. Siempre acordamos fechas antes de empezar.",
  },
  {
    question: "¿Necesito saber de tecnología para usarlo?",
    answer:
      "Para nada. Yo me encargo de todo lo técnico. Tú solo tienes que decirme cómo funciona tu clínica y qué quieres que haga el chatbot. Además, te formo para que puedas modificar respuestas si lo necesitas.",
  },
  {
    question: "¿El chatbot puede agendar citas automáticamente?",
    answer:
      "Sí, el chatbot se integra con tu sistema de gestión o calendario (Google Calendar, Calendly, etc.) para mostrar disponibilidad y agendar citas sin intervención humana. También envía recordatorios automáticos para reducir ausencias.",
  },
  {
    question: "¿Qué pasa si un paciente pregunta algo que el chatbot no sabe?",
    answer:
      "El chatbot está entrenado para responder las preguntas más comunes de tu clínica. Si hay algo que no sabe, avisa a tu equipo por WhatsApp y ellos pueden intervenir. Nunca perderás un lead por falta de respuesta.",
  },
  {
    question: "¿Funciona con mi software de gestión actual?",
    answer:
      "Sí, me integro con la mayoría de software de gestión de clínicas (Clinic Cloud, Doctoralia, Treatwell, etc.) y también con herramientas como Google Sheets, Notion, o cualquier sistema que uses. Lo consultamos en la llamada.",
  },
  {
    question: "¿Qué garantía tengo?",
    answer:
      "Todos mis proyectos incluyen garantía de satisfacción. Si algo no funciona como acordamos, lo arreglo sin coste adicional. Además, incluyo 30 días de soporte post-lanzamiento para asegurar que todo va perfecto.",
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
