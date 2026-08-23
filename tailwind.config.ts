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
        pb: {
          navy: {
            DEFAULT: "#0A1128",
            deep: "#050917",
            light: "#121C3B",
            muted: "#1E293B",
          },
          blue: {
            DEFAULT: "#0052FF",
            hover: "#0043D6",
            light: "#38BDF8",
            soft: "#F0F5FF",
            border: "#D0E1FF",
          },
          surface: {
            bg: "#FAFAFC",
            card: "#FFFFFF",
            subtle: "#F8FAFC",
            border: "#E2E8F0",
          },
          text: {
            primary: "#0F172A",
            secondary: "#475569",
            muted: "#94A3B8",
          }
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        'pb-sm': '0 2px 8px -2px rgba(10, 17, 40, 0.05)',
        'pb-card': '0 4px 20px -2px rgba(10, 17, 40, 0.06), 0 2px 6px -1px rgba(10, 17, 40, 0.04)',
        'pb-glow': '0 0 30px rgba(0, 82, 255, 0.15)',
        'pb-float': '0 12px 32px -4px rgba(10, 17, 40, 0.12), 0 4px 12px -2px rgba(10, 17, 40, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
