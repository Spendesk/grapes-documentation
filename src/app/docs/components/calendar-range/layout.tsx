import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CalendarRange</h1>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/components/calendar-range" },
          { text: "Props", href: "/docs/components/calendar-range/props" },
        ]}
      />
      {props.children}
    </>
  );
}
