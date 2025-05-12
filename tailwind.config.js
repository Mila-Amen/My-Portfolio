// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',  // For Vite projects
    './src/**/*.{js,jsx,ts,tsx}',  // To scan all the React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
