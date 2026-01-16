"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto tarda en estar funcionando?",
    answer:
      "La mayoría de proyectos están operativos en menos de 7 días. Una vez que me das el OK, configuro todo y lo dejo funcionando con tu equipo formado. Siempre acordamos fechas antes de empezar.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "Para nada. Yo me encargo de todo lo técnico. Tú solo tienes que explicarme cómo funciona tu negocio y qué quieres conseguir. Te formo para que puedas usar y modificar lo que necesites.",
  },
  {
    question: "¿Qué tipo de automatizaciones puedes hacer?",
    answer:
      "Chatbots de WhatsApp e Instagram, integración entre herramientas (CRM, email, calendarios), informes automáticos, recordatorios, captación de leads, y mucho más. Si implica conectar sistemas o eliminar trabajo manual, probablemente puedo ayudarte.",
  },
  {
    question: "¿Funciona con el software que ya uso?",
    answer:
      "Sí, me integro con la mayoría de herramientas: software de gestión de clínicas (Clinic Cloud, Doctoralia, Treatwell, GESDEN), calendarios (Google Calendar, Calendly), CRMs (HubSpot, Pipedrive), hojas de cálculo (Google Sheets, Excel), y cientos más.",
  },
  {
    question: "¿Qué pasa si alguien pregunta algo que el chatbot no sabe?",
    answer:
      "El chatbot está entrenado para responder las preguntas más comunes de tu negocio. Si hay algo que no sabe o el cliente necesita atención humana, te avisa por WhatsApp para que intervengas. Nunca perderás un lead por falta de respuesta.",
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
