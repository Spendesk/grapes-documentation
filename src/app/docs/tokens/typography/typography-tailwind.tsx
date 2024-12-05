"use client";

import { Table } from "@dev-spendesk/grapes";
import { bodyTokens, titleTokens, headingTokens } from "./types";
import { CopyCell } from "@/lib/copy-cell/copy-cell";

export function TypographyTailwind() {
  return (
    <Table
      columns={[
        {
          header: "TailwindCSS className",
          id: "tailwind",
          renderCell: ({ tailwind }) => <CopyCell content={tailwind} />,
        },
      ]}
      rowHeight="compact"
      data={[...headingTokens, ...titleTokens, ...bodyTokens].map((token) => ({
        tailwind: token,
      }))}
    />
  );
}
