import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Toast",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Toast</h1>
      <p>Provides a brief notification.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Toast"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/toast" },
          { text: "Props", href: "/docs/components/toast/props" },
          {
            text: "Accessibility",
            href: "/docs/components/toast/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
