// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "20%": { opacity: "1", transform: "translateY(0)" },
          "80%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeSlide: "fadeSlide 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
