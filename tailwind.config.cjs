/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			gray: ' #f0f3fb',
			gray1: ' #605E5c',
			gray2: ' #eff6fc',
			black: '#323130',
			red: ' #b20000',
			white: '#ffffff',
		},
		fontFamily: {
			sans: ['Segoe UI', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'custom-meal': "url('/src/assets/custom-meal-bg.png')",
				footer: "url('/src/assets/footer-bg.png')",
			},
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
}
