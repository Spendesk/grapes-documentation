import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Accordion",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Accordion</h1>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Accordion"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/accordion" },
          { text: "Props", href: "/docs/components/accordion/props" },
        ]}
      />
      {props.children}
    </>
  );
}
