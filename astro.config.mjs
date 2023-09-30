import { defineConfig } from "astro/config";
import analogjsangular from "@analogjs/astro-angular";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    analogjsangular({
      include: ["**/analog/*"],
    }),
    preact({
      include: ["**/preact/*"],
    }),
    react({
      include: ["**/react/*"],
    }),
    vue(),
    svelte({
      include: ["**/svelte/*"],
    }),
    solidJs({
      include: ["**/svelte/*"],
    }),

    tailwind(),

    alpinejs(),
  ],
});
