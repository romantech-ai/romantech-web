"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeader } from "../ui/Container";
import { fadeUp } from "@/lib/animations";

// Technology logos as simple text/icons - in production these would be actual SVGs
const technologies = [
  { name: "OpenAI", logo: "🤖" },
  { name: "Claude", logo: "🧠" },
  { name: "n8n", logo: "⚡" },
  { name: "React", logo: "⚛️" },
  { name: "Next.js", logo: "▲" },
  { name: "Vercel", logo: "◢" },
  { name: "WhatsApp", logo: "💬" },
  { name: "Make", logo: "🔄" },
  { name: "Notion", logo: "📝" },
  { name: "Supabase", logo: "⚡" },
];

export function Technologies() {
  return (
    <Section className="bg-bg-void py-16 overflow-hidden">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="Tecnología de vanguardia"
            subtitle="Las mejores herramientas para construir soluciones excepcionales."
          />
        </motion.div>
      </Container>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-void to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-void to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 py-4 mx-4 rounded-xl
                         bg-white/[0.02] border border-white/[0.05]
                         hover:bg-white/[0.04] hover:border-white/[0.1]
                         transition-all duration-300 group shrink-0"
            >
              <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">
                {tech.logo}
              </span>
              <span className="text-text-secondary group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
