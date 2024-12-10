import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Tooltip</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/tooltip" },
          { text: "Props", href: "/docs/components/tooltip/props" },
        ]}
      />
      {props.children}
    </>
  );
}
