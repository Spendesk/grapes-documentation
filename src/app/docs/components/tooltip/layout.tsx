import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Tooltip",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Tooltip</h1>
      <p>Displays informative text when users hover an element.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Tooltip">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/tooltip" },
          { text: "Props", href: "/docs/components/tooltip/props" },
        ]}
      />
      {props.children}
    </>
  );
}
