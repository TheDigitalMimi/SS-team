/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a2332',
        teal: '#14b8a6',
        grey: '#6b7280',
        yellow: '#fbbf24',
      },
    },
  },
  plugins: [],
}
