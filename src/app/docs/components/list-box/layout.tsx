import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>ListBox</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/list-box" },
          { text: "Props", href: "/docs/components/list-box/props" },
          {
            text: "Accessibility",
            href: "/docs/components/list-box/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
