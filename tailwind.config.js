/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFmaily : {
        'logo' : ['PT Sans', "sans-serif"]
      }
    },
  },
  plugins: [],
}

