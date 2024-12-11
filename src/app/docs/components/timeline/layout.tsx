import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Timeline</h1>
      <p>The timeline displays a list of events in chronological order.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Timeline">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/timeline" },
          { text: "Props", href: "/docs/components/timeline/props" },
          {
            text: "Accessibility",
            href: "/docs/components/timeline/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
