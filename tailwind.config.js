/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        error: {
          100: '#fd8080',
          200: '#5c0000',
          300: '#290000',
        },
        main: {
          border: '#d8dce3',
          green: '#32d583',
          greenHover: '#f6fef9',
        },
      },
      fontFamily: {
        kgcs: ['kgcs'],
        lexreg: ['lexreg'],
        lexbold: ['lexbold'],
      },
    },
  },
  plugins: [],
};
