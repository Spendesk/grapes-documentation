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
    url: "/docs/tokens",
  },
  {
    id: "components",
    category: "Components",
    iconName: "dashboard",
    url: "/docs/components",
  },
];

export const componentRoutes: RouteConfig[] = [
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
    category: "Form",
    routes: [
      {
        label: "Autocomplete",
        url: "/docs/components/autocomplete",
      },
      {
        label: "AutocompleteMultiple",
        url: "/docs/components/autocomplete-multiple",
      },
      {
        label: "AutocompletePlace",
        url: "/docs/components/autocomplete-place",
      },
      {
        label: "FormField",
        url: "/docs/components/form-field",
      },
      {
        label: "CheckboxField",
        url: "/docs/components/checkbox-field",
      },
      {
        label: "DatePicker",
        url: "/docs/components/date-picker",
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
        label: "Skeleton",
        url: "/docs/components/skeleton",
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
    category: "Data display",
    routes: [
      {
        label: "Avatar",
        url: "/docs/components/avatar",
      },
      {
        label: "Calendar",
        url: "/docs/components/calendar",
      },
      {
        label: "CollapsibleList",
        url: "/docs/components/collapsible-list",
      },
      {
        label: "InfoTip",
        url: "/docs/components/info-tip",
      },
      {
        label: "Timeline",
        url: "/docs/components/timeline",
      },
    ],
  },
  {
    category: "Icons",
    routes: [
      {
        label: "Icon",
        url: "/docs/components/icon",
      },
      {
        label: "HighlightIcon",
        url: "/docs/components/highlight-icon",
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
        url: "/docs/tokens/animations",
      },
      {
        label: "Border radius",
        url: "/docs/tokens/border-radius",
      },
      {
        label: "Colors",
        url: "/docs/tokens/colors",
      },
      {
        label: "Elevation",
        url: "/docs/tokens/elevation",
      },
      {
        label: "Sizings",
        url: "/docs/tokens/sizings",
      },
      {
        label: "Spacings",
        url: "/docs/tokens/spacings",
      },
      {
        label: "Typography",
        url: "/docs/tokens/typography",
      },
    ],
  },
  {
    category: "TailwindCSS utils",
    routes: [
      {
        label: "Box",
        url: "/docs/tokens/box",
      },
      {
        label: "Separator",
        url: "/docs/tokens/separator",
      },
    ],
  },
];

export const routes = {
  components: componentRoutes,
  theme: designTokensRoutes,
};
