const colours = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colours: {},
    extend: {},
    screens: {
      xs: '450px',
      xxs: '320px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
