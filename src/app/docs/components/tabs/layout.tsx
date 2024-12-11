import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Tabs",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Tabs</h1>
      <p>
        Tabs are used to organize content by grouping similar information on the
        same page.
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Tabs">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/tabs" },
          { text: "Props", href: "/docs/components/tabs/props" },
          {
            text: "Accessibility",
            href: "/docs/components/tabs/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
