/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#40c9b2",
        secondary: "#fbbc5c",
        light: "#f9fbfa",
        accent: "#a6e7dc",
        "accent-light": "#ccf9f6",
        warm: "#f6d5a1",
        neutral: "#dcd4c4",
        dark: "#4fb99c",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
