/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
        },
        text: 'var(--text)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: ['3rem', { fontWeight: 600 }],
        h2: ['1.5rem', { fontWeight: 600 }],
        h3: ['1.25rem', { fontWeight: 600 }],
        body: ['1rem', { fontWeight: 400 }],
        'h1-mob': ['1.5rem', { fontWeight: 600 }],
        'h2-mob': ['1.25rem', { fontWeight: 600 }],
        'h3-mob': ['1.125rem', { fontWeight: 600 }],
        'body-mob': ['0.875rem', { fontWeight: 400 }],
      },
    },
  },
  plugins: [],
}
