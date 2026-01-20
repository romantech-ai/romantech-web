'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Phone } from 'lucide-react';

interface DemoMessage {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  delay: number;
}

const demoConversation: DemoMessage[] = [
  { id: 1, role: 'assistant', content: 'Hola! Soy el asistente de RomanTech. ¿En qué puedo ayudarte?', delay: 0 },
  { id: 2, role: 'user', content: 'Tengo una clínica de fisioterapia y pierdo muchos clientes por no responder a tiempo', delay: 2000 },
  { id: 3, role: 'assistant', content: 'Entiendo perfectamente. ¿Cuántos mensajes recibes al día aproximadamente?', delay: 4500 },
  { id: 4, role: 'user', content: 'Unos 20-30 por WhatsApp, muchos preguntan horarios y precios', delay: 7000 },
  { id: 5, role: 'assistant', content: 'Un chatbot podría responder eso 24/7 y agendar citas automáticamente. ¿Te gustaría ver cómo funciona en una demo de 30 min?', delay: 9500 },
];

export default function ChatbotDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let timeouts: NodeJS.Timeout[] = [];

    demoConversation.forEach((message, index) => {
      // Show typing indicator before each message
      const typingTimeout = setTimeout(() => {
        if (message.role === 'assistant') {
          setIsTyping(true);
        }
      }, message.delay);
      timeouts.push(typingTimeout);

      // Show the message
      const messageTimeout = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, message.id]);
      }, message.delay + (message.role === 'assistant' ? 1000 : 0));
      timeouts.push(messageTimeout);
    });

    // Show CTA after conversation
    const ctaTimeout = setTimeout(() => {
      setShowCTA(true);
    }, 12000);
    timeouts.push(ctaTimeout);

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [hasStarted]);

  const startDemo = () => {
    setHasStarted(true);
    setVisibleMessages([]);
    setShowCTA(false);
  };

  const restartDemo = () => {
    setHasStarted(false);
    setVisibleMessages([]);
    setShowCTA(false);
    setTimeout(() => setHasStarted(true), 100);
  };

  return (
    <div className="w-full max-w-[380px] bg-bg-elevated rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white">Asistente IA</p>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Siempre disponible
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-[320px] overflow-y-auto p-4 space-y-4">
        {!hasStarted ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <Bot className="w-12 h-12 text-accent-cyan/50 mb-4" />
            <p className="text-text-secondary text-sm mb-4">Mira cómo funciona un chatbot de captación</p>
            <button
              onClick={startDemo}
              className="px-6 py-2 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-accent-cyan/25 transition-all"
            >
              Ver demostración
            </button>
          </div>
        ) : (
          <>
            <AnimatePresence>
              {demoConversation
                .filter(m => visibleMessages.includes(m.id))
                .map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user'
                        ? 'bg-accent-purple/20'
                        : 'bg-accent-cyan/20'
                    }`}>
                      {message.role === 'user'
                        ? <User className="w-3.5 h-3.5 text-accent-purple" />
                        : <Bot className="w-3.5 h-3.5 text-accent-cyan" />
                      }
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                      message.role === 'user'
                        ? 'bg-accent-purple/20 text-white rounded-tr-sm'
                        : 'bg-white/5 text-text-primary rounded-tl-sm'
                    }`}>
                      {message.content}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-accent-cyan" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-sm px-3 py-2">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-accent-cyan/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-accent-cyan/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-accent-cyan/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            <AnimatePresence>
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl"
                >
                  <p className="text-xs text-[#25D366] mb-2 font-medium">El chatbot genera un resumen y envía a WhatsApp:</p>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                    <span>Continuar por WhatsApp</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Footer */}
      {hasStarted && showCTA && (
        <div className="px-4 py-3 border-t border-white/10">
          <button
            onClick={restartDemo}
            className="w-full py-2 text-text-secondary hover:text-white text-xs transition-colors"
          >
            Reiniciar demostración
          </button>
        </div>
      )}
    </div>
  );
}
