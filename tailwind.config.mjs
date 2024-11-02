/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				github: {
					dark: '#0d1117',
					light: '#161b22',
					text: '#c9d1d9',
					green: {
						100: '#0e4429',
						200: '#006d32',
						300: '#26a641',
						400: '#39d353'
					}
				}
			}
		}
	},
	plugins: [require("@tailwindcss/typography")],
};
