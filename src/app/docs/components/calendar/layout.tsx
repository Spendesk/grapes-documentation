import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { Link as GrapesLink } from "@dev-spendesk/grapes";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>Calendar</h1>
      <p>
        Calendar displays the grid of days in a month and allow users to select
        a single date.
      </p>
      <GrapesLink
        isExternal
        href="https://github.com/Spendesk/grapes/tree/master/src/components/Calendar"
      >
        View source code
      </GrapesLink>
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
