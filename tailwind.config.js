/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './public/index.html',
    './components/**/*.{js,jsx}',
],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'serif': ['buena-park-jf', 'serif'],
      },
      colors: {
        bg: '#000000',
        surface: '#121212',
      }
    },
  },
  plugins: [],
}