import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Avatar</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/avatar" },
          { text: "Props", href: "/docs/components/avatar/props" },
          {
            text: "Accessibility",
            href: "/docs/components/avatar/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
