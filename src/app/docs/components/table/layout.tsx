import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Table",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Table</h1>
      <p>The Table component is used to show information from a data set.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Table"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/table" },
          { text: "Props", href: "/docs/components/table/props" },
        ]}
      />
      {props.children}
    </>
  );
}
