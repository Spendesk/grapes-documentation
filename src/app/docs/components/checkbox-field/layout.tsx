import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CheckboxField</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/checkbox-field" },
          { text: "Props", href: "/docs/components/checkbox-field/props" },
          {
            text: "Accessibility",
            href: "/docs/components/checkbox-field/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
