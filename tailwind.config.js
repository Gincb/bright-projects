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
        h1: ['48px', { fontWeight: 600 }],
        h2: ['24px', { fontWeight: 600 }],
        h3: ['20px', { fontWeight: 600 }],
        body: ['16px', { fontWeight: 400 }],
        'h1-mob': ['24px', { fontWeight: 600 }],
        'h2-mob': ['24px', { fontWeight: 600 }],
        'h3-mob': ['18px', { fontWeight: 600 }],
        'body-mob': ['14px', { fontWeight: 400 }],
      },
    },
  },
  plugins: [],
}
