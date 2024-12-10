import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Link</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/link" },
          { text: "Props", href: "/docs/components/link/props" },
        ]}
      />
      {props.children}
    </>
  );
}
