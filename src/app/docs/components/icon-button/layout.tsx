import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>IconButton</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/icon-button" },
          { text: "Props", href: "/docs/components/icon-button/props" },
          {
            text: "Accessibility",
            href: "/docs/components/icon-button/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
