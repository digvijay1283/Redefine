/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robert_medium: ['Roobert_Medium', 'sans-serif'],
        robert_regular: ['Roobert_Regular', 'sans-serif'],
        zentry: ['ZENTRY_Regular', 'sans-serif'],
        general: ['fontt', 'sans-serif'],
      },
    },
  },
  plugins: [],
}