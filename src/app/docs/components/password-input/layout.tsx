import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "PasswordInput",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>PasswordInput</h1>
      <p>
        The PasswordInput creates an input of type password with a set of rules.
        The eye icon lets you display the password if needed.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/PasswordInput"
      >
        View source code
      </GrapesLink>
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
