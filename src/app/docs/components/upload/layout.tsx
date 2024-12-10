import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Upload</h1>
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
