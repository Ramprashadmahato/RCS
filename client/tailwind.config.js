/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        secondary: "#03A9F4",
        dark: "#1b2140",
        light: "#f3f5f9",
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'tablet': { 'min': '480px', 'max': '1023px' },
        'mobile': { 'max': '479px' }
      }
    },
  },
  plugins: [],
}
