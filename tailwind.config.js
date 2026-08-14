/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dbe4f0',
          200: '#b8c9e1',
          300: '#8ba6cd',
          400: '#5d7eb0',
          500: '#3d5e91',
          600: '#2c4470',
          700: '#1e3258',
          800: '#152443',
          900: '#0d1a33',
          950: '#080f1f',
        },
        gold: {
          50: '#fdfaf0',
          100: '#faf2d4',
          200: '#f5e4a8',
          300: '#eecf70',
          400: '#e8b94a',
          500: '#d99e2a',
          600: '#bd7d20',
          700: '#965c1d',
          800: '#7c491d',
          900: '#683d1c',
        },
        cream: {
          50: '#fefdfa',
          100: '#fdfbf4',
          200: '#faf6ea',
          300: '#f5efdc',
          400: '#ede4c8',
          500: '#e2d5ad',
        },
        muted: {
          400: '#8b9bb0',
          500: '#6b7c93',
          600: '#566580',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
      },
      fontSize: {
        'eyebrow': ['0.875rem', { letterSpacing: '0.18em', fontWeight: '600' }],
      },
      maxWidth: {
        'container': '1280px',
        'container-lg': '1440px',
      },
      borderRadius: {
        'xl2': '1.5rem',
        'xl3': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(13, 26, 51, 0.08)',
        'card': '0 4px 24px -8px rgba(13, 26, 51, 0.10)',
        'card-hover': '0 12px 40px -8px rgba(13, 26, 51, 0.18)',
        'stat': '0 8px 40px -12px rgba(13, 26, 51, 0.15)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
