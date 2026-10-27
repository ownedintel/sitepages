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
        ink: "#1a2e35",
        "deep-teal": "#0c3c3c",
        teal: "#2aa198",
        "teal-ink": "#1a6e5c",
        cream: "#faf8f4",
        beige: "#f3efe8",
        paper: "#ffffff",
        slate: "#6b7c85",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        h1: ["clamp(2.8rem, 5vw, 4.2rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        h2: ["clamp(2rem, 3.5vw, 2.8rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.3rem, 2vw, 1.6rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        eyebrow: ["0.8rem", { lineHeight: "1", letterSpacing: "0.1em" }],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
