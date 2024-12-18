import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "OptionGroup",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>OptionGroup</h1>
      <p>
        OptionGroup allows the user to select one item from a <b>restricted</b>
        collection (usually 3 to 5 items).
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/OptionGroup"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/option-group" },
          { text: "Props", href: "/docs/components/option-group/props" },
          {
            text: "Accessibility",
            href: "/docs/components/option-group/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
