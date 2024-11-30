// @ts-check
// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  experimental: {
      env: {
          schema: {
              API_URL: envField.string({
                  context: "client",
                  access: "public",
                  optional: true,
              }),
          },
      },
	},

  output: "server",
  adapter: netlify(),
});