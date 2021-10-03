import "../src/index.css";
export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "black",
        value: "#000000",
      },
      {
        name: "dark",
        value: "#979797",
      },
      {
        name: "light",
        value: "#F1F1F1",
      },
      {
        name: "lighter",
        value: "#FAFAFA",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
