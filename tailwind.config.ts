import type { Config } from "tailwindcss";
import {
  headingTokens,
  titleTokens,
  bodyTokens,
} from "./src/app/docs/tokens/typography/types";

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
  safelist: [...headingTokens, ...titleTokens, ...bodyTokens],
};
export default config;
