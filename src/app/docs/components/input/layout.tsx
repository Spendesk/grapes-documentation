import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Input",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Input</h1>
      <p>
        Input is a lower-level constructs upon which all Grapes inputs are
        built.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Input"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/input" },
          { text: "Props", href: "/docs/components/input/props" },
        ]}
      />
      {props.children}
    </>
  );
}
