import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

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
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/SwitchField"
      >
        View source code
      </GrapesLink>
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
