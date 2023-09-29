/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      onest: ["Onest", "serif"],
      pixelify: ["Pixelify Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      signika: ["Signika", "sans-serif"],
    },
  },
  plugins: [],
};
