import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Tag</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/tag" },
          { text: "Props", href: "/docs/components/tag/props" },
          { text: "Accessibility", href: "/docs/components/tag/accessibility" },
        ]}
      />
      {props.children}
    </>
  );
}
