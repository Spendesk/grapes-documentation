import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./mdx-components.tsx",
    "./src/lib/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{tsx,mdx}",
  ],
  plugins: [],
  corePlugins: {
    // Disable preflight because we already have everything
    preflight: false,

    // Color opacity shouldn't be necessary
    backgroundOpacity: false,
    borderOpacity: false,
    textOpacity: false,
    container: false,
    filter: false,
  },
  presets: [require("@dev-spendesk/grapes/tailwind")],
  variants: {},
  // These classes are added dynamically and need to be safelisted.
  // @see https://tailwindcss.com/docs/content-configuration#safelisting-classes
  safelist: ["title-s", "title-xl", "body-xxl", "title-xxl"],
};
export default config;
