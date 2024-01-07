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
      'gradient-tr': 'linear-gradient(to top right, var(--tw-gradient-stops));',
      'gradient-tl': 'linear-gradient(to left top, var(--tw-gradient-stops))',
      'gradient-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops));',
      'gradient-bl': 'linear-gradient(to left bottom, var(--tw-gradient-stops))',
      'gradient-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
  
        'ben': "url('/images/ben.jpeg')",
   
      

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
        "sky-900": "#0c4a6e",
        "sky-950": '#082f49',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['buena-park-jf', 'serif'],
        puffinChrome: ['puffin-arcade-chrome', 'sans-serif'],
        puffinLiquid: ['puffin-arcade-liquid', 'sans-serif'],
        puffinRegular: ['puffin-arcade-regular', 'sans-serif'],

      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

