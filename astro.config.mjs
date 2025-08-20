// @ts-check
import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://farwell.co.ao",
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD
        ? { "react-dom/server": "react-dom/server.edge" }
        : undefined,
    },
  },
  output: "server",
  adapter:
    process.env.ADAPTER === "cloudflare"
      ? cloudflare({
          imageService: "compile",
        })
      : node({
          mode: "standalone",
        }),
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
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
