import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import mkcert from "vite-plugin-mkcert";
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: "hybrid",
  adapter: vercel(),
  vite: {
    plugins: [mkcert()]
  }
})
