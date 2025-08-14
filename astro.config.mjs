// @ts-check
import cloudflare from "@astrojs/cloudflare";
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
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias:
        process.env.NODE_ENV === "production"
          ? { "react-dom/server": "react-dom/server.edge" }
          : undefined,
    },
  },
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
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
