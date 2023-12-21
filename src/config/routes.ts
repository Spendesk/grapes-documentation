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
    category: "Design Tokens",
    iconName: "sparkles",
    url: "/docs/design-tokens",
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
    category: "Feedback",
    routes: [
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
