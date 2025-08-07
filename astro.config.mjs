// @ts-check
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://farwell-lp.pages.dev",
  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
    },
  },
});
