// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        customGray: '#474343',
        customDark: '#100F0F',
        customGreen: '#90E567',
      },
      keyframes: {
        dropdown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        dropdown: 'dropdown 0.3s ease-out',
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      scrollBehavior: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-smooth': {
          scrollBehavior: 'smooth',
        },
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* WebKit */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    require('tailwind-scrollbar-hide')
  ],
}
