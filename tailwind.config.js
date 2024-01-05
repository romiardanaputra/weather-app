/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./public/*"],
  theme: {
    extend: {
      colors: {
        text: '#eaeaea',
        background: '#1E2E4A',
        primary: '#155831',
        secondary: '#d7e4dc',
        accent: '#A3B0C7',
        primary2: '#172338'
       },
    },
  },
  plugins: [],
}