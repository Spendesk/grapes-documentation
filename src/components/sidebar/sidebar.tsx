"use client";

import React, { useId } from "react";
import { routes, headerRoutes, type RouteConfig } from "@/config/routes";
import { usePathname } from "next/navigation";

import { SideBarLink } from "./sidebar-link";

function NavigationList({ route }: { route: RouteConfig }) {
  const pathname = usePathname();
  const listId = useId();

  return (
    <details className="mb-l" open>
      <summary
        id={listId}
        className="title-m mb-xs text-primary-dark cursor-pointer"
      >
        {route.category}
      </summary>
      <ul className="ml-xxs" aria-labelledby={listId}>
        {route.routes.map((subRoute) => (
          <li key={subRoute.label}>
            <SideBarLink
              isActive={pathname === subRoute.url}
              url={subRoute.url}
              label={subRoute.label}
            />
          </li>
        ))}
      </ul>
    </details>
  );
}

export function SideBar() {
  const pathname = usePathname();

  const currentHeaderRoute = headerRoutes.find((headerRoute) =>
    pathname.startsWith(headerRoute.url),
  );
  const currentHeaderRouteId = currentHeaderRoute
    ? currentHeaderRoute.id
    : "components";

  const activeSubRoute = routes[currentHeaderRouteId];

  return activeSubRoute.map((route) => (
    <NavigationList key={route.category} route={route} />
  ));
}
