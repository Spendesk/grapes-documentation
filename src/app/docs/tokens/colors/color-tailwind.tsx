"use client";

import { Table, colors } from "@dev-spendesk/grapes";
import { CopyCell } from "@/components/copy-cell/copy-cell";

export function ColorTailwind() {
  return (
    <Table
      columns={[
        {
          header: "TailwindCSS className",
          id: "tailwind",
          renderCell: ({ tailwind }) => <CopyCell content={tailwind} />,
        },
        {
          header: "CSS equivalent",
          id: "css",
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
