"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden
                     bg-bg-primary/95 backdrop-blur-xl border-t border-white/10
                     px-4 py-3 safe-area-bottom"
        >
          <a
            href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                       bg-gradient-to-r from-accent-cyan to-accent-purple
                       text-white font-semibold text-base
                       shadow-[0_0_30px_rgba(0,212,255,0.3)]
                       active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-5 h-5" />
            Ver demo para mi clínica
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
