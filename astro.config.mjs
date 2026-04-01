import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://www.efiteca.com",
  integrations: [mdx(), react()],
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
