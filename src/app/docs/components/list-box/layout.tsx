import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "ListBox",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>ListBox</h1>
      <p>The ListBox component is used to display data.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/ListBox">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/list-box" },
          { text: "Props", href: "/docs/components/list-box/props" },
          {
            text: "Accessibility",
            href: "/docs/components/list-box/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
