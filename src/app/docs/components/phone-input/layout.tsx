import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>PhoneInput</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/phone-input" },
          { text: "Props", href: "/docs/components/phone-input/props" },
        ]}
      />
      {props.children}
    </>
  );
}
