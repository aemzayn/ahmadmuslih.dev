const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        teal: {
          50: "#E6FFFA",
          100: "#B2F5EA",
          200: "#81E6D9",
          300: "#4FD1C5",
          400: "#38B2AC",
          500: "#319795",
          600: "#2C7A7B",
          700: "#285E61",
          800: "#234E52",
          900: "#1D4044",
        },
        darkBlue: "#12161F",
        neon: "#80FFDB",
      },
    },
    fontFamily: {
      sans: [
        "Walkway",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      monument: ["Monument Extended", "sans-serif"],
      walkway: ["Walkway", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
