"use client";

import { Table } from "@dev-spendesk/grapes";
import { sizingTokens } from "./types";

export function SizingTailwind() {
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
      data={sizingTokens.map((sizingToken) => ({
        tailwind: sizingToken.replace("--sizing", "w"),
        css: `width: var(${sizingToken})`,
      }))}
    />
  );
}
