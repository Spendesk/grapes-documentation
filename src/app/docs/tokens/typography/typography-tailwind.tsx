"use client";

import { Table } from "@dev-spendesk/grapes";
import { bodyTokens, titleTokens } from "./types";
import { CopyCell } from "@/components/copy-cell/copy-cell";

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
      data={titleTokens.concat(bodyTokens).map((token) => ({
        tailwind: token,
      }))}
    />
  );
}
