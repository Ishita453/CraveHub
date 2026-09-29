import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        cream: "#fffaf2",
        brand: "#f97316",
        brandDark: "#c2410c"
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(23, 23, 23, .28)"
      }
    }
  },
  plugins: []
};

export default config;
