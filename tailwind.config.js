/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
