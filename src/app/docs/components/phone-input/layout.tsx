import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "PhoneInput",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>PhoneInput</h1>
      <p>The PhoneInput component allows users to enter their phone number.</p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/PhoneInput"
      >
        View source code
      </GrapesLink>
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
