"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "34664241328";
const WHATSAPP_MESSAGE = "Hola! Tengo una clínica y me interesa saber más sobre los chatbots de WhatsApp para automatizar citas.";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3
                 bg-[#25D366] hover:bg-[#20BD5A]
                 text-white font-semibold
                 px-5 py-4 rounded-full
                 shadow-[0_4px_20px_rgba(37,211,102,0.4)]
                 hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)]
                 transition-all duration-300
                 group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">¿Dudas? Escríbeme</span>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Tooltip on mobile */}
      <span className="sm:hidden absolute -top-10 right-0 whitespace-nowrap px-3 py-1 rounded-lg
                       bg-bg-card border border-white/10 text-white text-xs font-medium
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       shadow-lg">
        ¿Dudas? Escríbeme
      </span>
    </motion.a>
  );
}
