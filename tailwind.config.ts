import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            gridTemplateColumns: {
                '21': 'repeat(21, minmax(0, 1fr))',
                '22': 'repeat(22, minmax(0, 1fr))',
                '23': 'repeat(23, minmax(0, 1fr))',
                '24': 'repeat(24, minmax(0, 1fr))',
            },
            gridColumn: {
                'span-17': 'span 17 / span 17',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20 / span 20',
                'span-21': 'span 21 / span 21',
                'span-22': 'span 22 / span 22',
                'span-23': 'span 23 / span 23',
            },
        },
    },
    plugins: [],
} satisfies Config;
