import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Calendar</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/calendar" },
          { text: "Props", href: "/docs/components/calendar/props" },
        ]}
      />
      {props.children}
    </>
  );
}
