import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Panel",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Panel</h1>
      <p>
        A panel is a folding block displaying compact information and controls.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Panel"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/panel" },
          { text: "Props", href: "/docs/components/panel/props" },
        ]}
      />
      {props.children}
    </>
  );
}
