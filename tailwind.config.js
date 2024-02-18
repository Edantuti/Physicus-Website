/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      backgroundColor:{
        background:"#0B0B22"
      },
      fontFamily:{
        'inter':['"Inter"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

