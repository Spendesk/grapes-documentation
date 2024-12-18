import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "ModalSlideshow",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>ModalSlideshow</h1>
      <p>
        ModalSlideshow is a special Modal using Slideshow illustrations (images
        or videos). We recommend making sure that the content on the left side
        is not too long, especially when translated. Please prefer using
        multiple slides in that case.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/ModalSlideshow"
      >
        View source code
      </GrapesLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/modal-slideshow" },
          { text: "Props", href: "/docs/components/modal-slideshow/props" },
          {
            text: "Accessibility",
            href: "/docs/components/modal-slideshow/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
