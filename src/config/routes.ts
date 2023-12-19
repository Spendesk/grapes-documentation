import { IconName } from "@dev-spendesk/grapes";

type RouteCategory = {
  category: string;
  iconName: IconName;
  url: string;
};

type RouteConfig = {
  category: string;
  routes: {
    label: string;
    url: string;
  }[];
}[];

export const routeCategories: RouteCategory[] = [
  {
    category: "Getting Started",
    iconName: "success",
    url: "/docs/getting-started",
  },
  {
    category: "Components",
    iconName: "dashboard",
    url: "/docs/components",
  },
  {
    category: "Theme",
    iconName: "sparkles",
    url: "/docs/theme",
  },
  {
    category: "Theming",
    iconName: "magic-wand",
    url: "/docs/theming",
  },
];

export const routes: RouteConfig = [
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
    category: "Navigation",
    routes: [
      {
        label: "CollapsibleList",
        url: "/docs/components/collapsible-list",
      },
    ],
  },
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
    category: "Design placeholders",
    routes: [
      {
        label: "Box",
        url: "/docs/theme/box",
      },
      {
        label: "Ellipsis",
        url: "/docs/theme/ellipsis",
      },
      {
        label: "Separator",
        url: "/docs/theme/separator",
      },
    ],
  },
];
