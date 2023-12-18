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
        label: "Colors",
        url: "/docs/theme/colors",
      },
      {
        label: "Spacings",
        url: "/docs/theme/spacings",
      },
    ],
  },
];
