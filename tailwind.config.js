/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sanctuary: {
          50: '#f8faf9',
          100: '#edf2f0',
          200: '#d7e4de',
          300: '#b5ccc2',
          400: '#8cae9f',
          500: '#698e7f',
          600: '#517264',
          700: '#425c52',
          800: '#384b43',
          900: '#31403a',
          950: '#1a2420',
        },
        monolith: {
          950: '#08090b',
          900: '#0d0e10',
          800: '#141619',
          700: '#1d2025',
          600: '#282d34',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
