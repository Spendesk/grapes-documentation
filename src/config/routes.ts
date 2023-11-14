export type Route = {
  category: "Interaction" | "Design Tokens";
  routes: { label: string; url: string }[];
};

export const routes: Route[] = [
  {
    category: "Interaction",
    routes: [
      {
        label: "Button",
        url: "/docs/button",
      },
      {
        label: "IconButton",
        url: "/docs/icon-button",
      },
      {
        label: "Link",
        url: "/docs/link",
      },
    ],
  },
  {
    category: "Design Tokens",
    routes: [
      {
        label: "Colors",
        url: "/docs/colors",
      },
      {
        label: "Spacings",
        url: "/docs/spacings",
      },
    ],
  },
];
