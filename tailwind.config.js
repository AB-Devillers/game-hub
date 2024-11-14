/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "lg-custom": "1000px",
      },
      gridTemplateColumns: {
        oneAndThree: "20% 80%",
      },
      colors: {
        blackish: "#151515",
        blackish2: "#1f1f1f",
      },
      width: {
        smCard: "300px",
        mdCard: "350px",
        tablet: "320px",
        laptop: "240px !important",
        lgCard: "260px",
        smImg: "250px",
      },
    },
  },
  plugins: [],
};
