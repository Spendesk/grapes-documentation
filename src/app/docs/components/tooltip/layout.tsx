import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Tooltip",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Tooltip</h1>
      <p>Displays informative text when users hover an element.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Tooltip"
      >
        View source code
      </GrapesLink>
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
