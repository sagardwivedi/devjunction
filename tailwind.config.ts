/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};
