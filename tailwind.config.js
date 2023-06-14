/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000':'2000ms',
        '3000':'3000ms',
        '4000':'4000ms',
        '5000':'5000ms',
        '6000':'6000ms',
        '7000':'7000ms',

      },
      scale: {
        '200': '2',
        '300': '3',
        '400': '4',
        '500': '5',
        '600': '6',
        '700': '7',

      }
    },
  },
  plugins: [],
}

