"use client";

import React, { useId } from "react";
import { routes, headerRoutes, type RouteConfig } from "@/app/routes";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { classNames } from "../classNames";

function NavigationList({ route }: { route: RouteConfig }) {
  const pathname = usePathname();
  const listId = useId();

  return (
    <details className="mb-32" open>
      <summary
        id={listId}
        className="title-m mb-8 text-brand-default cursor-pointer"
      >
        {route.category}
      </summary>
      <ul className="ml-4" aria-labelledby={listId}>
        {route.routes.map((subRoute) => (
          <li key={subRoute.label}>
            <Link
              className={classNames(
                "docs-nav-link",
                pathname === subRoute.url && "active",
              )}
              href={subRoute.url}
            >
              {subRoute.label}
            </Link>
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
