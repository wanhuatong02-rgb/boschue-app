/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#E8F5F9',
        card: '#FFFFFF',
        accent: '#7AAEC0',
        'accent-dark': '#5A8E9F',
        'accent-light': '#A8CEDB',
        ink: '#1F1F1F',
        'ink-secondary': '#555555',
        'ink-light': '#888888',
        economics: '#7BB661',
        sociology: '#7AAEC0',
        logic: '#D4A574',
        psychology: '#D08068',
        management: '#9B7BB8',
        'economics-light': '#E8F5E8',
        'sociology-light': '#E8F5F9',
        'logic-light': '#F5EFE5',
        'psychology-light': '#F5E8E5',
        'management-light': '#EFE8F5',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        button: '12px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(122, 174, 192, 0.08)',
        'card-hover': '0 4px 20px rgba(122, 174, 192, 0.16)',
      },
      maxWidth: {
        mobile: '390px',
      },
    },
  },
  plugins: [],
};
