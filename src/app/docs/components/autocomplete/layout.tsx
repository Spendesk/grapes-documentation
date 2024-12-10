import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Autocomplete</h1>
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
