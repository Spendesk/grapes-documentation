import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "SidePanel",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>SidePanel</h1>
      <p>
        A SidePanel is a container for supplementary content that is anchored to
        the edge of a page.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/SidePanel"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/side-panel" },
          { text: "Props", href: "/docs/components/side-panel/props" },
        ]}
      />
      {props.children}
    </>
  );
}
