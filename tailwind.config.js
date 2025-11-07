/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#a16207',
          light: '#c28b43',
          dark: '#804d05',
        },
        'secondary': '#2c2c2c',
        'background': '#fdfcfb',
        'surface': '#ffffff',
        'on-surface': '#4d4d4d',
        'light-gray': '#f5f5f5',
      },
      fontFamily: {
        'sans': ['Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'lifted': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}