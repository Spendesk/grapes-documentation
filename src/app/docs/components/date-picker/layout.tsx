import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "DatePicker",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DatePicker</h1>
      <p>DatePicker lets users select a date.</p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/DatePicker">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/date-picker" },
          { text: "Props", href: "/docs/components/date-picker/props" },
        ]}
      />
      {props.children}
    </>
  );
}
