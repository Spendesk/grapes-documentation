import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "CollapsibleList",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CollapsibleList</h1>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/CollapsibleList">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/collapsible-list" },
          { text: "Props", href: "/docs/components/collapsible-list/props" },
        ]}
      />
      {props.children}
    </>
  );
}
