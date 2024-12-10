import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>SwitchField</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/switch-field" },
          { text: "Props", href: "/docs/components/switch-field/props" },
          {
            text: "Accessibility",
            href: "/docs/components/switch-field/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
