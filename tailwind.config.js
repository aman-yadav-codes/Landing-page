/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fbf7ef', 100: '#f3e7d3', 200: '#e8d2b1', 300: '#d7b483',
          400: '#c79557', 500: '#ad753b', 600: '#8d5a2d', 700: '#6f431f',
          800: '#51301a', 900: '#321d11',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      boxShadow: {
        card: '0 14px 45px -24px rgba(71, 42, 22, 0.28)',
      },
    },
  },
  plugins: [],
};
