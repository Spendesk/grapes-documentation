import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Badge</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/badge" },
          { text: "Props", href: "/docs/components/badge/props" },
        ]}
      />
      {props.children}
    </>
  );
}
