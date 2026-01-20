'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section, SectionHeader } from '@/components/ui/Container';
import { fadeUp, staggerContainer } from '@/lib/animations';
import {
  Bot,
  Zap,
  Globe,
  Lightbulb,
  ArrowRight,
  Check,
  MessageSquare,
  Calendar,
  BarChart3,
  Workflow,
  Palette,
  Search,
  Gauge,
  Users,
  Clock,
  Target
} from 'lucide-react';

interface Service {
  id: string;
  icon: typeof Bot;
  title: string;
  tagline: string;
  description: string;
  features: { icon: typeof Check; text: string }[];
  stats: { value: string; label: string }[];
  color: 'cyan' | 'purple' | 'green' | 'orange';
  badge?: string;
}

const services: Service[] = [
  {
    id: 'chatbots',
    icon: Bot,
    title: 'Chatbots con IA',
    tagline: 'Tu recepcionista digital, disponible 24/7',
    description: 'Chatbots inteligentes especializados en clínicas de salud. Responden preguntas, hacen triaje, y agendan citas automáticamente.',
    features: [
      { icon: MessageSquare, text: 'WhatsApp, Instagram y Web integrados' },
      { icon: Clock, text: 'Responde pacientes incluso de noche' },
      { icon: Target, text: 'Triaje automático por especialidad' },
      { icon: Calendar, text: 'Agenda citas sin tu intervención' },
    ],
    stats: [
      { value: '24/7', label: 'Disponibilidad' },
      { value: '<3s', label: 'Respuesta' },
      { value: '+40%', label: 'Más citas' },
    ],
    color: 'cyan',
    badge: 'Más popular',
  },
  {
    id: 'automatizaciones',
    icon: Zap,
    title: 'Automatizaciones',
    tagline: 'Elimina tareas repetitivas de tu clínica',
    description: 'Recordatorios de citas, gestión de no-shows, sincronización con calendarios, y mucho más. Todo en piloto automático.',
    features: [
      { icon: Calendar, text: 'Recordatorios automáticos por WhatsApp' },
      { icon: Workflow, text: 'Gestión de lista de espera' },
      { icon: BarChart3, text: 'Informes de ocupación sin esfuerzo' },
      { icon: Users, text: 'Sincronización con tu software de gestión' },
    ],
    stats: [
      { value: '-70%', label: 'No-shows' },
      { value: '10h', label: 'Ahorradas/semana' },
      { value: '0', label: 'Errores humanos' },
    ],
    color: 'purple',
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Webs para Clínicas',
    tagline: 'Tu presencia digital profesional',
    description: 'Webs diseñadas específicamente para clínicas de salud. Rápidas, con SEO local optimizado y chatbot integrado.',
    features: [
      { icon: Palette, text: 'Diseño profesional para tu especialidad' },
      { icon: Gauge, text: 'Velocidad de carga optimizada' },
      { icon: Search, text: 'SEO local para aparecer en Google' },
      { icon: Bot, text: 'Chatbot de captación incluido' },
    ],
    stats: [
      { value: '<7', label: 'Días entrega' },
      { value: '95+', label: 'PageSpeed' },
      { value: '+60%', label: 'Visibilidad' },
    ],
    color: 'green',
  },
  {
    id: 'consultoria',
    icon: Lightbulb,
    title: 'Consultoría',
    tagline: 'Te ayudo a digitalizar tu clínica',
    description: 'Analizamos tus procesos, identificamos qué automatizar y creamos un plan personalizado para tu clínica.',
    features: [
      { icon: Target, text: 'Auditoría de procesos actuales' },
      { icon: Workflow, text: 'Plan de automatización a medida' },
      { icon: Users, text: 'Formación para tu equipo' },
      { icon: Clock, text: 'Soporte post-implementación incluido' },
    ],
    stats: [
      { value: '30min', label: 'Demo gratis' },
      { value: '30', label: 'Días soporte' },
      { value: '100%', label: 'Personalizado' },
    ],
    color: 'orange',
  },
];

