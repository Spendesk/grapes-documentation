import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DropdownItem</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/dropdown-item" },
          { text: "Props", href: "/docs/components/dropdown-item/props" },
        ]}
      />
      {props.children}
    </>
  );
}
