"use client";

import { Table, colors } from "@dev-spendesk/grapes";

export function ColorTailwind() {
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
          renderCell: ({ css }) => <div style={{ color: css }}>Aa</div>,
        },
      ]}
      rowHeight="compact"
      data={Object.values(colors).map((color) => ({
        tailwind: color.replace("var(--color", "text").replace(")", ""),
        css: color,
      }))}
    />
  );
}
