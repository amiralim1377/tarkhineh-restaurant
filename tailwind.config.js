/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": {
          500: "#417F56",
        },
      },
      maxWidth: {
        "8xl": "1440px",
      },
      fontFamily: { estedad: ["Estedad", "sans-serif"] },
    },
  },
  plugins: [],
};
