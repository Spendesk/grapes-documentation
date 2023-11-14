"use client";

import { Table } from "@dev-spendesk/grapes";
import { spacingTokens } from "./types";

export function SpacingsTailwind() {
  return (
    <Table
      columns={[
        {
          header: "TailwindCSS className",
          id: "column1",
          renderCell: ({ column1 }) => column1.replace("--spacing", "m"),
        },
        {
          header: "Result",
          id: "column2",
          align: "right",
          renderCell: ({ column2 }) => `margin: var(${column2})`,
        },
      ]}
      rowHeight="compact"
      data={spacingTokens.map((spacingToken) => ({
        column1: spacingToken,
        column2: spacingToken,
      }))}
    />
  );
}
