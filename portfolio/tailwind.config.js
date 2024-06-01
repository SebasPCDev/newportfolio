/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14110F",
        secondary: "#34312D",
        tertiary: "#7E7F83",
        quaternary: "#D9C5B2",
        quinary: "#F3F3F4",
      },
    },
  },
  plugins: [],
};
