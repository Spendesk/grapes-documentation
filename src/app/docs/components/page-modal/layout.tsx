import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "PageModal",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>PageModal</h1>
      <p>
        PageModals are a variant form of Modal designed for larger content. They
        are intended for contexts involving extensive information, complex
        tasks, or substantial workflows. The content behind a PageModal dialog
        is inert, meaning that users cannot interact with it.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/PageModal"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/page-modal" },
          { text: "Props", href: "/docs/components/page-modal/props" },
        ]}
      />
      {props.children}
    </>
  );
}
