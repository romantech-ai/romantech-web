"use client";

import { motion } from "framer-motion";
import { Home, MessageCircle, ArrowLeft } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[120px] md:text-[180px] font-bold leading-none text-gradient">
            404
          </span>
        </motion.div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-text-secondary mb-10 leading-relaxed">
          Parece que esta página no existe o ha sido movida.
          No te preocupes, puedes volver al inicio o contactarme directamente.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton href="/" variant="primary" size="md">
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </LinkButton>
          <LinkButton
            href="https://wa.me/34664241328"
            variant="secondary"
            size="md"
            external
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contactar
          </LinkButton>
        </div>

        {/* Back link */}
        <motion.button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-text-tertiary hover:text-white transition-colors"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver atrás
        </motion.button>
      </motion.div>
    </div>
  );
}
