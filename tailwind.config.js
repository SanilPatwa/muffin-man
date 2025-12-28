/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cocoa': '#8B6F47',
        'butter': '#F5E6D3',
        'peach': '#F4C2A1',
        'caramel': '#D4A574',
        'blush': '#FAF5F0',
        'warm-gray': '#4A4A4A',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

