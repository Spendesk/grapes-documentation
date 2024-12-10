import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DeprecatedPreview</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/deprecated-preview" },
          { text: "Props", href: "/docs/components/deprecated-preview/props" },
        ]}
      />
      {props.children}
    </>
  );
}
