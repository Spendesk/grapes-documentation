import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "RadioField",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>RadioField</h1>
      <p>
        A radio input allows people to select one option from a number of
        choices. The radio field is generally displayed in a radio group.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/RadioField"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/radio-field" },
          { text: "Props", href: "/docs/components/radio-field/props" },
          {
            text: "Accessibility",
            href: "/docs/components/radio-field/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
