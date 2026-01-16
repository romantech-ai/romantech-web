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
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
