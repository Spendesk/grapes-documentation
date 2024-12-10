import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>AmountInput</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/amount-input" },
          { text: "Props", href: "/docs/components/amount-input/props" },
        ]}
      />
      {props.children}
    </>
  );
}
