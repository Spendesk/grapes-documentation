import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "NavigationItem",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>NavigationItem</h1>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/NavigationItem">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/navigation-item" },
          { text: "Props", href: "/docs/components/navigation-item/props" },
        ]}
      />
      {props.children}
    </>
  );
}
