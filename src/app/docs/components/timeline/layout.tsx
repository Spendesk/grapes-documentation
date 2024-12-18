import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Timeline</h1>
      <p>The timeline displays a list of events in chronological order.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Timeline"
      >
        View source code
      </GrapesLink>
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
