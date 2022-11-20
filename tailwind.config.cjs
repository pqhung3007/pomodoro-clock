/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        sky: '#0ea5e9',
        yellow: '#eab308',
        emerald: '#10b981'
      }
    },
  },
  plugins: [],
}
