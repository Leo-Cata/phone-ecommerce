/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#191637',
        'custom-text': '#fafafa',
        'custom-secondary': '#100f24',
        'custom-accent': '#413a92',
      },
      fontFamily:{
        'hyperlegible' : ['Atkinson Hyperlegible', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
