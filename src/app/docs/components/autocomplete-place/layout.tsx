import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>AutocompletePlace</h1>
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
