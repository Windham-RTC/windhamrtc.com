module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rtc: {
          red: 'rgb(191, 5, 1)',
          blue: {
            300: 'hsl(246, 95%, 47%)',
            DEFAULT: 'hsl(246, 95%, 37%)',
          },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        'open-sans': ['Open Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
