import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

const isStaticBuild = process.env.STATIC_BUILD === "true";

export default defineConfig({
  site: "https://efiteca.lc-desarrollo.com",
  integrations: [mdx(), react()],
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
