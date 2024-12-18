import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "DropdownItem",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DropdownItem</h1>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/DropdownItem"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/dropdown-item" },
          { text: "Props", href: "/docs/components/dropdown-item/props" },
        ]}
      />
      {props.children}
    </>
  );
}
