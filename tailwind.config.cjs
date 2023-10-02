/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      onest: ["Onest", "serif"],
      pixelify: ["Pixelify Sans", "sans-serif"],
    },
    extend: {
      colors: {
        reactBlue: "#BAA333",
        preactPurple: "#BAA333",
        svelteOrange: "#ff3c00",
        solidBlue: "#3c5a80",
        alpineBlue: "#77c1d2",
        vueGreen: "#BAA333",
        astroPurple: "#2a233e",
      },
    },
  },
  plugins: [],
};
