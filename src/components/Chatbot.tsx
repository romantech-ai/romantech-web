'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Phone, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const STORAGE_KEY = 'romantech-chat';
const WHATSAPP_NUMBER = '34664241328';
const CALENDLY_URL = 'https://calendly.com/emilio-romantech/demo-del-sistema-30-min';

const initialMessage: Message = {
  id: '1',
  role: 'assistant',
  content: 'Hola! Soy el asistente virtual de RomanTech. Te ayudo a descubrir cómo la automatización puede transformar tu negocio. ¿En qué puedo ayudarte?',
};

const quickReplies = [
  { label: 'Quiero un chatbot', icon: Bot },
  { label: 'Automatizar tareas', icon: MessageSquare },
  { label: 'Ver demo gratis', icon: Phone },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setShowQuickReplies(false);
        }
      } catch {
        // Invalid data, use default
      }
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setShowQuickReplies(false);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          history: messages,
        }),
      });

      const data = await response.json();

      if (data.reply) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.reply,
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Ups, hubo un problema. ¿Prefieres contactarme por WhatsApp?',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (label: string) => {
    if (label === 'Ver demo gratis') {
      window.open(CALENDLY_URL, '_blank');
    } else {
      sendMessage(label);
    }
  };

  const openWhatsApp = () => {
    // Extract conversation summary for WhatsApp
    const summary = messages
      .filter(m => m.role === 'user')
      .map(m => m.content)
      .join(' | ');

    const text = summary
      ? `Hola! Vengo del chat de la web. Estaba preguntando sobre: ${summary.slice(0, 200)}`
      : 'Hola! Me interesa saber más sobre vuestros servicios de automatización.';

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const clearChat = () => {
    setMessages([initialMessage]);
    setShowQuickReplies(true);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple shadow-lg shadow-accent-cyan/25 flex items-center justify-center text-white"
            aria-label="Abrir chat"
          >
            <MessageSquare className="w-6 h-6" />
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-bg-primary animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-bg-elevated shadow-2xl shadow-black/50 border border-white/10 flex flex-col overflow-hidden
              bottom-0 right-0 w-full h-[100dvh] rounded-none
              sm:bottom-6 sm:right-6 sm:w-[380px] sm:max-w-[calc(100vw-48px)] sm:h-[520px] sm:max-h-[calc(100vh-100px)] sm:rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 sm:py-3 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border-b border-white/10 safe-top">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden p-2 -ml-2 text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">Asistente RomanTech</p>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online ahora
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="p-2 text-text-secondary hover:text-white transition-colors text-xs"
                  title="Limpiar chat"
                >
                  Limpiar
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hidden sm:block p-2 text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-accent-purple/20'
                      : 'bg-accent-cyan/20'
                  }`}>
                    {message.role === 'user'
                      ? <User className="w-4 h-4 text-accent-purple" />
                      : <Bot className="w-4 h-4 text-accent-cyan" />
                    }
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                    message.role === 'user'
                      ? 'bg-accent-purple/20 text-white rounded-tr-sm'
                      : 'bg-white/5 text-text-primary rounded-tl-sm'
                  }`}>
                    {message.role === 'assistant' ? (
                      <ReactMarkdown
                        components={{
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-cyan hover:text-accent-cyan/80 underline underline-offset-2 transition-colors"
                            >
                              {children}
                            </a>
                          ),
                          p: ({ children }) => <span>{children}</span>,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-accent-cyan" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-accent-cyan/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-accent-cyan/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-accent-cyan/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <AnimatePresence>
              {showQuickReplies && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-2"
                >
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply.label}
                        onClick={() => handleQuickReply(reply.label)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/30 rounded-full text-xs text-text-secondary hover:text-white transition-all"
                      >
                        <reply.icon className="w-3 h-3" />
                        {reply.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WhatsApp CTA */}
            <div className="px-4 pb-2">
              <button
                onClick={openWhatsApp}
                className="w-full py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl text-[#25D366] text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Continuar por WhatsApp
              </button>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 pt-2 pb-4 sm:pb-4 border-t border-white/10 safe-bottom">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-text-tertiary focus:outline-none focus:border-accent-cyan/50 disabled:opacity-50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent-cyan/25 transition-all flex-shrink-0"
                  aria-label="Enviar mensaje"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 sm:w-4 sm:h-4 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
