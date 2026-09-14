import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F7F5",
        forest: "#0E1A3D",
        "forest-2": "#162A5C",
        moss: "#2E6FF2",
        sage: "#6B7280",
        line: "#E0E3EA",
        muted: "#6B7280",
        ink: "#0E1A3D",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
        measure: "68ch",
      },
      letterSpacing: {
        tightest: "-0.045em",
        tight: "-0.02em",
        wide: "0.08em",
        wider: "0.14em",
      },
      boxShadow: {
        raise: "0 1px 2px rgba(14,26,61,0.05), 0 12px 32px -12px rgba(14,26,61,0.14)",
        float: "0 24px 64px -24px rgba(14,26,61,0.22)",
        hairline: "0 1px 0 rgba(14,26,61,0.06)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;