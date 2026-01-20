'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '@/components/ui/Container';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { ExternalLink, Bot, Zap, Globe, Stethoscope, Brain, Sparkles, Footprints } from 'lucide-react';

interface Demo {
  id: string;
  name: string;
  specialty: string;
  icon: typeof Stethoscope;
  description: string;
  features: string[];
  color: string;
  liveUrl: string;
  hasChat: boolean;
  hasAutomation: boolean;
}

const demos: Demo[] = [
  {
    id: 'vitalmove',
    name: 'VitalMove Fisioterapia',
    specialty: 'Fisioterapia',
    icon: Stethoscope,
    description: 'Clínica de fisioterapia deportiva y rehabilitación. Demo completa con chatbot de triaje y sistema de citas.',
    features: ['Web premium', 'Chatbot IA con triaje', 'Reservas online', 'SEO local optimizado'],
    color: 'cyan',
    liveUrl: 'https://fisioterapia-vitalmove-website.vercel.app/',
    hasChat: true,
    hasAutomation: true,
  },
  {
    id: 'menteserena',
    name: 'MenteSerena Psicología',
    specialty: 'Psicología',
    icon: Brain,
    description: 'Centro de psicología especializado en ansiedad y terapia. Chatbot empático con detección de urgencias.',
    features: ['Diseño empático', 'Chatbot con tono cuidado', 'Citas online', 'Blog SEO'],
    color: 'purple',
    liveUrl: 'https://psicologia-menteserena-website.vercel.app/',
    hasChat: true,
    hasAutomation: true,
  },
  {
    id: 'bellissima',
    name: 'Bellissima Estética',
    specialty: 'Estética',
    icon: Sparkles,
    description: 'Centro de estética avanzada con tratamientos faciales y corporales. Catálogo de servicios integrado.',
    features: ['Web elegante', 'Catálogo servicios', 'Chatbot ventas', 'Reservas'],
    color: 'pink',
    liveUrl: 'https://estetica-bellissima-website.vercel.app/',
    hasChat: true,
    hasAutomation: true,
  },
  {
    id: 'podisalud',
    name: 'PodiSalud Podología',
    specialty: 'Podología',
    icon: Footprints,
    description: 'Clínica podológica con servicios de quiropodia, plantillas y tratamientos especializados.',
    features: ['Web profesional', 'Triaje automático', 'Reservas', 'Google Maps'],
    color: 'blue',
    liveUrl: 'https://podologia-podisalud-website.vercel.app/',
    hasChat: true,
    hasAutomation: true,
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  cyan: { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', text: 'text-accent-cyan', gradient: 'from-accent-cyan/20 to-accent-cyan/5' },
  purple: { bg: 'bg-accent-purple/10', border: 'border-accent-purple/30', text: 'text-accent-purple', gradient: 'from-accent-purple/20 to-accent-purple/5' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', gradient: 'from-pink-500/20 to-pink-500/5' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', gradient: 'from-blue-500/20 to-blue-500/5' },
};

export function Portfolio() {
  const [hoveredDemo, setHoveredDemo] = useState<string | null>(null);

  return (
    <Section id="demos">
      <Container>
        <SectionHeader
          title="Demos en Vivo"
          subtitle="Explora prototipos funcionales para cada tipo de clínica. Prueba el chatbot, navega la web y mira cómo podría ser la tuya."
        />

        {/* Featured Demo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 border border-white/10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-4">
                  <Globe className="w-4 h-4" />
                  Demo destacada
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  VitalMove Fisioterapia
                </h3>
                <p className="text-text-secondary mb-6">
                  Ejemplo completo de lo que incluye el pack para clínicas de fisioterapia:
                  web premium, chatbot con triaje inteligente, y sistema de reservas integrado.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-cyan/10 text-accent-cyan text-sm">
                    <Bot className="w-4 h-4" /> Chatbot IA
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-purple/10 text-accent-purple text-sm">
                    <Zap className="w-4 h-4" /> Automatizaciones
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm">
                    <Globe className="w-4 h-4" /> Web Premium
                  </span>
                </div>
                <a
                  href="https://fisioterapia-vitalmove-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl text-white font-medium hover:shadow-lg hover:shadow-accent-cyan/25 transition-all"
                >
                  Ver demo en vivo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Preview mockup with real iframe */}
              <a
                href="https://fisioterapia-vitalmove-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block group"
              >
                <div className="rounded-2xl bg-bg-card border border-white/10 overflow-hidden shadow-2xl hover:shadow-accent-cyan/20 transition-shadow">
                  {/* Browser bar */}
                  <div className="h-10 bg-bg-elevated border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg max-w-xs">
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        <span className="text-xs text-text-secondary truncate">vitalmove-fisioterapia.es</span>
                      </div>
                    </div>
                  </div>
                  {/* Iframe preview */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <iframe
                      src="https://fisioterapia-vitalmove-website.vercel.app/"
                      className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                      title="VitalMove Fisioterapia Preview"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <span className="px-4 py-2 bg-accent-cyan rounded-lg text-white text-sm font-medium flex items-center gap-2">
                        Ver demo completa <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating chat preview */}
                <div className="absolute -bottom-4 -right-4 w-52 p-3 rounded-xl bg-bg-elevated border border-accent-cyan/20 shadow-xl shadow-accent-cyan/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-white font-medium block">Chatbot IA</span>
                      <span className="text-[10px] text-green-400">Online</span>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    "Hola! ¿Te duele algo o buscas información sobre nuestros servicios?"
                  </p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Demos Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {demos.slice(1).map((demo) => {
            const colors = colorMap[demo.color];
            const isHovered = hoveredDemo === demo.id;

            return (
              <motion.a
                key={demo.id}
                href={demo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                onMouseEnter={() => setHoveredDemo(demo.id)}
                onMouseLeave={() => setHoveredDemo(null)}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} hover:border-white/20 transition-all duration-500 hover:scale-[1.02]`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <demo.icon className={`w-6 h-6 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gradient transition-colors">
                  {demo.name}
                </h3>
                <p className="text-text-tertiary text-sm mb-4">
                  {demo.specialty}
                </p>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {demo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {demo.hasChat && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs">
                      <Bot className="w-3 h-3" /> Chatbot
                    </span>
                  )}
                  {demo.hasAutomation && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs">
                      <Zap className="w-3 h-3" /> Auto
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 ${colors.text} text-sm font-medium`}>
                  Ver demo
                  <ExternalLink className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-accent-cyan/20 border-2 border-bg-primary flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-accent-cyan" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent-purple/20 border-2 border-bg-primary flex items-center justify-center">
                <Brain className="w-4 h-4 text-accent-purple" />
              </div>
              <div className="w-8 h-8 rounded-full bg-pink-500/20 border-2 border-bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-pink-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-bg-primary flex items-center justify-center">
                <Footprints className="w-4 h-4 text-blue-400" />
              </div>
            </div>
            <span className="text-text-secondary text-sm">
              4 demos funcionales con chatbot IA incluido
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
