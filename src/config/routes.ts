export type Route = {
  category: "Interaction";
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
];
