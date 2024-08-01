import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        md: "600px",
        lg: "768px",
        xl: "1158px",
      },
      boxShadow: {
        header: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        footer: "0px -10px 15px -3px rgba(0,0,0,0.1)",
      },
    },
  },

  plugins: [],
};
export default config;