const colorMap = {
  cyan: {
    bg: 'bg-accent-cyan/10',
    border: 'border-accent-cyan/30',
    text: 'text-accent-cyan',
    gradient: 'from-accent-cyan/20 to-transparent',
    glow: 'shadow-accent-cyan/20',
    button: 'bg-accent-cyan hover:bg-accent-cyan/90',
  },
  purple: {
    bg: 'bg-accent-purple/10',
    border: 'border-accent-purple/30',
    text: 'text-accent-purple',
    gradient: 'from-accent-purple/20 to-transparent',
    glow: 'shadow-accent-purple/20',
    button: 'bg-accent-purple hover:bg-accent-purple/90',
  },
  green: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-transparent',
    glow: 'shadow-emerald-500/20',
    button: 'bg-emerald-500 hover:bg-emerald-500/90',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    gradient: 'from-orange-500/20 to-transparent',
    glow: 'shadow-orange-500/20',
    button: 'bg-orange-500 hover:bg-orange-500/90',
  },
};

export function ServicesExpanded() {
  const [activeService, setActiveService] = useState<string>('chatbots');

  const currentService = services.find(s => s.id === activeService) || services[0];
  const colors = colorMap[currentService.color];

  return (
    <Section id="servicios">
      <Container>
        <SectionHeader
          title="Soluciones para tu Clínica"
          subtitle="Tecnología que trabaja por ti mientras tú te centras en tus pacientes."
        />

        {/* Service Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {services.map((service) => {
            const isActive = activeService === service.id;
            const serviceColors = colorMap[service.color];
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? `${serviceColors.bg} ${serviceColors.border} border ${serviceColors.text}`
                    : 'bg-white/[0.02] border border-white/[0.05] text-text-secondary hover:text-white hover:border-white/[0.1]'
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{service.title}</span>
                {service.badge && isActive && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-accent-cyan text-bg-primary text-xs font-semibold">
                    {service.badge}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid lg:grid-cols-2 gap-12 p-8 rounded-3xl bg-gradient-to-br ${colors.gradient} border ${colors.border}`}
          >
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                  <currentService.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                {currentService.badge && (
                  <span className={`px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium`}>
                    {currentService.badge}
                  </span>
                )}
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">{currentService.title}</h3>
              <p className={`${colors.text} font-medium mb-4`}>{currentService.tagline}</p>
              <p className="text-text-secondary leading-relaxed mb-8">{currentService.description}</p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <feature.icon className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <span className="text-text-primary">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 ${colors.button} rounded-xl text-white font-medium hover:shadow-lg ${colors.glow} transition-all`}
              >
                Ver cómo funciona
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Stats + Visual */}
            <div className="flex flex-col justify-center">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {currentService.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl ${colors.bg} ${colors.border} border text-center`}
                  >
                    <div className={`text-2xl md:text-3xl font-bold ${colors.text} mb-1`}>{stat.value}</div>
                    <div className="text-text-tertiary text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Visual placeholder */}
              <div className={`aspect-video rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                <div className="text-center">
                  <currentService.icon className={`w-16 h-16 ${colors.text} opacity-30 mx-auto mb-4`} />
                  <p className="text-text-tertiary text-sm">Demo interactiva</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom quick links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => {
            const serviceColors = colorMap[service.color];
            const isActive = activeService === service.id;
            return (
              <motion.button
                key={service.id}
                variants={fadeUp}
                onClick={() => setActiveService(service.id)}
                className={`p-4 rounded-xl text-left transition-all ${
                  isActive
                    ? `${serviceColors.bg} ${serviceColors.border} border`
                    : 'bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1]'
                }`}
              >
                <service.icon className={`w-5 h-5 ${isActive ? serviceColors.text : 'text-text-tertiary'} mb-2`} />
                <h4 className={`font-medium ${isActive ? 'text-white' : 'text-text-secondary'}`}>{service.title}</h4>
                <p className="text-text-tertiary text-xs line-clamp-1">{service.tagline}</p>
              </motion.button>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
