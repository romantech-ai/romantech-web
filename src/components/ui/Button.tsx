"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  withArrow?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      withArrow = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      relative overflow-hidden
      font-semibold
      rounded-xl
      border
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
      disabled:opacity-50 disabled:cursor-not-allowed
      inline-flex items-center justify-center gap-2
      group
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-accent-cyan to-accent-purple
        text-white
        border-white/10
        shadow-[0_0_30px_rgba(0,200,240,0.3)]
        hover:shadow-[0_0_50px_rgba(0,200,240,0.5)]
        focus:ring-accent-cyan/50
      `,
      secondary: `
        bg-white/5
        text-white
        border-white/10
        hover:bg-white/10
        hover:border-white/20
        focus:ring-white/30
      `,
      ghost: `
        bg-transparent
        text-text-secondary
        border-transparent
        hover:text-white
        hover:bg-white/5
        focus:ring-white/20
      `,
      glow: `
        bg-gradient-to-r from-accent-cyan to-accent-purple
        text-white
        border-white/10
        shadow-[0_0_30px_rgba(0,200,240,0.4),0_0_60px_rgba(147,102,255,0.2)]
        hover:shadow-[0_0_50px_rgba(0,200,240,0.6),0_0_80px_rgba(147,102,255,0.3)]
        focus:ring-accent-cyan/50
        animate-pulse-slow
      `,
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-8 py-4 text-base",
      lg: "px-10 py-5 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {/* Shine effect - improved sweep */}
        {(variant === "primary" || variant === "glow") && (
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent
                       -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out
                       pointer-events-none"
          />
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {children}
              {withArrow && (
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };

// Link Button for navigation
interface LinkButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  external = false,
}: LinkButtonProps) {
  const baseStyles = `
    relative overflow-hidden
    font-semibold
    rounded-xl
    border
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    inline-flex items-center justify-center gap-2
    group
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-accent-cyan to-accent-purple
      text-white
      border-white/10
      shadow-[0_0_30px_rgba(0,200,240,0.3)]
      hover:shadow-[0_0_50px_rgba(0,200,240,0.5)]
      hover:scale-[1.02] hover:-translate-y-0.5
      active:scale-[0.98]
      focus:ring-accent-cyan/50
    `,
    secondary: `
      bg-white/5
      text-white
      border-white/10
      hover:bg-white/10
      hover:border-white/20
      hover:scale-[1.02] hover:-translate-y-0.5
      active:scale-[0.98]
      focus:ring-white/30
    `,
    ghost: `
      bg-transparent
      text-text-secondary
      border-transparent
      hover:text-white
      hover:bg-white/5
      focus:ring-white/20
    `,
    glow: `
      bg-gradient-to-r from-accent-cyan to-accent-purple
      text-white
      border-white/10
      shadow-[0_0_30px_rgba(0,200,240,0.4),0_0_60px_rgba(147,102,255,0.2)]
      hover:shadow-[0_0_50px_rgba(0,200,240,0.6),0_0_80px_rgba(147,102,255,0.3)]
      hover:scale-[1.02] hover:-translate-y-0.5
      active:scale-[0.98]
      focus:ring-accent-cyan/50
    `,
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <motion.a
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Shine effect - improved sweep */}
      {(variant === "primary" || variant === "glow") && (
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent
                     -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out
                     pointer-events-none"
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </motion.a>
  );
}
