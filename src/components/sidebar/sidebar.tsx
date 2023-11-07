import { Route } from "@/config/routes";
import { SideBarLink } from "./sidebar-link";
import { usePathname } from "next/navigation";

type Props = {
  routes: Route[];
};

export function SideBar({ routes }: Props) {
  const pathname = usePathname();

  return (
    <div className="pl-s pt-m">
      {routes.map((route) => (
        <div key={route.category}>
          <div className="uppercase text-primary-dark title-m ml-xs my-xs">
            {route.category}
          </div>
          {route.routes.map((subRoute) => (
            <SideBarLink
              key={subRoute.label}
              isActive={pathname === subRoute.url}
              subRoute={subRoute}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
