import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "FileCard",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>FileCard</h1>
      <p>
        This component is used to display a condensed view of a file. When
        clicked, the user should expect to see a detailed version.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/FileCard"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/file-card" },
          { text: "Props", href: "/docs/components/file-card/props" },
        ]}
      />
      {props.children}
    </>
  );
}
