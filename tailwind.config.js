/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        frameTop: {
          "0%": { height: "100vh" },
          "100%": { height: "40px" },
        },
        frameSide: {
          "0%": { width: "100vw" },
          "100%": { width: "40px" },
        },
      },
      animation: {
        frameTop: "frameTop 0.8s ease-out forwards",
        frameSide: "frameSide 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
