/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          700: '#006837',
        },
      },
      width: {
        '95': '95%',
        '85': '85%',
        '75': '75%',
      },
    },
  },
  plugins: [],
};
