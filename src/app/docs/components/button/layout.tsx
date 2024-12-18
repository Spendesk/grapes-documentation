import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Button",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Button</h1>
      <p>Buttons allow users to perform an action.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Button"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/button" },
          { text: "Props", href: "/docs/components/button/props" },
          {
            text: "Accessibility",
            href: "/docs/components/button/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
