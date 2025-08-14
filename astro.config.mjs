import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import mkcert from "vite-plugin-mkcert";
import vercel from "@astrojs/vercel"
import remarkBreaks from "remark-breaks"
import remarkObsidianCallout from "remark-obsidian-callout";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://zanefitzgerald.com",
  markdown: {remarkPlugins: [remarkBreaks, remarkObsidianCallout]},
  integrations: [mdx(), sitemap(), react(), tailwind({
    applyBaseStyles: true,
  }), svelte()],
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [mkcert()]
  }
})