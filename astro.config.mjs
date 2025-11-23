import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		fallback: {
			es: "en",
		},
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
			fallbackType: "rewrite",
		},
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			rollupOptions: {
				external: ["fsevents"],
			},
		},
	},
});