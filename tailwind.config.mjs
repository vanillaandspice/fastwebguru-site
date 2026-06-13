import typography from '@tailwindcss/typography';

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
      typography: ({ theme }) => ({
        fwg: {
          css: {
            '--tw-prose-body': '#52525B',
            '--tw-prose-headings': '#1A1A1A',
            '--tw-prose-lead': '#52525B',
            '--tw-prose-links': '#F97316',
            '--tw-prose-bold': '#1A1A1A',
            '--tw-prose-counters': '#A1A1AA',
            '--tw-prose-bullets': '#F97316',
            '--tw-prose-hr': '#E4E4E7',
            '--tw-prose-quotes': '#1A1A1A',
            '--tw-prose-quote-borders': '#F97316',
            '--tw-prose-captions': '#A1A1AA',
            '--tw-prose-code': '#1A1A1A',
            '--tw-prose-pre-code': '#FAFAF9',
            '--tw-prose-pre-bg': '#1A1A1A',
            '--tw-prose-th-borders': '#E4E4E7',
            '--tw-prose-td-borders': '#E4E4E7',
            maxWidth: '72ch',
            fontFamily: 'Inter, system-ui, sans-serif',
            'h1, h2, h3, h4': {
              fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
              letterSpacing: '-0.02em',
            },
            a: { fontWeight: '600', textDecoration: 'none', borderBottom: '1px solid rgba(249,115,22,0.4)' },
            'a:hover': { borderBottomColor: '#F97316' },
            blockquote: {
              fontStyle: 'normal',
              backgroundColor: '#FFF7ED',
              borderLeftWidth: '4px',
              padding: '1rem 1.25rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            table: { fontSize: '0.9rem' },
            thead: { borderBottomColor: '#1A1A1A' },
            'thead th': { fontFamily: '"Bricolage Grotesque", system-ui, sans-serif' },
            code: {
              backgroundColor: '#F4F4F2',
              padding: '0.15em 0.4em',
              borderRadius: '4px',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
