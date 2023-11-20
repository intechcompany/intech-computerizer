/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        'primary': '#99E6EF',
        'white-1': '#FEFEFE',
        'white-2': '#FAFAFA',
        'white-3': '#C4C4C4',
        'secondary': '#F2E1DE',
        'black-1': '#000000',
        'black-2': '#232323',
        'black-3': '#2C2C2C',
        'gray-1': '#F2E1DE'

      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
