import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "DeprecatedModalSlideshow",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DeprecatedModalSlideshow</h1>
      <p>
        DeprecatedModalSlideshow is a special Modal using a Slideshow as header.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/DeprecatedModalSlideshow"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          {
            text: "Usage",
            href: "/docs/components/deprecated-modal-slideshow",
          },
          {
            text: "Props",
            href: "/docs/components/deprecated-modal-slideshow/props",
          },
          {
            text: "Accessibility",
            href: "/docs/components/deprecated-modal-slideshow/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
