import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Popover",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Popover</h1>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Popover"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/popover" },
          { text: "Props", href: "/docs/components/popover/props" },
        ]}
      />
      {props.children}
    </>
  );
}
