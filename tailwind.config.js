/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nabi: 'Nabi',
        Rouge: 'Rouge',
        Juliette: 'Juliette',
      },
      spacing: {
        '25vh': '25vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '100vh': '100vh',
      },
    },
  },
  plugins: [],
}
