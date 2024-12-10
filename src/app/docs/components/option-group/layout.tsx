import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>OptionGroup</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/option-group" },
          { text: "Props", href: "/docs/components/option-group/props" },
          {
            text: "Accessibility",
            href: "/docs/components/option-group/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
