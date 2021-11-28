module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0 0 24px 0 white",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
