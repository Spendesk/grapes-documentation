import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "DropdownItem",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DropdownItem</h1>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/DropdownItem">
        View source code
      </ExternalLink>
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
