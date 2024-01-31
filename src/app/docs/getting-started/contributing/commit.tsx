"use client";

import { Table } from "@dev-spendesk/grapes";

const data = [
  {
    message:
      "fix(pencil): stop graphite breaking when too much pressure applied",
    type: "Fix Release",
  },
  {
    message: "feat(pencil): add 'graphiteWidth",
    type: "Feature Release",
  },
  {
    message: (
      <>
        <div>perf(pencil): remove graphiteWidth option</div>
        <div>BREAKING CHANGE: The graphiteWidth option has been removed</div>
      </>
    ),
    type: "Breaking Release",
  },
];

export function CommitMessages() {
  return (
    <Table
      columns={[
        {
          header: "Commit message",
          id: "message",
          width: "70%",
          renderCell: ({ message }) => message,
        },
        {
          header: "Release type",
          id: "type",
          renderCell: ({ type }) => type,
        },
      ]}
      data={data}
    />
  );
}
