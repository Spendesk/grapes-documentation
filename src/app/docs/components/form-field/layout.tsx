import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "FormField",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>FormField</h1>
      <p>Component to enrich a Grapes input.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/FormField">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/form-field" },
          { text: "Props", href: "/docs/components/form-field/props" },
        ]}
      />
      {props.children}
    </>
  );
}
