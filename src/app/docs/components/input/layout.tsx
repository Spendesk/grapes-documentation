import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

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
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Input">
        View source code
      </ExternalLink>
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
