import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>RadioGroup</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/radio-group" },
          { text: "Props", href: "/docs/components/radio-group/props" },
        ]}
      />
      {props.children}
    </>
  );
}
