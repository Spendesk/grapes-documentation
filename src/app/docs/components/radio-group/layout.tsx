import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "RadioGroup",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>RadioGroup</h1>
      <p>
        The radio group component is the preferred way to display multiple radio
        fields.
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/RadioGroup">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/radio-group" },
          { text: "Props", href: "/docs/components/radio-group/props" },
        ]}
      />
      {props.children}
    </>
  );
}
