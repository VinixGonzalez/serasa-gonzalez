/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e63888",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "body-p": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        "body-regular": [
          "1.5rem",
          {
            fontWeight: "400",
            lineHeight: "1.25rem",
          },
        ],
        title: [
          "3rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
