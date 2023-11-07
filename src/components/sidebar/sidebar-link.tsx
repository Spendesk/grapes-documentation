"use client";

import { NavigationItem } from "@dev-spendesk/grapes";
import Link from "next/link";

type Props = {
  isActive: boolean;
  subRoute: {
    url: string;
    label: string;
  };
};

export function SideBarLink({ isActive, subRoute }: Props) {
  return (
    <NavigationItem
      isActive={isActive}
      variant="sideNavigation"
      component={Link}
      href={subRoute.url}
      text={subRoute.label}
    />
  );
}
