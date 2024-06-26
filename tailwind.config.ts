import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-vertical": `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        "gradient-horizontal": `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
      },
      colors: {
        green: {
          100: "#50B2C0",
          200: "#255D6A",
          300: "#0A313C",
        },
        purple: {
          100: "#8381D9",
          200: "#2A2879",
        },
        gray: {
          100: "#F8F9FC",
          200: "#E6E8F2",
          300: "#D1D6E4",
          400: "#8D95AF",
          500: "#303F73",
          600: "#252D4A",
          700: "#181C2A",
          800: "#0E1116",
        },
        danger: {
          light: "#F75A68",
        },
      },
      fontFamily: {
        sans: ["var(--nunito)", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
}

export default config
