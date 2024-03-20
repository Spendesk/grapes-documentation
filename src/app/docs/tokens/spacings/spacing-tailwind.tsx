"use client";

import { Table } from "@dev-spendesk/grapes";
import { spacingTokens } from "./types";
import { CopyCell } from "@/lib/copy-cell/copy-cell";

export function SpacingTailwind() {
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
      data={spacingTokens.map((spacingToken) => ({
        tailwind: spacingToken.replace("--spacing", "m"),
        css: `margin: var(${spacingToken})`,
      }))}
    />
  );
}
