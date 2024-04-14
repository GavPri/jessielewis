module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      darkest: "#545454",
      dark: "#737373",
      neutral: "#a6a6a6",
      light: "#d9d9d9",
      lightest: "#f9f9f9",
      seafoam: "#78C0A8",
      cyanAccent: "#06b6d4",
      transparent: "rgba(255, 255, 255, 0)",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        readable: "65ch",
      },
    },
  },
  plugins: [],
};
