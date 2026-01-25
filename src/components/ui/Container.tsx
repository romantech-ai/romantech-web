import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "tight" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const sizes = {
    default: "max-w-7xl",
    tight: "max-w-5xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div className={cn("mx-auto px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

export function Section({ children, className, id, gradient = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-section relative",
        gradient && "section-gradient",
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  decorated?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  centered = true,
  decorated = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {/* Eyebrow text */}
      {eyebrow && (
        <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}

      {/* Title with optional decorative lines */}
      {decorated ? (
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan/50" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>
          <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-accent-purple/50" />
        </div>
      ) : (
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          "text-text-secondary text-lg",
          centered && "max-w-2xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
