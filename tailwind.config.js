/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "principal-dark": "#111213",
        "second-dark": "#1b2129",
      },
    },
  },
  plugins: [],
};
