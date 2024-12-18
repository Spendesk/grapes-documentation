import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "AutocompletePlace",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>AutocompletePlace</h1>
      <p>
        The autocompletePlace is an address input enhanced by Mapbox. This
        component is useful when the user need to enter an address.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/AutocompletePlace"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/autocomplete-place" },
          { text: "Props", href: "/docs/components/autocomplete-place/props" },
        ]}
      />
      {props.children}
    </>
  );
}
