'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '@/components/ui/Container';
import { fadeUp, staggerContainer } from '@/lib/animations';
import {
  Stethoscope,
  Brain,
  Sparkles,
  Smile,
  Apple,
  Footprints,
  Check,
  ArrowRight
} from 'lucide-react';

const clinicTypes = [
  {
    name: 'Fisioterapia',
    icon: Stethoscope,
    color: 'cyan',
    problems: [
      'Pacientes que no confirman citas',
      'Llamadas constantes preguntando horarios',
      'No-shows que afectan la agenda',
      'Tiempo perdido en tareas administrativas',
    ],
    solutions: [
      'Chatbot que agenda y confirma citas 24/7',
      'Recordatorios automáticos por WhatsApp',
      'Triaje inteligente que deriva al especialista',
      'Gestión de lista de espera automática',
    ],
    demoUrl: 'https://fisioterapia-vitalmove-website.vercel.app/',
  },
  {
    name: 'Psicología',
    icon: Brain,
    color: 'purple',
    problems: [
      'Pacientes que necesitan respuesta inmediata',
      'Dificultad para gestionar urgencias',
      'Tiempo en explicar servicios y tarifas',
      'Seguimiento de pacientes entre sesiones',
    ],
    solutions: [
      'Chatbot empático con detección de urgencias',
      'Información de servicios disponible 24/7',
      'Recordatorios de citas con tono cuidado',
      'Formularios de seguimiento automáticos',
    ],
    demoUrl: 'https://psicologia-menteserena-website.vercel.app/',
  },
  {
    name: 'Estética',
    icon: Sparkles,
    color: 'pink',
    problems: [
      'Clientes que preguntan precios por DM',
      'Gestión de promociones y ofertas',
      'Fotos de antes/después sin organizar',
      'Recordatorios de tratamientos periódicos',
    ],
    solutions: [
      'Catálogo de servicios con precios en chatbot',
      'Envío automático de promociones segmentadas',
      'Galería organizada y actualizable',
      'Recordatorios de mantenimiento automáticos',
    ],
    demoUrl: 'https://estetica-bellissima-website.vercel.app/',
  },
  {
    name: 'Podología',
    icon: Footprints,
    color: 'blue',
    problems: [
      'Pacientes que no saben qué servicio necesitan',
      'Explicar diferencias entre tratamientos',
      'Gestión de citas recurrentes',
      'Seguimiento post-tratamiento',
    ],
    solutions: [
      'Triaje automático según síntomas',
      'Información detallada de cada servicio',
      'Programación de citas de seguimiento',
      'Recordatorios de revisiones periódicas',
    ],
    demoUrl: 'https://podologia-podisalud-website.vercel.app/',
  },
  {
    name: 'Odontología',
    icon: Smile,
    color: 'green',
    problems: [
      'Pacientes con miedo que no llaman',
      'Explicar tratamientos complejos',
      'Gestión de presupuestos y pagos',
      'Seguimiento de tratamientos largos',
    ],
    solutions: [
      'Chatbot amigable que reduce ansiedad',
      'Información clara de procedimientos',
      'Envío de presupuestos automático',
      'Recordatorios de fases del tratamiento',
    ],
    demoUrl: null,
  },
  {
    name: 'Nutrición',
    icon: Apple,
    color: 'emerald',
    problems: [
      'Consultas sobre dietas por mensaje',
      'Seguimiento entre consultas difícil',
      'Gestión de planes alimenticios',
      'Pacientes que abandonan el proceso',
    ],
    solutions: [
      'Chatbot con info nutricional básica',
      'Check-ins automáticos semanales',
      'Envío de recetas y planes por WhatsApp',
      'Motivación automática y seguimiento',
    ],
    demoUrl: null,
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  cyan: { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', text: 'text-accent-cyan', gradient: 'from-accent-cyan/20' },
  purple: { bg: 'bg-accent-purple/10', border: 'border-accent-purple/30', text: 'text-accent-purple', gradient: 'from-accent-purple/20' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', gradient: 'from-pink-500/20' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', gradient: 'from-blue-500/20' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', gradient: 'from-emerald-500/20' },
  emerald: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', gradient: 'from-teal-500/20' },
};

export function UseCases() {
  return (
    <Section id="especialidades">
      <Container>
        <SectionHeader
          title="Especializado en Clínicas de Salud"
          subtitle="Entiendo los problemas específicos de cada especialidad. Por eso las soluciones funcionan."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clinicTypes.map((clinic, index) => {
            const colors = colorMap[clinic.color];
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} to-transparent border ${colors.border} hover:border-white/20 transition-all duration-500`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <clinic.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{clinic.name}</h3>
                    {clinic.demoUrl && (
                      <span className={`text-xs ${colors.text}`}>Demo disponible</span>
                    )}
                  </div>
                </div>

                {/* Problems */}
                <div className="mb-4">
                  <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">Problemas comunes</p>
                  <ul className="space-y-1.5">
                    {clinic.problems.slice(0, 3).map((problem, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                        <span className="w-1 h-1 rounded-full bg-red-400/50 mt-2 flex-shrink-0" />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-6">
                  <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">Soluciones</p>
                  <ul className="space-y-1.5">
                    {clinic.solutions.slice(0, 3).map((solution, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-primary text-sm">
                        <Check className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {clinic.demoUrl ? (
                  <a
                    href={clinic.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} ${colors.border} border rounded-lg ${colors.text} text-sm font-medium hover:bg-white/10 transition-colors w-full justify-center`}
                  >
                    Ver demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-text-tertiary text-sm w-full justify-center">
                    Próximamente
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">
            ¿Tu especialidad no está aquí? Las soluciones se adaptan a cualquier clínica de salud.
          </p>
          <a
            href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl text-white font-medium hover:shadow-lg hover:shadow-accent-cyan/25 transition-all"
          >
            Cuéntame tu caso
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
