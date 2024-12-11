import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "EmptyState",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>EmptyState</h1>
      <p>
        EmptyState are used to inform the user when there is no data to display
        (either because of an error and we cannot retrieve it or because we have
        an empty result set).
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/EmptyState">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/empty-state" },
          { text: "Props", href: "/docs/components/empty-state/props" },
          {
            text: "Accessibility",
            href: "/docs/components/empty-state/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
