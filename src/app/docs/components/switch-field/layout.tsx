import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "SwitchField",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>SwitchField</h1>
      <p>
        The SwitchField is a type of checkbox that represents on/off values.
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/SwitchField">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/switch-field" },
          { text: "Props", href: "/docs/components/switch-field/props" },
          {
            text: "Accessibility",
            href: "/docs/components/switch-field/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
