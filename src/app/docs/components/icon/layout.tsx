import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Icon",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Icon</h1>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Icon">
        View source code
      </ExternalLink>
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
