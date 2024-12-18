import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

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
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/RadioGroup"
      >
        View source code
      </GrapesLink>
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
