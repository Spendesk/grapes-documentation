import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Panel</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/panel" },
          { text: "Props", href: "/docs/components/panel/props" },
        ]}
      />
      {props.children}
    </>
  );
}
