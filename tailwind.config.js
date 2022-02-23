/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "18px",
      0: "0px",
      1: "1px",
      ...Object.fromEntries(
        Array(128)
          .fill()
          .map((_, i) => [i * 4, `${(i * 4) / 16}rem`])
      ),
    },
    extend: {
      colors: {
        black: {
          600: "#2F3136",
          700: "#292B2F",
          800: "#202225",
          900: "#000000",
        },
        gray: {
          100: "#DCDDDE",
          200: "#B9BBBE",
          300: "#8E9297",
          400: "#72767D",
          500: "#4F545C",
          600: "#36393F",
        },
        purple: "#5865F2",
        blue: "#00AFF4",
        green: "#3BA55D",
        red: "#ED4245",
        yellow: "#FAA81A",
      },
      screens: {
        xs: "486px",
      },
      fontFamily: {
        display: ["whitney", "Open Sans", ...defaultTheme.fontFamily.sans],
        title: ["Ginto", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
      height: {
        "content-base": "calc(100vh - 48px)",
      },
    },
  },
  plugins: [],
};
