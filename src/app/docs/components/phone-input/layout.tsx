import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "PhoneInput",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>PhoneInput</h1>
      <p>The PhoneInput component allows users to enter their phone number.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/PhoneInput">
        View source code
      </ExternalLink>
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
