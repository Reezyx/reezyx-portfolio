/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB0",
        secondary: "#FFB501",
        "nav-color": "#423e3b",
        "nav": "#fea82f",
        "type-string": "#e39629",
        "dark-font": "#033737",
      },
      spacing: {
        88: "22rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
      },
      screens: {
        xs: "540px",
        "2xl": "1600px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      fontSize: {
        "2wxl": ["24px", "3rem"],
        "sxs": ["10px", "0.5rem"]
      },
      width: {
        "1/7" : "14.285714286%"
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
