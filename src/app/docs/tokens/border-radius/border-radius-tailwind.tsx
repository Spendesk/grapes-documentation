"use client";

import { Table } from "@dev-spendesk/grapes";
import { borderRadiusTokens } from "./types";
import { CopyCell } from "@/lib/copy-cell/copy-cell";

export function BorderRadiusTailwind() {
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
      data={borderRadiusTokens.map((token) => ({
        tailwind: token.replace("--border-radius", "rounded"),
        css: `border-radius: var(${token})`,
      }))}
    />
  );
}
