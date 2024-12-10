import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>EmptyState</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/empty-state" },
          { text: "Props", href: "/docs/components/empty-state/props" },
          {
            text: "Accessibility",
            href: "/docs/components/empty-state/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
