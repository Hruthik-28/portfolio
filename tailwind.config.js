/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        HedvigLettersSans: ["Hedvig Letters Sans", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"]
      },
      backgroundImage: {
        'footer-bg': "url('/public/astronaut.jpg')",
        'footer-bg-1': "url('/public/w1.jpg')",
      }
    },
  },
  plugins: [],
}

