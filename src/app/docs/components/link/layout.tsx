import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Link",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Link</h1>
      <p>Links allow users to navigate to a different location.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Link"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/link" },
          { text: "Props", href: "/docs/components/link/props" },
        ]}
      />
      {props.children}
    </>
  );
}
