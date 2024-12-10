import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Navigation</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/navigation" },
          { text: "Props", href: "/docs/components/navigation/props" },
        ]}
      />
      {props.children}
    </>
  );
}
