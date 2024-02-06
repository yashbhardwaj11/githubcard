/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "dark-bg":"#141c3e",
        "dark-gray": "#1e2b48",
        "dark-blue":"#007afd"
      }
    },
  },
  plugins: [],
}

