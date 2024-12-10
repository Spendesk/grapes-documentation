import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Modal</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/modal" },
          { text: "Props", href: "/docs/components/modal/props" },
          {
            text: "Accessibility",
            href: "/docs/components/modal/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
