/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {},
    colors: {
      red: "#E63946",
      beige: "#F1FAEE",
      powderBlue: "#A8DADC",
      lightBlue: "#457B9D",
      darkBlue: "#1D3557"
    }
  },
  plugins: []
}
