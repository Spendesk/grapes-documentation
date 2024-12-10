import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Accordion</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/accordion" },
          { text: "Props", href: "/docs/components/accordion/props" },
        ]}
      />
      {props.children}
    </>
  );
}
