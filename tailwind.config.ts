import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./mdx-components.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  corePlugins: {
    // Disable preflight because we already have everything
    preflight: false,

    // Color opacity shouldn't be necessary
    backgroundOpacity: false,
    borderOpacity: false,
    textOpacity: false,
  },
  presets: [require("@dev-spendesk/grapes/tailwind")],
  variants: {},
};
export default config;
