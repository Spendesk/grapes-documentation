import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "CalendarRange",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>CalendarRange</h1>
      <p>
        CalendarRange displays a grid of days in two months and allows users to
        select a contiguous range of dates.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/CalendarRange"
      >
        View source code
      </GrapesLink>
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
