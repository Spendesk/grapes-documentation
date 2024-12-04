"use client";

import { Table } from "@dev-spendesk/grapes";
import { unitTokens } from "./types";
import { CopyCell } from "@/lib/copy-cell/copy-cell";

export function UnitTailwind() {
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
      data={unitTokens.map((unitToken) => ({
        tailwind: unitToken.replace("--unit", "m"),
        css: `margin: var(${unitToken})`,
      }))}
    />
  );
}
