/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			dark: '#210201',
			primary: '#5E2727',
			light: '#F8F8F8',
			red: {
				900: '#210201',
				800: '#491313',
				700: '#5E2727',
				600: '#6A3535',
				500: '#7A4949',
				400: '#8D6262',
				300: '#AF8C8C',
				200: '#CEB8B8',
				100: '#E7DDDD',
				50: '#F1EFEF'
			},
			gray: {
				900: '#131313',
				800: '#292929',
				700: '#434343',
				600: '#555555',
				500: '#7D7D7D',
				400: '#9E9E9E',
				300: '#B8B8B8',
				200: '#DADADA',
				100: '#EFEFEF',
				50: '#F8F8F8'
			}
		},
		extend: {}
	},
	plugins: []
};
