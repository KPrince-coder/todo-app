/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			'droid-sans': ['Droid Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
};
