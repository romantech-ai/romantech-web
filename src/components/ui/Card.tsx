"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  variant?: "default" | "glass" | "gradient" | "premium";
  hover?: boolean;
  className?: string;
  children: ReactNode;
}

function Card({ className, variant = "default", hover = true, children }: CardProps) {
  const baseStyles = `
    relative
    p-8
    rounded-2xl
    transition-all duration-500
  `;

  const variants = {
    default: `
      bg-white/[0.02]
      border border-white/[0.05]
      ${hover ? "hover:bg-white/[0.04] hover:border-accent-cyan/20" : ""}
    `,
    glass: `
      bg-white/[0.03]
      backdrop-blur-xl
      border border-white/[0.08]
      ${hover ? "hover:bg-white/[0.05] hover:border-white/[0.12]" : ""}
    `,
    gradient: `
      bg-gradient-to-br from-white/[0.05] to-transparent
      border border-white/[0.05]
      ${hover ? "hover:border-accent-cyan/30" : ""}
    `,
    premium: `
      bg-bg-card
      border border-transparent
      card-premium
    `,
  };

  return (
    <motion.div
      className={cn(baseStyles, variants[variant], "group", className)}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {hover && variant !== "premium" && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10
                      transition-opacity duration-500 pointer-events-none"
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Service Card Component
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string;
  ctaText?: string;
  badge?: string;
}

export function ServiceCard({ icon, title, description, features, href = "#", ctaText = "Saber más", badge }: ServiceCardProps) {
  return (
    <Card variant="premium" className="flex flex-col h-full">
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 -right-3 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                          bg-accent-cyan text-bg-primary shadow-glow-cyan">
            {badge}
          </span>
        </div>
      )}

      {/* Icon container */}
      <div
        className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20
                    flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-500"
      >
        <div className="text-accent-cyan">{icon}</div>
      </div>

      {/* Content */}
      <h3
        className="text-xl font-semibold text-white mb-3
                   group-hover:text-accent-cyan transition-colors duration-300"
      >
        {title}
      </h3>

      <p className="text-text-secondary leading-relaxed mb-6 flex-grow">{description}</p>

      {/* Features list */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Link - CTA específico */}
      <a
        href={href}
        className="inline-flex items-center gap-2 text-accent-cyan font-medium
                   group-hover:gap-3 transition-all duration-300"
      >
        {ctaText}
        <ArrowRight className="w-4 h-4" />
      </a>
    </Card>
  );
}

// Problem Card Component
interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <div
      className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]
                  text-center hover:border-accent-cyan/20 transition-colors duration-300"
    >
      <div className="text-text-tertiary mb-4 flex justify-center">
        <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Process Card Component
interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessCard({ number, title, description, isLast = false }: ProcessCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Number */}
      <div
        className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20
                    flex items-center justify-center mb-6 border border-white/10
                    shadow-[0_0_30px_rgba(0,200,240,0.2)]
                    group-hover:shadow-[0_0_40px_rgba(0,200,240,0.3)] transition-shadow duration-300"
      >
        <span className="text-3xl font-bold text-gradient">{number}</span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">{title}</h3>
      <p className="text-text-secondary leading-relaxed max-w-xs">{description}</p>

      {/* Connector line (hidden on last card) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px
                      bg-gradient-to-r from-accent-cyan/30 via-accent-purple/30 to-accent-cyan/30"
        />
      )}
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-text-secondary text-sm">{label}</div>
    </div>
  );
}

export { Card };
