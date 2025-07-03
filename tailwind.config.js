/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.html",
    ],
  safelist: [
    'h-[200vh]',
    'pt-[100vh]',
    'h-screen',
    'top-0',
    'sticky',
    'absolute',
    'relative',
    'z-0',
    'z-10',
    'overflow-hidden',
    'animate-slideUp',
    'delay-200',
    'delay-400',
    'delay-600',
    'shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.2)]',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        beige: '#f5f1e9',
        brown: '#6b4c3b',
        clay: '#b66e41',
        terracotta: '#e07b5d',
        sage: '#9caf88',
        sun: '#f5d17f',
        sand: '#f2f2f2',
        night: '#0f0f0f',
        stone: '#d1d1d1',
        apple: '#cb363b',
        plum: '#041244',
        lavender: '#8c64d6',
        dark: '#1f090f',
        rose: '#e55ec3',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in-right': {
          '0%': { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in-left': {
          '0%': { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.8s ease-out forwards',
        fadein: 'fade-in 3s ease-in-out',
        fadeinup: 'fade-in-up 3s ease-in-out',
        fadeinleft: 'fade-in-left 3s ease-in-out',
        fadeinright: 'fade-in-right 3s ease-in-out',
        fadeindown: 'fade-in-down 3s ease-in-out',
      },
      spacing: {
        screen: '100vh',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
};
