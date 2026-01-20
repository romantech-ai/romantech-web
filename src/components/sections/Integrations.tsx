'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '@/components/ui/Container';
import { fadeUp, staggerContainer } from '@/lib/animations';

// Integration logos as simple SVG icons or text representations
const integrationCategories = [
  {
    name: 'Comunicación',
    color: 'cyan',
    integrations: [
      { name: 'WhatsApp', logo: '/integrations/whatsapp.svg' },
      { name: 'Instagram', logo: '/integrations/instagram.svg' },
      { name: 'Telegram', logo: '/integrations/telegram.svg' },
      { name: 'Email', logo: '/integrations/email.svg' },
    ],
  },
  {
    name: 'Calendarios',
    color: 'purple',
    integrations: [
      { name: 'Calendly', logo: '/integrations/calendly.svg' },
      { name: 'Cal.com', logo: '/integrations/calcom.svg' },
      { name: 'Google Calendar', logo: '/integrations/google-calendar.svg' },
      { name: 'Outlook', logo: '/integrations/outlook.svg' },
    ],
  },
  {
    name: 'CRM & Gestión',
    color: 'green',
    integrations: [
      { name: 'HubSpot', logo: '/integrations/hubspot.svg' },
      { name: 'Pipedrive', logo: '/integrations/pipedrive.svg' },
      { name: 'Notion', logo: '/integrations/notion.svg' },
      { name: 'Airtable', logo: '/integrations/airtable.svg' },
    ],
  },
  {
    name: 'Automatización',
    color: 'orange',
    integrations: [
      { name: 'n8n', logo: '/integrations/n8n.svg' },
      { name: 'Make', logo: '/integrations/make.svg' },
      { name: 'Zapier', logo: '/integrations/zapier.svg' },
      { name: 'ActivePieces', logo: '/integrations/activepieces.svg' },
    ],
  },
  {
    name: 'Inteligencia Artificial',
    color: 'pink',
    integrations: [
      { name: 'OpenAI', logo: '/integrations/openai.svg' },
      { name: 'Claude', logo: '/integrations/claude.svg' },
      { name: 'Whisper', logo: '/integrations/whisper.svg' },
      { name: 'ElevenLabs', logo: '/integrations/elevenlabs.svg' },
    ],
  },
  {
    name: 'Pagos',
    color: 'blue',
    integrations: [
      { name: 'Stripe', logo: '/integrations/stripe.svg' },
      { name: 'PayPal', logo: '/integrations/paypal.svg' },
      { name: 'Redsys', logo: '/integrations/redsys.svg' },
      { name: 'SumUp', logo: '/integrations/sumup.svg' },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: 'bg-accent-cyan/5', border: 'border-accent-cyan/20', text: 'text-accent-cyan' },
  purple: { bg: 'bg-accent-purple/5', border: 'border-accent-purple/20', text: 'text-accent-purple' },
  green: { bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  orange: { bg: 'bg-orange-500/5', border: 'border-orange-500/20', text: 'text-orange-400' },
  pink: { bg: 'bg-pink-500/5', border: 'border-pink-500/20', text: 'text-pink-400' },
  blue: { bg: 'bg-blue-500/5', border: 'border-blue-500/20', text: 'text-blue-400' },
};

export function Integrations() {
  return (
    <Section id="integraciones" gradient>
      <Container>
        <SectionHeader
          title="Se Conecta con Todo"
          subtitle="Integro tus herramientas favoritas para que trabajen juntas de forma automática."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrationCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:${colors.border} transition-colors`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${colors.bg} ${colors.border} border`} />
                  <h3 className={`font-semibold ${colors.text}`}>{category.name}</h3>
                </div>

                {/* Integration Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.integrations.map((integration, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors group"
                    >
                      {/* Placeholder for logo - using text for now */}
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-text-tertiary group-hover:text-white transition-colors">
                        {integration.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <span className="text-2xl font-bold text-gradient">+500</span>
            <span className="text-text-secondary text-sm">integraciones disponibles con n8n y Make</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
