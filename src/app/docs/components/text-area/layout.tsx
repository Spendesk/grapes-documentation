import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>TextArea</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/text-area" },
          { text: "Props", href: "/docs/components/text-area/props" },
          {
            text: "Accessibility",
            href: "/docs/components/text-area/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
