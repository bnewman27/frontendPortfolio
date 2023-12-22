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
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
        "sky-200": '#bae6fd',
        "sky-400": '#38bdf8',
        "sky-800": "#075985",
        "sky-950": '#082f49',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['buena-park-jf', 'serif'],
        puffinChrome: ['puffin-arcade-chrome', 'sans-serif'],
        puffinLiquid: ['puffin-arcade-liquid', 'sans-serif'],

      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

