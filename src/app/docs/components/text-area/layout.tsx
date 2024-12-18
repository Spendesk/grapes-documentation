import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "TextArea",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>TextArea</h1>
      <p>
        The TextArea component lets users enter long form text which spans over
        multiple lines.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/TextArea"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/text-area" },
          { text: "Props", href: "/docs/components/text-area/props" },
          {
            text: "Accessibility",
            href: "/docs/components/text-area/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
