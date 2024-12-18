import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "TextInput",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>TextInput</h1>
      <p>A text field is an input that allows a user to write or edit text.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/TextInput"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/text-input" },
          { text: "Props", href: "/docs/components/text-input/props" },
          {
            text: "Accessibility",
            href: "/docs/components/text-input/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
