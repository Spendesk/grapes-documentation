import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autocomplete",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Autocomplete</h1>
      <p>
        The autocomplete is a text input enhanced by a list of suggested
        options. This component is useful when the user has to choose a single
        option from a predefined list.
      </p>
      <p>This component shouldn&apos;t be used in the following scenarios:</p>
      <ul>
        <li>
          The input may contain multiple options. Please refer to the{" "}
          <Link href="/docs/components/autocomplete-multiple">
            AutocompleteMultiple component
          </Link>
        </li>
        <li>
          The input must be an address. Please refer to the{" "}
          <Link href="/docs/components/autocomplete-place">
            AutocompletePlace component
          </Link>
        </li>
      </ul>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/Autocomplete">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/autocomplete" },
          { text: "Props", href: "/docs/components/autocomplete/props" },
        ]}
      />
      {props.children}
    </>
  );
}
