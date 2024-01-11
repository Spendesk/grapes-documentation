"use client";

import { Table } from "@dev-spendesk/grapes";

const data = [
  {
    browser: "Edge",
    version: ">= 99",
  },
  {
    browser: "Chrome",
    version: ">= 99",
  },
  {
    browser: "Safari (macOS)",
    version: ">= 16.5",
  },
  {
    browser: "Firefox",
    version: ">= 97",
  },
];

export function SupportedBrowsers() {
  return (
    <Table
      rowHeight="compact"
      columns={[
        {
          header: "Browser",
          id: "browser",
          renderCell: ({ browser }) => browser,
        },
        {
          header: "Version",
          id: "version",
          renderCell: ({ version }) => version,
        },
      ]}
      data={data}
    />
  );
}
