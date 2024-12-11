import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "Modal",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Modal</h1>
      <p>
        A Modal is window containing contextual information, tasks, or workflows
        that appear over the user interface. The content behind a modal dialog
        is inert, meaning that users cannot interact with it.
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Modal">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/modal" },
          { text: "Props", href: "/docs/components/modal/props" },
          {
            text: "Accessibility",
            href: "/docs/components/modal/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
