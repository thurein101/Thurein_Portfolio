import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 This tells Tailwind to activate dark variants when <html class="dark"> exists
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;