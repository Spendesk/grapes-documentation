import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>PasswordInput</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/password-input" },
          { text: "Props", href: "/docs/components/password-input/props" },
        ]}
      />
      {props.children}
    </>
  );
}
