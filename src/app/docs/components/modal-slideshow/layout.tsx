import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>ModalSlideshow</h1>
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
