import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>UploadButton</h1>
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
