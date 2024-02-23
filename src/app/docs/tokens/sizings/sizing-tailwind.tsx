"use client";

import { Table } from "@dev-spendesk/grapes";
import { sizingTokens } from "./types";
import { CopyCell } from "@/components/copy-cell/copy-cell";

export function SizingTailwind() {
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
      data={sizingTokens.map((sizingToken) => ({
        tailwind: sizingToken.replace("--sizing", "w"),
        css: `width: var(${sizingToken})`,
      }))}
    />
  );
}
