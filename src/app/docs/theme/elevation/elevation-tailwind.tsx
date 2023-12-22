"use client";

import { Table } from "@dev-spendesk/grapes";
import { elevationTokens } from "./types";

export function ElevationTailwind() {
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
      data={elevationTokens.map((elevationToken) => ({
        tailwind: elevationToken.replace("--elevation", "elevation"),
        css: `box-shadow: var(${elevationToken})`,
      }))}
    />
  );
}
