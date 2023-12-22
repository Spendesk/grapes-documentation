"use client";

import { Table } from "@dev-spendesk/grapes";
import { spacingTokens } from "./types";

export function SpacingTailwind() {
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
      data={spacingTokens.map((spacingToken) => ({
        tailwind: spacingToken.replace("--spacing", "m"),
        css: `margin: var(${spacingToken})`,
      }))}
    />
  );
}
