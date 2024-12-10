import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Toast</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/toast" },
          { text: "Props", href: "/docs/components/toast/props" },
          {
            text: "Accessibility",
            href: "/docs/components/toast/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
