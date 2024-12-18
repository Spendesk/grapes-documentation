import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "DeprecatedPreview",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DeprecatedPreview</h1>
      <p>
        This component is used to display a condensed view of an entity. If it
        is clickable, we expect to see a detailed version.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/DeprecatedPreview"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/deprecated-preview" },
          { text: "Props", href: "/docs/components/deprecated-preview/props" },
        ]}
      />
      {props.children}
    </>
  );
}
