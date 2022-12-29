module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html '],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        'background-page-color': '#FFFFFF',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
