"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, Sparkles } from "lucide-react";
import { Container, Section } from "../ui/Container";
import { slideInLeft, slideInRight } from "@/lib/animations";

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/romantech/", label: "LinkedIn" },
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/romantech-ai", label: "GitHub" },
];

export function About() {
  return (
    <Section id="sobre-mi" gradient>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative mx-auto lg:mx-0 order-1 lg:order-1"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow effect */}
              <div
                className="absolute inset-[-30px] rounded-3xl blur-[80px] opacity-40
                            bg-gradient-to-br from-accent-cyan to-accent-purple"
              />

              {/* Border gradient container */}
              <div
                className="relative w-full h-full rounded-3xl p-[3px]
                            bg-gradient-to-br from-accent-cyan to-accent-purple"
              >
                {/* Image container */}
                <div className="w-full h-full rounded-[calc(1.5rem-3px)] overflow-hidden bg-bg-primary relative">
                  <Image
                    src="/roman-profile.jpg"
                    alt="Emilio - Fundador de Román Tech, especialista en automatización e IA"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-xl
                            bg-gradient-to-br from-accent-cyan/20 to-transparent
                            border border-accent-cyan/20 backdrop-blur-sm
                            hidden md:block"
              />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl
                            bg-gradient-to-br from-accent-purple/20 to-transparent
                            border border-accent-purple/20 backdrop-blur-sm
                            hidden md:block"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-accent-cyan" />
              Hola, soy Emilio
            </h2>

            {/* Eslogan */}
            <p className="text-lg text-accent-cyan italic mb-6">
              &ldquo;La mejor inversión es aquella que te devuelve tiempo.&rdquo;
            </p>

            {/* Credentials - Profesionales */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
                Ingeniero Informático
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-text-secondary">
                Certificado n8n & Make
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-text-secondary">
                WhatsApp Business API
              </span>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed mb-6">
              <p>
                Fundador de <span className="text-white">Román Tech</span>, donde ayudo a negocios
                a automatizar sus procesos y escalar con tecnología.
              </p>

              <p>
                Diseño <span className="text-white">chatbots, automatizaciones
                y webs</span> que trabajan por ti: responden clientes, captan leads, eliminan
                tareas repetitivas y hacen crecer tu negocio.
              </p>

              <p>
                Mi enfoque:{" "}
                <span className="text-white">
                  tecnología que funciona sin que tengas que entenderla.
                </span>{" "}
                Tú te dedicas a lo importante, yo me encargo del resto.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar perfil de ${link.label}`}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10
                             flex items-center justify-center text-text-secondary
                             hover:text-white hover:bg-white/10 hover:border-white/20
                             transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
