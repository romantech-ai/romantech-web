"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeader } from "../ui/Container";
import { fadeUp } from "@/lib/animations";
import {
  Brain,
  Sparkles,
  Workflow,
  Code2,
  Globe,
  Rocket,
  MessageCircle,
  Zap,
  FileText,
  Database,
} from "lucide-react";

const technologies = [
  { name: "OpenAI", icon: <Brain className="w-5 h-5" /> },
  { name: "Claude", icon: <Sparkles className="w-5 h-5" /> },
  { name: "n8n", icon: <Workflow className="w-5 h-5" /> },
  { name: "React", icon: <Code2 className="w-5 h-5" /> },
  { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
  { name: "Vercel", icon: <Rocket className="w-5 h-5" /> },
  { name: "WhatsApp API", icon: <MessageCircle className="w-5 h-5" /> },
  { name: "Make", icon: <Zap className="w-5 h-5" /> },
  { name: "Notion", icon: <FileText className="w-5 h-5" /> },
  { name: "Supabase", icon: <Database className="w-5 h-5" /> },
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
                         hover:bg-white/[0.04] hover:border-accent-cyan/20
                         transition-all duration-300 group shrink-0"
            >
              <span className="text-accent-cyan/70 group-hover:text-accent-cyan transition-colors duration-300">
                {tech.icon}
              </span>
              <span className="text-text-secondary group-hover:text-white transition-colors duration-300 whitespace-nowrap font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
