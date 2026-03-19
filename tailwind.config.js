/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // RGB channel variables — supports Tailwind opacity modifiers (e.g. bg-cream/90)
        cream: 'rgb(var(--color-bg) / <alpha-value>)',
        'border-warm': 'rgb(var(--color-border) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 20px rgba(0,0,0,0.07)',
        'card-hover': '0 6px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
