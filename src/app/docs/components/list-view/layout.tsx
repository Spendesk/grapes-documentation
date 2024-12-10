import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>ListView</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/list-view" },
          { text: "Props", href: "/docs/components/list-view/props" },
          {
            text: "Accessibility",
            href: "/docs/components/list-view/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
