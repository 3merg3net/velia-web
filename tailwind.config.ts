// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        velia: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          gray: "#6B7280",
          dark: "#111827",
          green: "#10B981",
          amber: "#F59E0B",
          red: "#EF4444",
        },
      },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
    },
  },
  plugins: [],
};
export default config;

