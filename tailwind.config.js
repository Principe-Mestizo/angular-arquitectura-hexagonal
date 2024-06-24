/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      variants: {
        extend: {
          backgroundColor: ['active'],
        },
      }
    },
  },
  plugins: [],
}

