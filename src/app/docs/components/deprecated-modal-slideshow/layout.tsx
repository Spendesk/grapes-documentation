import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

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
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/DeprecatedModalSlideshow">
        View source code
      </ExternalLink>
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
