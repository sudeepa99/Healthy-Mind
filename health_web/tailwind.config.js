/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "phone":"640px",
      "tablet":"768px",
      "laptop":"1024px" 
    },
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

