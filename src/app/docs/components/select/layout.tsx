import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Select</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/select" },
          { text: "Props", href: "/docs/components/select/props" },
        ]}
      />
      {props.children}
    </>
  );
}
