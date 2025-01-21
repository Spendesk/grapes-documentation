import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "FloatingActionBar",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>FloatingActionBar</h1>
      <p>FloatingActionBar help users perform an action from a list.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/ActionBar"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/floating-action-bar" },
          { text: "Props", href: "/docs/components/floating-action-bar/props" },
        ]}
      />
      {props.children}
    </>
  );
}
