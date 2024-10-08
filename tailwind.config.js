/* eslint-disable no-undef */
// const module = require('module');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#000000",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "logo-bg": "url('/src/assets/png/logonobackground.png')",
        // "hero-pattern": "url('/src/assets/heropat.png')",
      },
    },
  },
  plugins: [],
};