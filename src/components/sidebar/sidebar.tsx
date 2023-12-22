import { routes, routeCategories } from "@/config/routes";
import { usePathname } from "next/navigation";

import { SideBarLink } from "./sidebar-link";

export function SideBar() {
  const pathname = usePathname();

  return (
    <nav className="pt-m">
      <ul className="mb-l">
        {routeCategories.map((routeCategory) => (
          <SideBarLink
            key={routeCategory.category}
            isActive={pathname.startsWith(routeCategory.url)}
            url={routeCategory.url}
            label={routeCategory.category}
            iconName={routeCategory.iconName}
          />
        ))}
      </ul>
      {routes.map((route) => (
        <div key={route.category}>
          <div className="uppercase text-primary-dark title-m ml-xs my-xs">
            {route.category}
          </div>
          {route.routes.map((subRoute) => (
            <SideBarLink
              key={subRoute.label}
              isActive={pathname === subRoute.url}
              url={subRoute.url}
              label={subRoute.label}
            />
          ))}
        </div>
      ))}
    </nav>
  );
}
