/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        background: '#050505',
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
