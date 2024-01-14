/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        // primary: "#008170",
        // primary_dark: "#016A70",
        primary: {
          600: "#21c5d1",
          DEFAULT: "#21c5d1",
          800: "#16aab5",
          100: "#92f0f7",
          50: "#e3fdff",
        },
        natural: "#191919",

        bg_body: "#008170",
        bg_card: "#016A70",
        bg_card_light: "#1AACAC",
        active: "#eeee",
        deactive: "#8888",
      }
    },
  },
  plugins: [],
}
