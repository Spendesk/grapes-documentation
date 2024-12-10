import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>AutocompleteMultiple</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/autocomplete-multiple" },
          {
            text: "Props",
            href: "/docs/components/autocomplete-multiple/props",
          },
        ]}
      />
      {props.children}
    </>
  );
}
