module.exports = {
  purge: ["layouts", "components", "pages", "shared"].map(
    (dir) => `./${dir}/**/*.{js,ts,jsx,tsx}`
  ),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
