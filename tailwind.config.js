/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		'./src/**/*.{js,ts,jsx,tsx, mdx}',
	],
	theme: {
		screens: {
			'2xl': '1440px',
		},

		extend: {
			fontFamily: {
				nunito: ['var(--font-nunito)'],
			},
			colors: {
				purple: '#603F8B',
				'purple-dark': '#532F82',
				'dark-gray': '#383838',
			},
		},
	},
	plugins: [],
};
