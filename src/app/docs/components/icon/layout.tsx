import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Icon",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Icon</h1>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Icon"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/icon" },
          { text: "Props", href: "/docs/components/icon/props" },
        ]}
      />
      {props.children}
    </>
  );
}
