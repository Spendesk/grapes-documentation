import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>HighlightIcon</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/highlight-icon" },
          { text: "Props", href: "/docs/components/highlight-icon/props" },
        ]}
      />
      {props.children}
    </>
  );
}
