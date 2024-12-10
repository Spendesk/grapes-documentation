import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Callout</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/callout" },
          { text: "Props", href: "/docs/components/callout/props" },
          {
            text: "Accessibility",
            href: "/docs/components/callout/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
