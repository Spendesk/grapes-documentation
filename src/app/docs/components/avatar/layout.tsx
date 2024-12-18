import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Avatar",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Avatar</h1>
      <p>
        The Avatar component is used to represent a user or a entity. It
        displays a picture or a fallback to initials.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Avatar"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/avatar" },
          { text: "Props", href: "/docs/components/avatar/props" },
          {
            text: "Accessibility",
            href: "/docs/components/avatar/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
