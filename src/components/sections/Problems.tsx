"use client";

import { motion } from "framer-motion";
import { PhoneOff, UserX, CalendarX } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Container";
import { ProblemCard } from "../ui/Card";
import { fadeUp, staggerContainer } from "@/lib/animations";

const problems = [
  {
    icon: <PhoneOff className="w-8 h-8" />,
    title: "Tu recepción no da abasto",
    description:
      "El teléfono no para, los WhatsApps se acumulan. Tu equipo pierde horas contestando las mismas preguntas.",
  },
  {
    icon: <UserX className="w-8 h-8" />,
    title: "Pacientes que no llegan",
    description:
      "Olvidos, confusiones de horario, cancelaciones de última hora. Huecos en tu agenda que cuestan dinero.",
  },
  {
    icon: <CalendarX className="w-8 h-8" />,
    title: "Citas perdidas fuera de horario",
    description:
      "A las 11pm alguien quiere pedir cita. Tu clínica está cerrada. Mañana ya habrá ido a la competencia.",
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
              title="¿Tu clínica sufre alguno de estos problemas?"
              subtitle="Son más comunes de lo que crees. Y tienen solución."
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
              La solución existe y es más sencilla de lo que piensas.
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
