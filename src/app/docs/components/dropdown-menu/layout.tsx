import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DropdownMenu</h1>
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
