module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Dongle"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1.5rem",
      lg: "1.725rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "8rem",
    },
    colors: {
      blue: "#4B73FF",
      purple: "#A15DE5",
      fuschia: "#E55D86",
      gold: "#FFA24B",
      green: "#40E281",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
