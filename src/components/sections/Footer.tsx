"use client";

import { Container } from "../ui/Container";
import { Linkedin, Github } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Chatbots IA", href: "#servicios" },
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Automatizaciones", href: "#servicios" },
    { label: "Consultoría", href: "#servicios" },
  ],
  contact: [
    { label: "emilio@romantech.es", href: "mailto:emilio@romantech.es" },
    { label: "Calendly", href: "https://calendly.com/emilio-romantech/demo-del-sistema-30-min", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/romantech/", external: true },
    { label: "GitHub", href: "https://github.com/romantech-ai", external: true },
  ],
  legal: [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Aviso legal", href: "/aviso-legal" },
  ],
};

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/romantech/", label: "LinkedIn" },
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/romantech-ai", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-bg-void border-t border-white/5">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt="Román Tech"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-semibold text-white tracking-tight">
                  Román Tech
                </span>
              </a>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
                Automatización e Inteligencia Artificial para negocios que quieren
                crecer sin complicaciones técnicas.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10
                               flex items-center justify-center text-text-tertiary
                               hover:text-white hover:bg-white/10 hover:border-white/20
                               transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-text-secondary hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6">
          <p className="text-text-tertiary text-sm text-center">
            © 2026 Román Tech
          </p>
        </div>
      </Container>
    </footer>
  );
}
