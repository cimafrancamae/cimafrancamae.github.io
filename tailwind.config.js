/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
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
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.8s ease-out forwards',
      },
      spacing: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
};
