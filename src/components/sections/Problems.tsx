"use client";

import { motion } from "framer-motion";
import { RefreshCw, Phone, Clock } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { ProblemCard } from "../ui/Card";
import { fadeUp, staggerContainer } from "@/lib/animations";

const problems = [
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Respondes lo mismo una y otra vez",
    description:
      "Los mismos mensajes, las mismas preguntas, día tras día. Tu tiempo vale más que eso.",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Pierdes clientes por tardar en responder",
    description:
      "Mientras duermes o estás ocupado, potenciales clientes se van con la competencia.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Horas en tareas que podrían automatizarse",
    description:
      "Copiar datos, enviar emails, actualizar hojas de cálculo... Todo eso puede hacerse solo.",
  },
];

export function Problems() {
  return (
    <Section id="problemas" className="bg-bg-void">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="¿Te suena familiar?"
              subtitle="Si algo de esto te pasa, no estás solo. La buena noticia: tiene solución."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {problems.map((problem, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ProblemCard
                  icon={problem.icon}
                  title={problem.title}
                  description={problem.description}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-xl text-white font-medium mb-2">
              Hay una forma mejor.
            </p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-accent-cyan text-2xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
