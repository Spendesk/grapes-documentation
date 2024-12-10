import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Table</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/table" },
          { text: "Props", href: "/docs/components/table/props" },
        ]}
      />
      {props.children}
    </>
  );
}
