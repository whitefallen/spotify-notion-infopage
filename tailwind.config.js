/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-dark': '#191414',
        'notion-black': '#000000',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease',
        'fade-in-up-delay-1': 'fadeInUp 0.8s ease 0.2s backwards',
        'fade-in-up-delay-2': 'fadeInUp 0.8s ease 0.4s backwards',
        'fade-in-up-delay-3': 'fadeInUp 0.8s ease 0.6s backwards',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 30px rgba(0, 0, 0, 0.15)',
        'spotify': '0 10px 30px rgba(29, 185, 84, 0.4)',
      },
    },
  },
  plugins: [],
}
