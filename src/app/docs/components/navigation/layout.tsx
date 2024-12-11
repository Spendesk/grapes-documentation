import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Navigation",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Navigation</h1>
      <p>
        A Navigation displays a horizontal list of pages that are accessible to
        a user.
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Navigation">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/navigation" },
          { text: "Props", href: "/docs/components/navigation/props" },
        ]}
      />
      {props.children}
    </>
  );
}
