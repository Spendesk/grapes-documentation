import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Button",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Button</h1>
      <p>Buttons allow users to perform an action.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Button">
        View source code
      </ExternalLink>
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
