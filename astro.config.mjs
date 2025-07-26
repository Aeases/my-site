import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import mkcert from "vite-plugin-mkcert";
import vercel from "@astrojs/vercel/serverless"
import remarkBreaks from "remark-breaks"
import remarkObsidianCallout from "remark-obsidian-callout";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {remarkPlugins: [remarkBreaks, remarkObsidianCallout]},
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [mkcert()]
  }
})
