/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0A0D4E',
        'Background-blue': '#070939'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

