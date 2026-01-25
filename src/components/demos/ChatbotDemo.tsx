"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Loader2 } from "lucide-react"
import { demoSpecialties } from "@/lib/demoConfig"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface ChatbotDemoProps {
  specialtyId: string
}

export function ChatbotDemo({ specialtyId }: ChatbotDemoProps) {
  const specialty = demoSpecialties.find((s) => s.id === specialtyId)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: `¡Hola! Soy el asistente virtual de ${specialty?.clinicName || "la clínica"}. ¿En qué puedo ayudarte hoy?` },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Reset messages when specialty changes
  useEffect(() => {
    const spec = demoSpecialties.find((s) => s.id === specialtyId)
    setMessages([
      { role: "assistant", content: `¡Hola! Soy el asistente virtual de ${spec?.clinicName || "la clínica"}. ¿En qué puedo ayudarte hoy?` },
    ])
  }, [specialtyId])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          specialty: specialtyId,
        }),
      })

      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Chat container */}
      <div className="rounded-2xl border border-bg-hover bg-bg-card overflow-hidden shadow-elevated">
        {/* Header */}
        <div
          className="px-4 py-3 border-b border-bg-hover flex items-center gap-3"
          style={{
            background: `linear-gradient(135deg, ${specialty?.color}15, transparent)`,
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${specialty?.color}20` }}
          >
            <Bot className="w-5 h-5" style={{ color: specialty?.color }} />
          </div>
          <div>
            <p className="font-medium text-text-primary text-sm">
              {specialty?.clinicName}
            </p>
            <p className="text-xs text-text-tertiary">
              Asistente virtual
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex gap-2",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${specialty?.color}20` }}
                  >
                    <Bot
                      className="w-4 h-4"
                      style={{ color: specialty?.color }}
                    />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[75%] px-4 py-2 rounded-2xl text-sm",
                    message.role === "user"
                      ? "bg-accent-cyan text-bg-void"
                      : "bg-bg-elevated text-text-primary"
                  )}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-bg-hover flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-text-secondary" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${specialty?.color}20` }}
              >
                <Bot
                  className="w-4 h-4"
                  style={{ color: specialty?.color }}
                />
              </div>
              <div className="bg-bg-elevated px-4 py-3 rounded-2xl">
                <Loader2 className="w-4 h-4 animate-spin text-text-tertiary" />
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 2 && specialty && (
          <div className="px-4 pb-3">
            <div className="flex flex-wrap gap-2">
              {specialty.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestion(suggestion)}
                  className="text-xs px-3 py-1.5 rounded-full border border-bg-hover text-text-tertiary hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-bg-hover">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-1 px-4 py-2 rounded-xl bg-bg-elevated border border-bg-hover text-text-primary placeholder-text-tertiary text-sm focus:outline-none focus:border-accent-cyan transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 rounded-xl bg-accent-cyan text-bg-void disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-cyan-soft transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Demo notice */}
      <p className="mt-4 text-center text-xs text-text-tertiary">
        Demo interactiva · El chatbot real se personaliza para cada clínica
      </p>
    </div>
  )
}
