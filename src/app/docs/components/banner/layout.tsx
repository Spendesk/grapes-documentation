import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Banner</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/banner" },
          { text: "Props", href: "/docs/components/banner/props" },
          {
            text: "Accessibility",
            href: "/docs/components/banner/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
