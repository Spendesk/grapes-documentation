import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

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
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/CalendarRange">
        View source code
      </ExternalLink>
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
