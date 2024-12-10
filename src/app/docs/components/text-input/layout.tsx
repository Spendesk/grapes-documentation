import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>TextInput</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/text-input" },
          { text: "Props", href: "/docs/components/text-input/props" },
          {
            text: "Accessibility",
            href: "/docs/components/text-input/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
