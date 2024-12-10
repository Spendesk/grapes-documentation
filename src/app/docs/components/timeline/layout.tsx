import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Timeline</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/timeline" },
          { text: "Props", href: "/docs/components/timeline/props" },
          {
            text: "Accessibility",
            href: "/docs/components/timeline/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
