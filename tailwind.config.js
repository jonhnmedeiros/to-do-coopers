module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          400: '#4AC959',
          500: '#4AC959',
        },
        orange: {
          400: '#E88D39',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};