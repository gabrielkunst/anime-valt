import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/hero.png')",
			},
			colors: {
				darkPrimary: "#0F1117",
				darkSecondary: "#161921",
				gold: "#FFAD49",
			},
		},
	},
	plugins: [],
};
export default config;
