/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury hospitality palette
        sand: {
          50: '#faf7f2',
          100: '#f4ede1',
          200: '#e8dac3',
          300: '#d9c29c',
          400: '#c9a877',
          500: '#bd9260',
          600: '#a97a4f',
          700: '#8c6143',
          800: '#72503b',
          900: '#5f4333',
        },
        ocean: {
          50: '#f0f6f8',
          100: '#dbe9ef',
          200: '#bcd3e0',
          300: '#8fb4c9',
          400: '#5b8dab',
          500: '#3f7192',
          600: '#355c7b',
          700: '#2f4c65',
          800: '#2b4156',
          900: '#1c2b3a',
          950: '#111c27',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(28, 43, 58, 0.25)',
        card: '0 20px 60px -20px rgba(28, 43, 58, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'slow-zoom': 'slow-zoom 18s ease-out both',
      },
    },
  },
  plugins: [],
}