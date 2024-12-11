import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "RadioBox",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>RadioBox</h1>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/RadioBox">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/radio-box" },
          { text: "Props", href: "/docs/components/radio-box/props" },
          {
            text: "Accessibility",
            href: "/docs/components/radio-box/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
