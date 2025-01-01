/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#5561f6',
        secondary: '#f3f6fb',
      },
    }
  },
  plugins: [],
}

