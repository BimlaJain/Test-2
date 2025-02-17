import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black': "#010101",
        'blue': "#7E68FF",
      },
      fontFamily: {
        "poppins": ["Poppins", "serif"],
        "Monsterrat": ["Montserrat", "serif"],
        "Roboto": ["Roboto", "serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
