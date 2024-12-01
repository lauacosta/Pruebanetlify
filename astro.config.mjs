// @ts-check
// @ts-check
import { defineConfig, envField } from "astro/config";

import netlify from "@astrojs/netlify";

import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
	integrations: [AstroPWA({})],

	experimental: {
		env: {
			schema: {
				API_URL: envField.string({
					context: "client",
					access: "public",
					optional: true,
					default: "http://localhost:8000",
				}),
			},
		},
	},

	output: "hybrid",
	adapter: netlify(),
});
