import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>InfoTip</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/info-tip" },
          { text: "Props", href: "/docs/components/info-tip/props" },
        ]}
      />
      {props.children}
    </>
  );
}
