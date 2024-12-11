import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Banner",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Banner</h1>
      <p>Callout to prompt the user for an action.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Banner">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/banner" },
          { text: "Props", href: "/docs/components/banner/props" },
          {
            text: "Accessibility",
            href: "/docs/components/banner/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
