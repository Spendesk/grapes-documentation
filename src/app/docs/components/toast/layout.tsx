import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Toast",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Toast</h1>
      <p>Provides a brief notification.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Toast">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/toast" },
          { text: "Props", href: "/docs/components/toast/props" },
          {
            text: "Accessibility",
            href: "/docs/components/toast/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
