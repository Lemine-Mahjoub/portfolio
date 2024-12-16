/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: '#6600F8',
        primary_light: '#D3BFFF',
        white: '#F5F5F5',
        white_light: '#E0E0E0',
        grey_light: '#d4d4d4',
        grey_dark: '#a3a3a3',
        grey_darker: '#525252',
      },
    },
  },
  plugins: [],
}