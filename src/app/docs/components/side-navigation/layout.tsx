import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>SideNavigation</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/side-navigation" },
          { text: "Props", href: "/docs/components/side-navigation/props" },
        ]}
      />
      {props.children}
    </>
  );
}
