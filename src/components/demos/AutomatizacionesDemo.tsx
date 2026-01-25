"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  MessageCircle,
  Bell,
  Users,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Play,
  RotateCcw,
} from "lucide-react"

const flujos = [
  {
    id: "recordatorios",
    titulo: "Recordatorios automáticos",
    descripcion: "WhatsApp 24h antes de cada cita",
    icono: Bell,
    color: "#00D4FF",
    pasos: [
      { texto: "Cita agendada", icono: Calendar },
      { texto: "24h antes", icono: RefreshCw },
      { texto: "WhatsApp enviado", icono: MessageCircle },
      { texto: "Confirmación", icono: CheckCircle2 },
    ],
  },
  {
    id: "noshow",
    titulo: "Gestión de no-shows",
    descripcion: "Lista de espera automática",
    icono: Users,
    color: "#8B5CF6",
    pasos: [
      { texto: "No confirma", icono: Bell },
      { texto: "Hueco libre", icono: Calendar },
      { texto: "Aviso lista espera", icono: MessageCircle },
      { texto: "Hueco cubierto", icono: CheckCircle2 },
    ],
  },
  {
    id: "informes",
    titulo: "Informes automáticos",
    descripcion: "Resumen semanal sin esfuerzo",
    icono: BarChart3,
    color: "#10B981",
    pasos: [
      { texto: "Datos semana", icono: Calendar },
      { texto: "Análisis", icono: RefreshCw },
      { texto: "Informe listo", icono: BarChart3 },
      { texto: "Email enviado", icono: CheckCircle2 },
    ],
  },
]

export function AutomatizacionesDemo() {
  const [flujoActivo, setFlujoActivo] = useState(0)
  const [pasoActivo, setPasoActivo] = useState(-1)

  const flujo = flujos[flujoActivo]
  const IconoFlujo = flujo.icono

  const iniciarDemo = () => {
    setPasoActivo(0)
    let paso = 0
    const interval = setInterval(() => {
      paso++
      if (paso >= flujo.pasos.length) {
        clearInterval(interval)
      } else {
        setPasoActivo(paso)
      }
    }, 1000)
  }

  const resetDemo = () => {
    setPasoActivo(-1)
  }

  const cambiarFlujo = (index: number) => {
    setFlujoActivo(index)
    setPasoActivo(-1)
  }

  const demoCompletada = pasoActivo === flujo.pasos.length - 1
  const demoIniciada = pasoActivo >= 0

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Selector de flujos */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-8">
        {flujos.map((f, index) => {
          const Icon = f.icono
          return (
            <button
              key={f.id}
              onClick={() => cambiarFlujo(index)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm ${
                flujoActivo === index
                  ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                  : "border-bg-hover text-text-tertiary hover:border-bg-hover hover:text-text-secondary"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{f.titulo.split(" ")[0]}</span>
            </button>
          )
        })}
      </div>

      {/* Visualización del flujo */}
      <div className="rounded-2xl border border-bg-hover bg-bg-card p-6">
        {/* Header del flujo */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${flujo.color}20` }}
          >
            <IconoFlujo className="w-5 h-5" style={{ color: flujo.color }} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary">
              {flujo.titulo}
            </h3>
            <p className="text-sm text-text-tertiary">{flujo.descripcion}</p>
          </div>
        </div>

        {/* Pasos del flujo */}
        <div className="flex items-center justify-between mb-6">
          {flujo.pasos.map((paso, index) => {
            const PasoIcon = paso.icono
            const isActive = index <= pasoActivo
            const isCurrent = index === pasoActivo

            return (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: isCurrent ? 1.1 : 1,
                    }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-accent-cyan/20 border-2 border-accent-cyan"
                        : "bg-bg-elevated border border-bg-hover"
                    }`}
                  >
                    <PasoIcon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-accent-cyan" : "text-text-tertiary"
                      }`}
                    />
                  </motion.div>
                  <span
                    className={`mt-2 text-xs text-center max-w-[60px] transition-colors duration-300 ${
                      isActive ? "text-text-secondary" : "text-text-tertiary"
                    }`}
                  >
                    {paso.texto}
                  </span>
                </div>

                {index < flujo.pasos.length - 1 && (
                  <div className="mx-1 sm:mx-3">
                    <ArrowRight
                      className={`w-4 h-4 transition-colors duration-300 ${
                        index < pasoActivo
                          ? "text-accent-cyan"
                          : "text-bg-hover"
                      }`}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Botón de acción */}
        <div className="flex justify-center">
          {!demoIniciada ? (
            <button
              onClick={iniciarDemo}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent-cyan text-bg-void font-medium hover:bg-accent-cyan-soft transition-colors"
            >
              <Play className="w-4 h-4" />
              Ver demo
            </button>
          ) : demoCompletada ? (
            <button
              onClick={resetDemo}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-bg-hover text-text-secondary hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Repetir
            </button>
          ) : (
            <div className="px-6 py-2.5 text-sm text-text-tertiary">
              Ejecutando...
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-4 text-center text-xs text-text-tertiary">
        Demo visual · Las automatizaciones reales se configuran con n8n
      </p>
    </div>
  )
}
