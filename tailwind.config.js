/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0a0e1a',
          dark: '#0f1629',
          base: '#141c2e',
          slate: '#1a2332',
          light: '#243049',
        },
        accent: {
          teal: '#00d9b5',
          mint: '#00ffc8',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 217, 181, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 217, 181, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(135deg, #00d9b5, #00ffc8)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
