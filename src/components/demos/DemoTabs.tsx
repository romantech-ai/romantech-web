"use client"

import { motion } from "framer-motion"
import { MessageSquare, Workflow, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "chatbot", label: "Chatbot IA", icon: MessageSquare },
  { id: "automatizaciones", label: "Automatizaciones", icon: Workflow },
  { id: "consultoria", label: "Consultoría", icon: Users },
]

interface DemoTabsProps {
  selected: string
  onSelect: (id: string) => void
}

export function DemoTabs({ selected, onSelect }: DemoTabsProps) {
  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isSelected = selected === tab.id

        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all",
              isSelected
                ? "text-accent-cyan"
                : "text-text-tertiary hover:text-text-secondary"
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-accent-cyan/10 border border-accent-cyan/30 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon className="w-5 h-5 relative z-10" />
            <span className="relative z-10 hidden sm:inline">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
