import { IconName } from "@dev-spendesk/grapes";

type HeaderRoute = {
  id: "theme" | "components";
  category: string;
  iconName: IconName;
  url: string;
};

export type RouteConfig = {
  category: string;
  routes: Route[];
};

export type Route = {
  label: string;
  url: string;
};

export const headerRoutes: HeaderRoute[] = [
  {
    id: "components",
    category: "Getting Started",
    iconName: "success",
    url: "/docs/getting-started/installation",
  },
  {
    id: "theme",
    category: "Design Tokens",
    iconName: "sparkles",
    url: "/docs/theme",
  },
  {
    id: "components",
    category: "Components",
    iconName: "dashboard",
    url: "/docs/components",
  },
];

const componentRoutes: RouteConfig[] = [
  {
    category: "Getting Started",
    routes: [
      {
        label: "Installation",
        url: "/docs/getting-started/installation",
      },
      {
        label: "Supported Platforms",
        url: "/docs/getting-started/supported-platforms",
      },
    ],
  },
  {
    category: "Interaction",
    routes: [
      {
        label: "Button",
        url: "/docs/components/button",
      },
      {
        label: "IconButton",
        url: "/docs/components/icon-button",
      },
      {
        label: "Link",
        url: "/docs/components/link",
      },
    ],
  },
  {
    category: "Feedback",
    routes: [
      {
        label: "Modal",
        url: "/docs/components/modal",
      },
      {
        label: "Tag",
        url: "/docs/components/tag",
      },
      {
        label: "Toast",
        url: "/docs/components/toast",
      },
      {
        label: "Tooltip",
        url: "/docs/components/tooltip",
      },
    ],
  },
  {
    category: "Navigation",
    routes: [
      {
        label: "CollapsibleList",
        url: "/docs/components/collapsible-list",
      },
    ],
  },
];

const designTokensRoutes: RouteConfig[] = [
  {
    category: "Design tokens",
    routes: [
      {
        label: "Animations",
        url: "/docs/theme/animations",
      },
      {
        label: "Border radius",
        url: "/docs/theme/border-radius",
      },
      {
        label: "Colors",
        url: "/docs/theme/colors",
      },
      {
        label: "Elevation",
        url: "/docs/theme/elevation",
      },
      {
        label: "Sizings",
        url: "/docs/theme/sizings",
      },
      {
        label: "Spacings",
        url: "/docs/theme/spacings",
      },
      {
        label: "Typography",
        url: "/docs/theme/typography",
      },
    ],
  },
  {
    category: "TailwindCSS utils",
    routes: [
      {
        label: "Box",
        url: "/docs/theme/box",
      },
      {
        label: "Separator",
        url: "/docs/theme/separator",
      },
    ],
  },
];

export const routes = {
  components: componentRoutes,
  theme: designTokensRoutes,
};
