import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Callout",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Callout</h1>
      <p>
        Callouts are used to communicate a state that affects a system, feature
        or page.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Callout"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/callout" },
          { text: "Props", href: "/docs/components/callout/props" },
          {
            text: "Accessibility",
            href: "/docs/components/callout/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
