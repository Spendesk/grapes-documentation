import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>PageModal</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/page-modal" },
          { text: "Props", href: "/docs/components/page-modal/props" },
        ]}
      />
      {props.children}
    </>
  );
}
