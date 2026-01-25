import { NextRequest, NextResponse } from "next/server"
import { demoResponses, demoSpecialties } from "@/lib/demoConfig"

export async function POST(request: NextRequest) {
  try {
    const { message, specialty } = await request.json()

    if (!message || !specialty) {
      return NextResponse.json(
        { error: "Mensaje y especialidad son requeridos" },
        { status: 400 }
      )
    }

    const responses = demoResponses[specialty]
    if (!responses) {
      return NextResponse.json(
        { error: "Especialidad no encontrada" },
        { status: 400 }
      )
    }

    // Buscar respuesta basada en palabras clave
    const messageLower = message.toLowerCase()
    let response = responses.default

    // Detectar intención por palabras clave
    const keywords: Record<string, string[]> = {
      cita: ["cita", "reservar", "agendar", "pedir cita", "disponibilidad", "hueco"],
      precio: ["precio", "cuesta", "coste", "tarifa", "cuánto", "cuanto"],
      horario: ["horario", "abierto", "hora", "cuando", "cuándo", "atienden"],
      dolor: ["dolor", "duele", "molestia", "molesta"],
      espalda: ["espalda", "lumbar", "cervical", "columna"],
      ansiedad: ["ansiedad", "ansioso", "nervioso", "estrés", "estres"],
      online: ["online", "videollamada", "virtual", "remoto"],
      botox: ["botox", "bótox", "arrugas", "relleno"],
      promocion: ["promoción", "promocion", "descuento", "oferta"],
      plantillas: ["plantilla", "plantillas", "pisada"],
      unas: ["uña", "uñas", "encarnada", "hongo"],
      blanqueamiento: ["blanquear", "blanqueamiento", "blanco", "dientes blancos"],
      limpieza: ["limpieza", "limpiar", "revisión", "revision"],
    }

    for (const [key, words] of Object.entries(keywords)) {
      if (words.some((word) => messageLower.includes(word))) {
        if (responses[key]) {
          response = responses[key]
          break
        }
      }
    }

    // Simular delay de escritura (300-800ms)
    await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 500))

    return NextResponse.json({ response })
  } catch {
    return NextResponse.json(
      { error: "Error procesando la solicitud" },
      { status: 500 }
    )
  }
}
