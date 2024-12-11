import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Badge",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Badge</h1>
      <p>Badges are used as indicators to count the quantity of items.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Badge">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/badge" },
          { text: "Props", href: "/docs/components/badge/props" },
        ]}
      />
      {props.children}
    </>
  );
}
