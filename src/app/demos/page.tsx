"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { DemoTabs } from "@/components/demos/DemoTabs"
import { SpecialtySelector } from "@/components/demos/SpecialtySelector"
import { ChatbotDemo } from "@/components/demos/ChatbotDemo"
import { AutomatizacionesDemo } from "@/components/demos/AutomatizacionesDemo"
import { ConsultoriaDemo } from "@/components/demos/ConsultoriaDemo"

export default function DemosPage() {
  const [activeTab, setActiveTab] = useState("chatbot")
  const [selectedSpecialty, setSelectedSpecialty] = useState("fisioterapia")

  return (
    <div className="min-h-screen flex flex-col bg-bg-void">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan rounded-full blur-[200px] opacity-10" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Ir a inicio"
          >
            <Image
              src="/logo.png"
              alt="Román Tech logo"
              width={40}
              height={40}
              className="group-hover:opacity-90 transition-opacity duration-300"
              priority
            />
            <span className="text-xl font-semibold text-white tracking-tight">
              Román Tech
            </span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col px-4 py-6">
        {/* Tabs de demos */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <DemoTabs selected={activeTab} onSelect={setActiveTab} />
        </motion.div>

        {/* Contenido de cada demo */}
        <AnimatePresence mode="wait">
          {activeTab === "chatbot" && (
            <motion.div
              key="chatbot"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col items-center"
            >
              {/* Specialty Selector */}
              <div className="mb-6">
                <SpecialtySelector
                  selected={selectedSpecialty}
                  onSelect={setSelectedSpecialty}
                />
              </div>

              {/* Chatbot Demo */}
              <ChatbotDemo specialtyId={selectedSpecialty} />
            </motion.div>
          )}

          {activeTab === "automatizaciones" && (
            <motion.div
              key="automatizaciones"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex items-center justify-center"
            >
              <AutomatizacionesDemo />
            </motion.div>
          )}

          {activeTab === "consultoria" && (
            <motion.div
              key="consultoria"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex items-center justify-center"
            >
              <ConsultoriaDemo />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center">
        <p className="text-xs text-text-tertiary">
          Demo de{" "}
          <Link
            href="/"
            className="text-accent-cyan hover:underline"
          >
            RomanTech
          </Link>
          {" · "}
          <Link
            href="/#contacto"
            className="text-text-tertiary hover:text-accent-cyan"
          >
            Contactar
          </Link>
        </p>
      </footer>
    </div>
  )
}
