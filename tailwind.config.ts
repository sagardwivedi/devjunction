/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-gradient":
          "radial-gradient(circle at center, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
