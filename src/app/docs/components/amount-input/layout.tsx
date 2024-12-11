import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "AmountInput",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>AmountInput</h1>
      <p>
        The AmountInput is a number input designed to handle currency amounts.
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/AmountInput">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/amount-input" },
          { text: "Props", href: "/docs/components/amount-input/props" },
        ]}
      />
      {props.children}
    </>
  );
}
