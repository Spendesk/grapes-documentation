"use client";

import { Table } from "@dev-spendesk/grapes";
import { bodyTokens, titleTokens } from "./types";

export function TypographyTailwind() {
  return (
    <Table
      columns={[
        {
          header: "TailwindCSS className",
          id: "tailwind",
          renderCell: ({ tailwind }) => tailwind,
        },
      ]}
      rowHeight="compact"
      data={titleTokens.concat(bodyTokens).map((token) => ({
        tailwind: token,
      }))}
    />
  );
}
