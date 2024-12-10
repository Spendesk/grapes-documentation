import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>RadioField</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/radio-field" },
          { text: "Props", href: "/docs/components/radio-field/props" },
          {
            text: "Accessibility",
            href: "/docs/components/radio-field/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
