import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "UploadButton",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>UploadButton</h1>
      <p>
        The UploadButton component allows users to upload a file with a button.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/UploadButton"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/upload-button" },
          { text: "Props", href: "/docs/components/upload-button/props" },
        ]}
      />
      {props.children}
    </>
  );
}
