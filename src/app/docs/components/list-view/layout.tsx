import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "ListView",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>ListView</h1>
      <p>
        ListView is a collection component that provides users with a list of
        interactive items. ListView is an ideal component for use cases such as
        Settings parameters.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/ListView"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/list-view" },
          { text: "Props", href: "/docs/components/list-view/props" },
          {
            text: "Accessibility",
            href: "/docs/components/list-view/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
