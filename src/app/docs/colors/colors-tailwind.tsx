"use client";

import { Table, colors } from "@dev-spendesk/grapes";

export function ColorsTailwind() {
  return (
    <Table
      columns={[
        {
          header: "TailwindCSS className",
          id: "column1",
          renderCell: ({ column1 }) =>
            column1.replace("var(--color", "text").replace(")", ""),
        },
        {
          header: "Result",
          id: "column2",
          align: "right",
          renderCell: ({ column2 }) => <div style={{ color: column2 }}>Aa</div>,
        },
      ]}
      rowHeight="compact"
      data={Object.values(colors).map((color) => ({
        column1: color,
        column2: color,
      }))}
    />
  );
}
