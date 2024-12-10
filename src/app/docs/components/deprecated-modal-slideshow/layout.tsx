import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>DeprecatedModalSlideshow</h1>
      <ComponentNavigation
        links={[
          {
            text: "Usage",
            href: "/docs/components/deprecated-modal-slideshow",
          },
          {
            text: "Props",
            href: "/docs/components/deprecated-modal-slideshow/props",
          },
          {
            text: "Accessibility",
            href: "/docs/components/deprecated-modal-slideshow/accessibility",
          },
        ]}
      />
      {props.children}
    </>
  );
}
