const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["layouts", "components", "pages", "shared", "types", "enums"].map(
    (dir) => `./${dir}/**/*.{js,ts,jsx,tsx}`
  ),
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
