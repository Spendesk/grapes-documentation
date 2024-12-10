import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Icon</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/icon" },
          { text: "Props", href: "/docs/components/icon/props" },
        ]}
      />
      {props.children}
    </>
  );
}
