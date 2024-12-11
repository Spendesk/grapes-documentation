import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "HighlightIcon",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>HighlightIcon</h1>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/HighlightIcon">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/highlight-icon" },
          { text: "Props", href: "/docs/components/highlight-icon/props" },
        ]}
      />
      {props.children}
    </>
  );
}
