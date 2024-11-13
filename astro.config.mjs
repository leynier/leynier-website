import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		fallback: {
			es: "en",
		},
		routing: {
			prefixDefaultLocale: true,
			fallbackType: "rewrite",
		},
	},
	integrations: [tailwind()],
});