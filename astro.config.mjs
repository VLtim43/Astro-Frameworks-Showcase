import { defineConfig } from "astro/config";
import analogjsangular from "@analogjs/astro-angular";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [analogjsangular(), react(), vue(), svelte(), solidJs(), preact({
    include: ["**/preact/*"]
  }), tailwind(), lit()]
});