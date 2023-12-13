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
    category: "Components",
    iconName: "dashboard",
    url: "/docs/components",
  },
  {
    category: "Design Tokens",
    iconName: "sparkles",
    url: "/docs/design-tokens",
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
        url: "/docs/design-tokens/colors",
      },
      {
        label: "Spacings",
        url: "/docs/design-tokens/spacings",
      },
    ],
  },
];
