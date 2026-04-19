import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const isStaticBuild = process.env.STATIC_BUILD === "true";

export default defineConfig({
  site: "https://www.efiteca.com",
  integrations: [mdx(), react(), sitemap()],
  ...(isStaticBuild ? { output: "static" } : { adapter: vercel() }),
  build: {
    assets: "assets"
  },
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
