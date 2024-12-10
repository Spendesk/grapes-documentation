import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>RadioBox</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/radio-box" },
          { text: "Props", href: "/docs/components/radio-box/props" },
          {
            text: "Accessibility",
            href: "/docs/components/radio-box/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
