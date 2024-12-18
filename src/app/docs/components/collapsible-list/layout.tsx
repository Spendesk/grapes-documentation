import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "CollapsibleList",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CollapsibleList</h1>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/CollapsibleList"
      >
        View source code
      </GrapesLink>
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
