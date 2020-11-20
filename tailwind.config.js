module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        sublime: "#FC466B",
        vivid: "#3F5EFB",
        purp: "#7F00FF",
        ink: "#E100FF",
        chat: "#c0392b",
        mello: "#8e44ad",
        sols: "#3a416f",
        transparent: "transparent",
        grey: {
          "900": "#23263b",
          "800": "#36395a",
          "700": "#484c7a",
          "600": "#5a5e9a",
          "500": "#777aaf",
          "400": "#9698c3",
          "300": "#b6b7d5",
          "200": "#d6d6e7",
          "100": "#f5f5fa"
        },
        pink: {
          "900": "#59063d",
          "800": "#88085c",
          "700": "#b80979",
          "600": "#e90a96",
          "500": "#f82caa",
          "400": "#fb5abc",
          "300": "#fd89ce",
          "200": "#feb9e2",
          "100": "#ffeaf6"
        },
        nebula: {
          "900": "#141d61",
          "800": "#1e2b8f",
          "700": "#2b3cbb",
          "600": "#3c4fe0",
          "500": "#5468ff",
          "400": "#7c8aff",
          "300": "#a3acff",
          "200": "#cacfff",
          "100": "#f2f3ff"
        },
        blue: {
          "900": "#00526c",
          "800": "#00769b",
          "700": "#009bcb",
          "600": "#0db7eb",
          "500": "#2cc8f7",
          "400": "#5adaff",
          "300": "#89e5ff",
          "200": "#b9efff",
          "100": "#e8faff"
        },
        green: {
          "900": "#005e36",
          "800": "#028950",
          "700": "#06b66c",
          "600": "#0de589",
          "500": "#5feb9e",
          "400": "#88f0b3",
          "300": "#aaf4c8",
          "200": "#c9f8de",
          "100": "#e6fcf3"
        },
        orange: {
          "900": "#963209",
          "800": "#bf470a",
          "700": "#e8600a",
          "600": "#f78125",
          "500": "#faa04b",
          "400": "#fcbc73",
          "300": "#fed59a",
          "200": "#ffe9c3",
          "100": "#fff9ec"
        },
        red: {
          "900": "#83111e",
          "800": "#ab1325",
          "700": "#d4142a",
          "600": "#ee243c",
          "500": "#f4495d",
          "400": "#f86e7e",
          "300": "#fc95a1",
          "200": "#febdc5",
          "100": "#ffe6e9"
        }
      },
      fontFamily: {
        hind: ["Hind", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"]
      },
      width: {
        w_lg: "48vw",
        w_sm: "71vw"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
