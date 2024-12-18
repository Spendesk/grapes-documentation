import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "RadioBox",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>RadioBox</h1>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/RadioBox"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/radio-box" },
          { text: "Props", href: "/docs/components/radio-box/props" },
          {
            text: "Accessibility",
            href: "/docs/components/radio-box/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
