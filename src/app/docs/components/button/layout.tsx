import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Button</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/button" },
          { text: "Props", href: "/docs/components/button/props" },
          {
            text: "Accessibility",
            href: "/docs/components/button/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
