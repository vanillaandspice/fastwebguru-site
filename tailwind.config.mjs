/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:         '#1A1A1A',
          accent:       '#F97316',
          surface:      '#FAFAF9',
          'surface-mid':'#F4F4F2',
          'surface-warm':'#FFF7ED',
          'text-secondary': '#52525B',
          'text-muted':  '#A1A1AA',
          border:        '#E4E4E7',
          'border-dark': '#27272A',
        },
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72ch',
      },
    },
  },
  plugins: [],
};
