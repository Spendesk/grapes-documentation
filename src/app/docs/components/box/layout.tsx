import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Box",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Box</h1>
      <p>A Box is a container that groups related content.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Box"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/box" },
          { text: "Props", href: "/docs/components/box/props" },
        ]}
      />
      {props.children}
    </>
  );
}
