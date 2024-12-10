import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CheckboxBox</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/checkbox-box" },
          { text: "Props", href: "/docs/components/checkbox-box/props" },
        ]}
      />
      {props.children}
    </>
  );
}
