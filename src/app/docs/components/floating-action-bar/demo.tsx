"use client";

import {
  Callout,
  FloatingActionBar,
  Table,
  TableColumn,
} from "@dev-spendesk/grapes";
import { useState } from "react";

type DataRow = {
  id: number;
  accountPayable: string;
  supplierName: string;
  amount: string;
};

const data: DataRow[] = [
  {
    id: 0,
    accountPayable: "401AIRBNB",
    supplierName: "Airbnb",
    amount: "2€",
  },
  {
    id: 1,
    accountPayable: "401DELOITTE",
    supplierName: "Deloitte",
    amount: "324$",
  },
  {
    id: 2,
    accountPayable: "401MAILCHIMP",
    supplierName: "Mailchimp",
    amount: "13.29€",
  },
  {
    id: 3,
    accountPayable: "401APPLE",
    supplierName: "Apple",
    amount: "0€",
  },
];

const columns: TableColumn<DataRow>[] = [
  {
    id: "accountPayable",
    header: "Account payable",
    renderCell: ({ accountPayable }) => accountPayable,
  },
  {
    id: "supplierName",
    header: "Supplier name",
    renderCell: ({ supplierName }) => supplierName,
  },
  {
    id: "amount",
    header: "Amount",
    align: "right",
    width: "20%",
    renderCell(row) {
      return <span className="font-medium">{row.amount}</span>;
    },
  },
];

export function DemoFloatingActionBar() {
  const [selectedRowIds, setSelectedRowsIds] = useState<string[]>([]);

  return (
    <>
      {selectedRowIds.length > 0 && (
        <FloatingActionBar
          actions={[
            {
              text: "Archive",
              onClick: () => setSelectedRowsIds([]),
              iconName: "archive",
            },
            {
              text: "Download",
              onClick: () => setSelectedRowsIds([]),
              iconName: "arrow-down-tray",
            },
          ]}
        >{`${selectedRowIds.length} selected`}</FloatingActionBar>
      )}
      <Callout title="Select an item to see the FloatingActionBar" />
      <Table
        data={data}
        columns={columns}
        getRowId={(row: DataRow) => String(row.id)}
        selectedRowIds={selectedRowIds}
        onRowSelectionChange={(_, id, checked) => {
          setSelectedRowsIds((options) => {
            if (checked) {
              return options.concat(id);
            }
            return options.filter((optionId) => optionId !== id);
          });
        }}
        onAllRowsSelectionChange={(_, ids, checked) => {
          setSelectedRowsIds(checked ? ids : []);
        }}
      />
    </>
  );
}
