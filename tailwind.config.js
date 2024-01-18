/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        smobile: "300px",
        mobile: "431px",
        lmobile: "500px",
      },
    },
  },
  plugins: [],
};
