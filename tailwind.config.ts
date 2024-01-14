import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				"black-100": "#2b2c35",
				"primary-blue": {
					DEFAULT: "#2b59ff",
					100: "#f5f8ff",
				},
				"secondary-orange": "#f79761",
				"light-white": {
					DEFAULT: "rgb(59 60 152 / 0.03)",
					100: "rgb(59 60 152 / 0.02)",
				},
				grey: "#747a88",
			},
			backgroundImage: {
				pattern: "url('/pattern.png')",
				"hero-bg": "url('/hero-bg.png')",
			},
		},
	},
	plugins: [],
};

export default config;
