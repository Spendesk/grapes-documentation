import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Popover</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/popover" },
          { text: "Props", href: "/docs/components/popover/props" },
        ]}
      />
      {props.children}
    </>
  );
}
