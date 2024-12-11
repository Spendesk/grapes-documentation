import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Tag",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Tag</h1>
      <p>Compact element to display information about an entity.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Tag">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/tag" },
          { text: "Props", href: "/docs/components/tag/props" },
          { text: "Accessibility", href: "/docs/components/tag/accessibility" },
        ]}
      />
      {props.children}
    </>
  );
}
