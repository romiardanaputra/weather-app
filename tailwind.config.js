/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./public/*"],
  theme: {
    extend: {
      colors: {
        text: '#eaeaea',
        background: '#172338',
        primary: '#155831',
        secondary: '#d7e4dc',
        accent: '#A3B0C7',
       },
    },
  },
  plugins: [],
}