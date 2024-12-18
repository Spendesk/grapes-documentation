import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Skeleton",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Skeleton</h1>
      <p>
        This component provides a placeholder while you wait for the content to
        load. The width and height of this component are fully customizable.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Skeleton"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/skeleton" },
          { text: "Props", href: "/docs/components/skeleton/props" },
        ]}
      />
      {props.children}
    </>
  );
}
