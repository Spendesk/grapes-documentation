import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Select",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Select</h1>
      <p>
        The Select component allows the user to click and select an item from a
        list of options.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Select"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/select" },
          { text: "Props", href: "/docs/components/select/props" },
        ]}
      />
      {props.children}
    </>
  );
}
