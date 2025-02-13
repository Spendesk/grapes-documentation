"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation, NavigationItem } from "@dev-spendesk/grapes";

type Props = {
  links: {
    text: string;
    href: string;
  }[];
};
export function ComponentNavigation({ links }: Props) {
  const pathname = usePathname();
  return (
    <Navigation className="mt-24">
      {links.map((link) => {
        return (
          <NavigationItem
            key={link.text}
            text={link.text}
            isActive={pathname === link.href}
            component={Link}
            href={link.href}
          />
        );
      })}
    </Navigation>
  );
}
