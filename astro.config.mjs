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
				external: (id) => {
					// Externalize macOS-only fsevents
					if (id === "fsevents") return true;
					// Externalize lightningcss WASM fallback path
					if (id.includes("../pkg") || id.includes("/pkg")) return true;
					return false;
				},
			},
		},
	},
});