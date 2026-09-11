import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#05070D",
        surface: {
          DEFAULT: "#0B0F19",
          50: "#141B2D",
          100: "#1A233A",
          200: "#24304F",
          card: "rgba(13, 18, 30, 0.75)",
          glass: "rgba(18, 24, 42, 0.6)",
        },
        cyber: {
          cyan: "#00F0FF",
          blue: "#3B82F6",
          indigo: "#6366F1",
          purple: "#8B5CF6",
          emerald: "#10B981",
          amber: "#F59E0B",
          rose: "#F43F5E",
        },
        accent: {
          primary: "#38BDF8",
          secondary: "#818CF8",
          glow: "rgba(56, 189, 248, 0.15)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(56, 189, 248, 0.25)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 15px rgba(56, 189, 248, 0.3))" },
          "100%": { opacity: "0.8", filter: "drop-shadow(0 0 25px rgba(129, 140, 248, 0.5))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        }
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "neon-cyan": "0 0 20px -3px rgba(0, 240, 255, 0.3)",
        "neon-purple": "0 0 20px -3px rgba(139, 92, 246, 0.3)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      }
    },
  },
  plugins: [],
};
export default config;
