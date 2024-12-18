import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "CheckboxField",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CheckboxField</h1>
      <p>
        Checkboxes allow the user to select one or more items from a collection.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/CheckboxField"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/checkbox-field" },
          { text: "Props", href: "/docs/components/checkbox-field/props" },
          {
            text: "Accessibility",
            href: "/docs/components/checkbox-field/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
