/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/componant/Header.js",
    "./src/componant/Nav.js",
    "./src/componant/Main.js",
    "./src/componant/Footer.js",
    "./src/componant/Card.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#F4CE14',
        'primary-2': '#495E57',
        'Highlight-1': '#EDEFEE',
        'Highlight-2': '#333333',
        "Secondary-1": '#EE9972',
      },
    },
    fontFamily: {
      'main': ['Markazi Text'],
      'second': ['Karla'],    
    }
  },
  plugins: [],
}

