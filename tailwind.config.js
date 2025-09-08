/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'prime-light': '#d3d5fd',
        'prime-gray': '#929aab',
        'prime-dark': '#474a56',
        'prime-black': '#0b0b0d',
      },
      fontFamily: {
        'asimovian': ['Orbitron', 'Inter', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease infinite',
      },
    },
  },
  plugins: [],
};
