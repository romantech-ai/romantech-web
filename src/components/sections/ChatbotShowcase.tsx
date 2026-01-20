'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '@/components/ui/Container';
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import ChatbotDemo from '@/components/ChatbotDemo';
import { Bot, Clock, MessageSquare, Phone, Sparkles, UserCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Disponible 24/7',
    description: 'Responde a tus clientes incluso cuando duermes. Nunca más pierdas un lead por no contestar a tiempo.',
  },
  {
    icon: Sparkles,
    title: 'IA Conversacional',
    description: 'Entiende el contexto y responde de forma natural. No son respuestas robóticas predefinidas.',
  },
  {
    icon: UserCheck,
    title: 'Triaje Inteligente',
    description: 'Identifica las necesidades del cliente y lo deriva al especialista adecuado automáticamente.',
  },
  {
    icon: MessageSquare,
    title: 'Multi-plataforma',
    description: 'WhatsApp, Instagram, Telegram o tu web. Un solo chatbot para todos tus canales.',
  },
  {
    icon: Zap,
    title: 'Integración Total',
    description: 'Se conecta con tu calendario, CRM y herramientas. Agenda citas sin intervención humana.',
  },
  {
    icon: Phone,
    title: 'Escalado Humano',
    description: 'Cuando el chatbot no puede resolver algo, te avisa al instante para que intervengas.',
  },
];

export function ChatbotShowcase() {
  return (
    <Section id="chatbot" gradient>
      <Container>
        <SectionHeader
          title="Chatbots que Captan Clientes por Ti"
          subtitle="Automatiza la atención al cliente y convierte visitantes en citas confirmadas. Sin perder el toque humano."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Demo */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <ChatbotDemo />
          </motion.div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <motion.div variants={slideInRight} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-4">
                <Bot className="w-4 h-4" />
                Servicio Estrella
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tu mejor empleado digital
              </h3>
              <p className="text-text-secondary">
                Un chatbot bien configurado puede responder el 80% de las consultas,
                agendar citas y captar leads mientras tú te concentras en lo que mejor sabes hacer.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-cyan/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{feature.title}</h4>
                  <p className="text-text-tertiary text-xs leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
        >
          {[
            { value: '24/7', label: 'Disponibilidad' },
            { value: '<3s', label: 'Tiempo respuesta' },
            { value: '80%', label: 'Consultas resueltas' },
            { value: '+40%', label: 'Conversión leads' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
