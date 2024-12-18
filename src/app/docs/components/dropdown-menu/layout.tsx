import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";
import { Callout } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "DropdownMenu",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DropdownMenu</h1>
      <p>A dropdown menu displays a list of actions or options to a user.</p>
      <Callout title="Usage" variant="info">
        This component is not intended to be used within a form. If you need a
        form element, please refer to the Autocomplete or AutocompleteMultiple
        components documentation.
      </Callout>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/DropdownMenu"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/dropdown-menu" },
          { text: "Props", href: "/docs/components/dropdown-menu/props" },
        ]}
      />
      {props.children}
    </>
  );
}
