import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ci.buddyworks.wtf",
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
