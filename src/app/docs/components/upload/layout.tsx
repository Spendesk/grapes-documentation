import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Upload",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Upload</h1>
      <p>
        The Upload component allows users to upload a file manually or using
        drag and drop.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Upload"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/upload" },
          { text: "Props", href: "/docs/components/upload/props" },
        ]}
      />
      {props.children}
    </>
  );
}
