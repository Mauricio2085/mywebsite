/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "principal-dark": "#111213",
        "second-dark": "#1b2129",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "gradient-border": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-flow": "gradient-border 5s linear infinite",
      },
    },
  },
  plugins: [],
};
