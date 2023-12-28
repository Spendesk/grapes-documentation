"use client";

import { routes, headerRoutes } from "@/config/routes";
import { usePathname } from "next/navigation";

import { SideBarLink } from "./sidebar-link";

export function SideBar() {
  const pathname = usePathname();

  const currentHeaderRoute = headerRoutes.find((headerRoute) =>
    pathname.startsWith(headerRoute.url)
  );
  const currentHeaderRouteId = currentHeaderRoute
    ? currentHeaderRoute.id
    : "components";

  const activeSubRoute = routes[currentHeaderRouteId];

  return (
    <>
      <ul className="mb-l">
        {headerRoutes.map((headerRoute) => (
          <li key={headerRoute.category}>
            <SideBarLink
              isActive={pathname.startsWith(headerRoute.url)}
              url={headerRoute.url}
              label={headerRoute.category}
              iconName={headerRoute.iconName}
            />
          </li>
        ))}
      </ul>
      {activeSubRoute.map((route) => (
        <div key={route.category}>
          <h3 className="uppercase text-primary-dark title-m ml-xs my-xs">
            {route.category}
          </h3>
          <ul>
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
        </div>
      ))}
    </>
  );
}
