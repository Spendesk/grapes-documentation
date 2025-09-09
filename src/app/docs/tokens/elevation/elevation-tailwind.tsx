"use client";

import { Table } from "@dev-spendesk/grapes";
import { CopyCell } from "@/lib/copy-cell/copy-cell";
import { elevationTokens } from "./types";

export function ElevationTailwind() {
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
      data={elevationTokens.map((elevationToken) => ({
        tailwind: elevationToken.replace("--grapes-elevation", "elevation"),
        css: `box-shadow: var(${elevationToken})`,
      }))}
    />
  );
}
