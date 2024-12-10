import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>NavigationItem</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/navigation-item" },
          { text: "Props", href: "/docs/components/navigation-item/props" },
        ]}
      />
      {props.children}
    </>
  );
}
