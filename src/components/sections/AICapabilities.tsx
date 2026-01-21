'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '@/components/ui/Container';
import { fadeUp, staggerContainer } from '@/lib/animations';
import {
  MessageSquare,
  Phone,
  Calendar,
  Bell,
  FileText,
  Mic,
  Image,
  Brain,
  BarChart3,
  Mail,
  UserCheck,
  Clock,
  Languages,
  Shield,
  Sparkles
} from 'lucide-react';

const aiCapabilities = [
  {
    category: 'Comunicación Inteligente',
    color: 'cyan',
    items: [
      {
        icon: MessageSquare,
        title: 'Chatbot Conversacional',
        description: 'Entiende contexto, mantiene conversaciones naturales y responde como un humano.',
      },
      {
        icon: Phone,
        title: 'Agente de Voz IA',
        description: 'Atiende llamadas, responde preguntas y agenda citas por teléfono automáticamente.',
      },
      {
        icon: Languages,
        title: 'Multiidioma',
        description: 'Detecta el idioma del paciente y responde en español, inglés, francés, alemán...',
      },
    ],
  },
  {
    category: 'Gestión de Citas',
    color: 'purple',
    items: [
      {
        icon: Calendar,
        title: 'Reservas Automáticas',
        description: 'El chatbot consulta disponibilidad y agenda citas sin intervención humana.',
      },
      {
        icon: Bell,
        title: 'Recordatorios Inteligentes',
        description: 'Envía recordatorios por WhatsApp 24h y 1h antes. Permite confirmar o cancelar.',
      },
      {
        icon: UserCheck,
        title: 'Gestión de No-Shows',
        description: 'Detecta cancelaciones de última hora y ofrece el hueco a pacientes en lista de espera.',
      },
    ],
  },
  {
    category: 'Análisis y Documentación',
    color: 'green',
    items: [
      {
        icon: Mic,
        title: 'Transcripción de Consultas',
        description: 'Graba y transcribe consultas. Genera resúmenes automáticos para el historial.',
      },
      {
        icon: FileText,
        title: 'Informes Automáticos',
        description: 'Genera informes de evolución, altas y documentación clínica con IA.',
      },
      {
        icon: BarChart3,
        title: 'Analytics Predictivo',
        description: 'Predice no-shows, identifica pacientes en riesgo de abandono, optimiza agenda.',
      },
    ],
  },
  {
    category: 'Experiencia del Paciente',
    color: 'pink',
    items: [
      {
        icon: Clock,
        title: 'Atención 24/7',
        description: 'Responde consultas a cualquier hora. Los pacientes no esperan al día siguiente.',
      },
      {
        icon: Image,
        title: 'Análisis de Imágenes',
        description: 'El paciente envía foto de su problema y la IA hace una evaluación preliminar.',
      },
      {
        icon: Mail,
        title: 'Seguimiento Automático',
        description: 'Envía check-ins post-consulta, recuerda ejercicios, pregunta cómo evoluciona.',
      },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  cyan: { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', text: 'text-accent-cyan', gradient: 'from-accent-cyan/5' },
  purple: { bg: 'bg-accent-purple/10', border: 'border-accent-purple/30', text: 'text-accent-purple', gradient: 'from-accent-purple/5' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', gradient: 'from-emerald-500/5' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', gradient: 'from-pink-500/5' },
};

export function AICapabilities() {
  return (
    <Section id="ia-capabilities" gradient>
      <Container>
        <SectionHeader
          title="Todo lo que la IA Puede Hacer por tu Clínica"
          subtitle="Estas son solo algunas de las posibilidades. La tecnología avanza rápido y las aplicaciones son infinitas."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="space-y-12"
        >
          {aiCapabilities.map((category, categoryIndex) => {
            const colors = colorMap[category.color];
            return (
              <motion.div key={categoryIndex} variants={fadeUp}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-8 rounded-full ${colors.bg} ${colors.border} border`} />
                  <h3 className={`text-xl font-semibold ${colors.text}`}>{category.category}</h3>
                </div>

                {/* Items Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={fadeUp}
                      className={`group p-5 rounded-xl bg-gradient-to-br ${colors.gradient} to-transparent border border-white/[0.05] hover:border-white/[0.1] transition-all`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
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
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-pink-500/10 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">¿Tienes una idea diferente?</p>
                <p className="text-text-secondary text-sm">Cuéntamela y vemos cómo hacerla realidad</p>
              </div>
            </div>
            <a
              href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl text-white font-medium hover:shadow-lg hover:shadow-accent-cyan/25 transition-all whitespace-nowrap"
            >
              Hablemos
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
