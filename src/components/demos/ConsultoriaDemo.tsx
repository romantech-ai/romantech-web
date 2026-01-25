"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  FileText,
  Users,
  Headphones,
  CheckCircle2,
} from "lucide-react"

const fases = [
  {
    id: "auditoria",
    numero: "01",
    titulo: "Auditoría",
    descripcion: "Analizamos tus procesos actuales",
    detalles: [
      "Revisión de flujos de trabajo",
      "Identificación de tareas repetitivas",
      "Análisis de herramientas actuales",
      "Detección de cuellos de botella",
    ],
    icono: Search,
    color: "#00D4FF",
  },
  {
    id: "plan",
    numero: "02",
    titulo: "Plan personalizado",
    descripcion: "Diseñamos tu hoja de ruta",
    detalles: [
      "Priorización de automatizaciones",
      "Selección de herramientas",
      "Cronograma de implementación",
      "Presupuesto detallado",
    ],
    icono: FileText,
    color: "#8B5CF6",
  },
  {
    id: "formacion",
    numero: "03",
    titulo: "Formación",
    descripcion: "Capacitamos a tu equipo",
    detalles: [
      "Sesiones prácticas",
      "Documentación personalizada",
      "Vídeos de referencia",
      "Resolución de dudas en directo",
    ],
    icono: Users,
    color: "#10B981",
  },
  {
    id: "soporte",
    numero: "04",
    titulo: "Soporte continuo",
    descripcion: "Te acompañamos post-lanzamiento",
    detalles: [
      "Soporte por WhatsApp",
      "Ajustes y mejoras",
      "Actualizaciones incluidas",
      "Revisiones periódicas",
    ],
    icono: Headphones,
    color: "#F59E0B",
  },
]

export function ConsultoriaDemo() {
  const [faseActiva, setFaseActiva] = useState(0)

  const fase = fases[faseActiva]
  const IconoFase = fase.icono

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Timeline horizontal */}
      <div className="flex justify-between items-center mb-8 px-4">
        {fases.map((f, index) => {
          const Icon = f.icono
          const isActive = index === faseActiva
          const isPast = index < faseActiva

          return (
            <button
              key={f.id}
              onClick={() => setFaseActiva(index)}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? "border-2 scale-110"
                    : isPast
                    ? "border-2"
                    : "border border-bg-hover"
                }`}
                style={{
                  borderColor: isActive || isPast ? f.color : undefined,
                  backgroundColor: isActive ? `${f.color}20` : "transparent",
                }}
              >
                {isPast ? (
                  <CheckCircle2 className="w-6 h-6" style={{ color: f.color }} />
                ) : (
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: isActive ? f.color : undefined }}
                  />
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  isActive ? "text-text-primary" : "text-text-tertiary"
                }`}
              >
                {f.numero}
              </span>
            </button>
          )
        })}
      </div>

      {/* Contenido de la fase */}
      <motion.div
        key={faseActiva}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-bg-hover bg-bg-card p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${fase.color}20` }}
          >
            <IconoFase className="w-7 h-7" style={{ color: fase.color }} />
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: fase.color }}>
              Fase {fase.numero}
            </div>
            <h3 className="text-xl font-semibold text-text-primary">
              {fase.titulo}
            </h3>
            <p className="text-sm text-text-tertiary">{fase.descripcion}</p>
          </div>
        </div>

        {/* Detalles */}
        <div className="space-y-3">
          {fase.detalles.map((detalle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-bg-elevated"
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: fase.color }} />
              <span className="text-sm text-text-secondary">{detalle}</span>
            </motion.div>
          ))}
        </div>

        {/* Navegación */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setFaseActiva(Math.max(0, faseActiva - 1))}
            disabled={faseActiva === 0}
            className="px-4 py-2 text-sm text-text-tertiary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setFaseActiva(Math.min(fases.length - 1, faseActiva + 1))}
            disabled={faseActiva === fases.length - 1}
            className="px-4 py-2 text-sm text-accent-cyan hover:text-accent-cyan-soft disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Siguiente →
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <p className="mt-4 text-center text-xs text-text-tertiary">
        Proceso de consultoría típico · Se adapta a cada clínica
      </p>
    </div>
  )
}
