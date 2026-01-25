"use client"

import { motion } from "framer-motion"
import { Activity, Brain, Sparkles, Footprints, Smile } from "lucide-react"
import { demoSpecialties } from "@/lib/demoConfig"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Brain,
  Sparkles,
  Footprints,
  Smile,
}

interface SpecialtySelectorProps {
  selected: string
  onSelect: (id: string) => void
}

export function SpecialtySelector({ selected, onSelect }: SpecialtySelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {demoSpecialties.map((specialty) => {
        const Icon = iconMap[specialty.icon]
        const isSelected = selected === specialty.id

        return (
          <motion.button
            key={specialty.id}
            onClick={() => onSelect(specialty.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition-all duration-200 text-sm",
              isSelected
                ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                : "border-bg-hover text-text-tertiary hover:border-bg-hover hover:text-text-secondary"
            )}
          >
            {Icon && (
              <Icon
                className="w-4 h-4"
                style={{ color: isSelected ? specialty.color : undefined }}
              />
            )}
            <span className="font-medium">{specialty.name}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
