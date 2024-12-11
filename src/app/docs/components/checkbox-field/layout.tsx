import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

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
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/CheckboxField">
        View source code
      </ExternalLink>
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
