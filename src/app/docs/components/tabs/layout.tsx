import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Tabs</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/tabs" },
          { text: "Props", href: "/docs/components/tabs/props" },
          {
            text: "Accessibility",
            href: "/docs/components/tabs/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
