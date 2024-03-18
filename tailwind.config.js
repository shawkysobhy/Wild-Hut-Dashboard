/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				xs: '12px', // 12px
				sm: '14px', // 14px
				base: '16px', // 16px
				lg: '30px', // 18px
				xl: '1.25rem', // 20px
				'2xl': '2rem', // 24px
				'3xl': '1.875rem', // 30px
				'4xl': '2.25rem', // 36px
				'5xl': '3rem', // 48px
				'6xl': '4rem', // 64px
				'7xl': '5rem', // 80px
			},
			colors: {
				//'rgb(var(--text) / <alpha-value>)'
				containerBackground: 'rgb(var(--containerBackground) / <alpha-value>)',
				background: 'rgb(var(--background) / <alpha-value>)',
				border: {
					dark: 'rgb(var(--border-dark) / <alpha-value>)',
					light: 'rgb(var(--border-light) / <alpha-value>)',
				},

				card: 'rgb(var(--card) / <alpha-value>)',
				text: 'rgb(var(--text) / <alpha-value>)',
				title: 'rgb(var(--title) / <alpha-value>)',
				ctaText: 'rgb(var(--ctaText) / <alpha-value>)',
				brand: {
					light: 'rgb(var(--brand-light) / <alpha-value>)',
					dark: 'rgb(var(--brand-dark) / <alpha-value>)',
				},
				icon: 'rgb(var(--icon) / <alpha-value>)',
			},
			fontFamily: {
				sono: ['Sono', 'monospace'],
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
