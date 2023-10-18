/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["margin", "serif", "sans"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f0abfc",

          secondary: "#9ca3af",

          accent: "#f5d0fe",

          neutral: "#d1d5db",

          "base-100": "#d6d3d1",

          info: "#f0abfc",

          success: "#d8b4fe",

          warning: "#fce7f3",

          error: "#fce7f3",
        },
      },
    ],
  },
};
