module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            'mei-green': '#4ade80',
            'mei-dark': '#166534',
        primary: {
          light: '#86efac',
          DEFAULT: '#4ade80',
          dark: '#16a34a',
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ade80', // Main light green
          600: '#16a34a', // Dark green
          700: '#166534' // Darker green
        },
        secondary: {
          light: '#fde68a',
          DEFAULT: '#f59e0b',
          dark: '#b45309'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}