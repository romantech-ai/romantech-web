import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds - warmer tones
        'bg-void': '#060709',
        'bg-primary': '#0a0b11',
        'bg-elevated': '#0f1118',
        'bg-card': '#13151d',
        'bg-hover': '#1a1c26',
        // Accents - optimized
        'accent-cyan': '#00C8F0',        // Slightly warmer, more sophisticated
        'accent-cyan-soft': '#00A8CC',
        'accent-purple': '#9366FF',      // More vibrant and unique
        'accent-purple-soft': '#7C4DFF',
        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'text-tertiary': '#7C8BA1',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        body: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 1.5rem + 6vw, 6rem)',
        '5xl': 'clamp(3rem, 2rem + 5vw, 5rem)',
        '4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)',
        '3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        '2xl': 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)',
        'xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 10rem)',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 200, 240, 0.35)',
        'glow-cyan-intense': '0 0 50px rgba(0, 200, 240, 0.5)',
        'glow-purple': '0 0 30px rgba(147, 102, 255, 0.35)',
        'glow-mixed': '0 0 40px rgba(0, 200, 240, 0.25), 0 0 80px rgba(147, 102, 255, 0.15)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #00C8F0 0%, #9366FF 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #00D8FF 0%, #A080FF 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
