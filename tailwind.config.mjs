/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F00",
        secondary: "#FF8C00",
        grayLight: "#f4f4f9",
        grayDark: "#333",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["Mono", "Arial", "sans-serif"],
        heading: ["Roboto", "Arial", "sans-serif"], 
      },
      spacing: {
        small: "8px",
        medium: "16px",
        large: "24px",
        48: "12rem",
        96: "24rem",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem", 
      },
      boxShadow: {
        custom: "0px 4px 8px #16161640", 
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
