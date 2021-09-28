module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero.png')",
      },
      colors: {
        hero: "#0E0E0E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
