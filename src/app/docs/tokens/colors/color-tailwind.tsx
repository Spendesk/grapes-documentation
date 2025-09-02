"use client";

import { Table, colors } from "@dev-spendesk/grapes";
import { CopyCell } from "@/lib/copy-cell/copy-cell";

function getTailwindClassName(color: string): string {
  if (color.startsWith("var(--color-background")) {
    return color.replace("var(--color-background", "bg").replace(")", "");
  }
  if (color.startsWith("var(--color-content")) {
    return color.replace("var(--color-content", "text").replace(")", "");
  }
  return color.replace("var(--color-border", "border").replace(")", "");
}

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
          renderCell: ({ css }) => <CopyCell content={css} />,
        },
      ]}
      rowHeight="compact"
      data={Object.values(colors)
        .filter((color) => color !== colors.backgroundBackdrop)
        .map((color) => ({
          tailwind: getTailwindClassName(color),
          css: color,
        }))}
    />
  );
}
