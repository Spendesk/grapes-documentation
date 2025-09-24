type HeaderRoute = {
  id: "guide" | "theme" | "components";
  category: string;
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
    id: "guide",
    category: "Guide",
    url: "/docs/guide",
  },
  {
    id: "theme",
    category: "Tokens",
    url: "/docs/tokens",
  },
  {
    id: "components",
    category: "Components",
    url: "/docs/components",
  },
];

export const gettingStartedRoutes: RouteConfig[] = [
  {
    category: "Getting Started",
    routes: [
      {
        label: "Installation",
        url: "/docs/guide",
      },
      {
        label: "GrapesProvider",
        url: "/docs/guide/grapes-provider",
      },
      {
        label: "Theming",
        url: "/docs/guide/theming",
      },
      {
        label: "Supported Platforms",
        url: "/docs/guide/supported-platforms",
      },
      {
        label: "Philisophy",
        url: "/docs/guide/philosophy",
      },
    ],
  },
  {
    category: "Migration",
    routes: [
      {
        label: "Codemods",
        url: "/docs/guide/codemods",
      },
      {
        label: "Migrate to v1",
        url: "/docs/guide/migrate-v1",
      },
    ],
  },
];

export const componentRoutes: RouteConfig[] = [
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
        label: "FloatingActionBar",
        url: "/docs/components/floating-action-bar",
      },
      {
        label: "Link",
        url: "/docs/components/link",
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
  {
    category: "Form",
    routes: [
      {
        label: "AmountInput",
        url: "/docs/components/amount-input",
      },
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
        label: "CheckboxBox",
        url: "/docs/components/checkbox-box",
      },
      {
        label: "CheckboxField",
        url: "/docs/components/checkbox-field",
      },
      {
        label: "DatePicker",
        url: "/docs/components/date-picker",
      },
      {
        label: "FormField",
        url: "/docs/components/form-field",
      },
      {
        label: "Input",
        url: "/docs/components/input",
      },
      {
        label: "OptionGroup",
        url: "/docs/components/option-group",
      },
      {
        label: "PasswordInput",
        url: "/docs/components/password-input",
      },
      {
        label: "PhoneInput",
        url: "/docs/components/phone-input",
      },
      {
        label: "RadioBox",
        url: "/docs/components/radio-box",
      },
      {
        label: "RadioField",
        url: "/docs/components/radio-field",
      },
      {
        label: "RadioGroup",
        url: "/docs/components/radio-group",
      },
      {
        label: "Select",
        url: "/docs/components/select",
      },
      {
        label: "SwitchField",
        url: "/docs/components/switch-field",
      },
      {
        label: "TextArea",
        url: "/docs/components/text-area",
      },
      {
        label: "TextInput",
        url: "/docs/components/text-input",
      },
      {
        label: "Upload",
        url: "/docs/components/upload",
      },
      {
        label: "UploadButton",
        url: "/docs/components/upload-button",
      },
    ],
  },
  {
    category: "Feedback",
    routes: [
      {
        label: "Badge",
        url: "/docs/components/badge",
      },
      {
        label: "Banner",
        url: "/docs/components/banner",
      },
      {
        label: "Callout",
        url: "/docs/components/callout",
      },
      {
        label: "EmptyState",
        url: "/docs/components/empty-state",
      },
      {
        label: "Modal",
        url: "/docs/components/modal",
      },
      {
        label: "ModalSlideshow",
        url: "/docs/components/modal-slideshow",
      },
      {
        label: "DeprecatedModalSlideshow",
        url: "/docs/components/deprecated-modal-slideshow",
      },
      {
        label: "PageModal",
        url: "/docs/components/page-modal",
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
        label: "Accordion",
        url: "/docs/components/accordion",
      },
      {
        label: "Avatar",
        url: "/docs/components/avatar",
      },
      {
        label: "Box",
        url: "/docs/components/box",
      },
      {
        label: "Calendar",
        url: "/docs/components/calendar",
      },
      {
        label: "CalendarRange",
        url: "/docs/components/calendar-range",
      },
      {
        label: "CollapsibleList",
        url: "/docs/components/collapsible-list",
      },
      {
        label: "FileCard",
        url: "/docs/components/file-card",
      },
      {
        label: "InfoTip",
        url: "/docs/components/info-tip",
      },
      {
        label: "ListBox",
        url: "/docs/components/list-box",
      },
      {
        label: "ListView",
        url: "/docs/components/list-view",
      },
      {
        label: "Panel",
        url: "/docs/components/panel",
      },
      {
        label: "SidePanel",
        url: "/docs/components/side-panel",
      },
      {
        label: "DeprecatedPreview",
        url: "/docs/components/deprecated-preview",
      },
      {
        label: "Table",
        url: "/docs/components/table",
      },
      {
        label: "Timeline",
        url: "/docs/components/timeline",
      },
      {
        label: "useDateFormatter",
        url: "/docs/components/use-date-formatter",
      },
    ],
  },
  {
    category: "Navigation",
    routes: [
      {
        label: "DropdownItem",
        url: "/docs/components/dropdown-item",
      },
      {
        label: "DropdownMenu",
        url: "/docs/components/dropdown-menu",
      },
      {
        label: "Navigation",
        url: "/docs/components/navigation",
      },
      {
        label: "NavigationItem",
        url: "/docs/components/navigation-item",
      },
      {
        label: "Popover",
        url: "/docs/components/popover",
      },
      {
        label: "Tabs",
        url: "/docs/components/tabs",
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
        label: "Units",
        url: "/docs/tokens/units",
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
  guide: gettingStartedRoutes,
  components: componentRoutes,
  theme: designTokensRoutes,
};
