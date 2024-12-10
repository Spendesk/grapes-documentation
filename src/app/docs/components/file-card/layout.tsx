import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>FileCard</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/file-card" },
          { text: "Props", href: "/docs/components/file-card/props" },
        ]}
      />
      {props.children}
    </>
  );
}
