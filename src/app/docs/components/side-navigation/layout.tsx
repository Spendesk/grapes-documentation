import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "SideNavigation",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>SideNavigation</h1>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/SideNavigation">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/side-navigation" },
          { text: "Props", href: "/docs/components/side-navigation/props" },
        ]}
      />
      {props.children}
    </>
  );
}
