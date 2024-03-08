/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        idgray: "#555555",
        idgreen: "#23a65b",
        idblack: "#111111",
      },
    },
  },
  plugins: [],
};
