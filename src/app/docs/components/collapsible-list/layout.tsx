import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CollapsibleList</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/collapsible-list" },
          { text: "Props", href: "/docs/components/collapsible-list/props" },
        ]}
      />
      {props.children}
    </>
  );
}
