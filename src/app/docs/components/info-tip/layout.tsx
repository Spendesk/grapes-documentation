import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "InfoTip",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>InfoTip</h1>
      <p>The InfoTip component displays a rounded info icon with a tooltip.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/InfoTip"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/info-tip" },
          { text: "Props", href: "/docs/components/info-tip/props" },
        ]}
      />
      {props.children}
    </>
  );
}
