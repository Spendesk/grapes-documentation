"use client";

import { Table } from "@dev-spendesk/grapes";
import { borderRadiusTokens } from "./types";

export function BorderRadiusTailwind() {
  return (
    <Table
      columns={[
        {
          header: "TailwindCSS className",
          id: "tailwind",
          renderCell: ({ tailwind }) => tailwind,
        },
        {
          header: "CSS equivalent",
          id: "css",
          align: "right",
          renderCell: ({ css }) => css,
        },
      ]}
      rowHeight="compact"
      data={borderRadiusTokens.map((token) => ({
        tailwind: token.replace("--border-radius", "rounded"),
        css: `border-radius: var(${token})`,
      }))}
    />
  );
}
