/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      sm: '0.7rem',
      md: '0.8rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.5rem'
    }
    // ,
    // extend: {
    //   backdropOpacity: {
    //     10: '.10',
    //   },
    //   backdropSepia: {
    //     0: '.0',
    //     75: '.75',
    //   }
    // }
  },
  plugins: [],
}
