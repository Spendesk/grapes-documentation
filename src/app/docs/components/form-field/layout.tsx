import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>FormField</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/form-field" },
          { text: "Props", href: "/docs/components/form-field/props" },
        ]}
      />
      {props.children}
    </>
  );
}
