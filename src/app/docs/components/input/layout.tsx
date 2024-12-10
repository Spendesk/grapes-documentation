import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Input</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/input" },
          { text: "Props", href: "/docs/components/input/props" },
        ]}
      />
      {props.children}
    </>
  );
}
