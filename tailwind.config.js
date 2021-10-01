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
        // Hero
        "hero-image-desktop": "url('/src/assets/home/desktop/image-hero.jpg')",
        "hero-image-tablet": "url('/src/assets/home/mobile/image-header.jpg')",
        "hero-image-mobile": "url('/src/assets/home/tablet/image-header.jpg')",
        // HomePage
        previewSectionSmall:
          "url('/src/assets/home/desktop/image-speaker-zx7.jpg')",
        previewSectionSmallTablet:
          "url('/src/assets/home/tablet/image-speaker-zx7.jpg')",
        previewSectionSmallMobile:
          "url('/src/assets/home/mobile/image-speaker-zx7.jpg')",
        previewSectionDivided:
          "url('/src/assets/home/desktop/image-earphones-yx1.jpg')",
        previewSectionTablet:
          "url('/src/assets/home/tablet/image-earphones-yx1.jpg')",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      colors: {
        primary: "#D87D4A",
        primaryLight: "#fbaf85",
        secondary: "#101010",
        secondaryLight: "#F1F1F1",
        secondaryLighter: "#FAFAFA",
      },
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
      },
      letterSpacing: {
        overline: "10px",
      },
      fontSize: {
        display: [
          "3.5rem",
          {
            letterSpacing: "0.125rem",
            lineHeight: "3.625rem",
          },
        ],
        body: [
          "0.9375rem",
          {
            lineHeight: "1.5625rem",
          },
        ],
        heroBody: [
          "0.9375rem",
          {
            lineHeight: "1.5625rem",
          },
        ],
        mobileMenu: ["2rem"],
        subtitle: [
          "0.8125rem",
          {
            letterSpacing: "0.06rem",
          },
        ],
        button: [
          "0.8125rem",
          {
            letterSpacing: "0.06rem",
          },
        ],
        h6: [
          "1.125rem",
          {
            letterSpacing: "0.08125rem",
            lineHeight: "1.5rem",
          },
        ],
        h5: [
          "1.75rem",
          {
            letterSpacing: "0.10625rem",
            lineHeight: "2,0625rem",
          },
        ],
        h4: [
          "1.75rem",
          {
            letterSpacing: "0.125rem",
            lineHeight: "2,375rem",
          },
        ],
        h2: [
          "2.5rem",
          {
            letterSpacing: "0.09375rem",
            lineHeight: "2,75rem",
          },
        ],
        p: [
          "0,9375rem",
          {
            lineHeight: "1,5625rem",
          },
        ],
      },
    },
  },
  variants: {
    extend: {
      padding: ["first, last"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "689px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
          "@screen xl": {
            maxWidth: "1110px",
          },
        },
      });
    },
  ],
};
