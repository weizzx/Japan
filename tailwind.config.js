/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#c52033',
        accent: {
          100: '#1a1a1a',
          300: '#131313',
          500: '#0d0d0d',
          gradient: '#0d0d0dbf',
        },
      },
      fontFamily: {
        'primary': ['Ysabeau Infant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

