/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F5F5F5',
          dark: '#303841',
          orange: '#FF5722',
          teal: '#76ABAE',
        },
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      boxShadow: {
        sketchSm: '2px 2px 0px #303841',
        sketchMd: '3px 3px 0px #303841',
        sketchLg: '4px 4px 0px #303841',
      },
      borderRadius: {
        card: '16px',
        btn: '10px',
        pill: '9999px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
