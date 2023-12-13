/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
      colors: {
        'dmbg': '#000000',
        'dms': '#121212',
        'dmtext': '#ffffff',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['buena-park-jf', 'serif'],
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// font-family: "buena-park-jf", serif;
//   font-weight: 400;
//   font-style: normal;