const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "src/layouts",
    "src/components",
    "pages",
    "src/shared",
    "src/types",
    "src/enums",
  ].map((dir) => `./${dir}/**/*.{js,ts,jsx,tsx}`),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
