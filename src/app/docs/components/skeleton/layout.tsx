import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Skeleton</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/skeleton" },
          { text: "Props", href: "/docs/components/skeleton/props" },
        ]}
      />
      {props.children}
    </>
  );
}
