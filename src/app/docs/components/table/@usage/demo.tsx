"use client";

import { useState } from "react";
import {
  Button,
  Table,
  TableColumn,
  type TableProps,
} from "@dev-spendesk/grapes";

type DataRow = {
  id: number;
  accountPayable: string;
  supplierName: string;
  amount: string;
};

const initialData: DataRow[] = [
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

const additionalData: DataRow[] = [
  {
    id: 4,
    accountPayable: "401MONOP",
    supplierName: "Monoprix",
    amount: "15€",
  },
  {
    id: 5,
    accountPayable: "401SLACK",
    supplierName: "Slack",
    amount: "310€",
  },
  {
    id: 6,
    accountPayable: "401AMAZON",
    supplierName: "Amazon",
    amount: "200€",
  },
  {
    id: 7,
    accountPayable: "40115FIVE",
    supplierName: "15Five",
    amount: "155€",
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

const getCellVariant = ({ supplierName }: DataRow) =>
  supplierName === "Mailchimp" ? "alert" : undefined;

const columnsWithCellVariant: TableColumn<DataRow>[] = [
  {
    id: "accountPayable",
    header: "Account payable",
    renderCell: ({ accountPayable }) => accountPayable,
    getCellVariant: ({ accountPayable }) =>
      accountPayable === "401AIRBNB" ? "success" : undefined,
  },
  {
    id: "supplierName",
    header: "Supplier name",
    renderCell: (row) => {
      const { supplierName } = row;
      return (
        <>
          <span className="inline-block mr-8">
            {getCellVariant(row) === "alert" ? "❌" : "👌"}
          </span>
          {supplierName}
        </>
      );
    },
    getCellVariant,
  },
  {
    id: "amount",
    header: "Amount",
    align: "right",
    width: "20%",
    renderCell({ amount }) {
      return <span className="font-medium">{amount}</span>;
    },
  },
];

const columnsWithSort: TableColumn<DataRow>[] = [
  {
    id: "accountPayable",
    header: "Account payable",
    renderCell: ({ accountPayable }) => accountPayable,
    getSortValue: (item) => item.accountPayable,
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
    getSortValue: (item) => parseInt(item.amount),
  },
];

type Props = {
  isTableEmpty?: boolean;
  isCompact?: boolean;
  isSortable?: boolean;
  isSelectable?: boolean;
  withColumnSeparator?: boolean;
  withFooter?: boolean;
  withRowVariant?: boolean;
  withCellVariant?: boolean;
  withDisabledRows?: boolean;
  withMaxHeight?: boolean;
};

export function DemoTable({
  isTableEmpty,
  isCompact,
  isSortable,
  isSelectable,
  withColumnSeparator,
  withFooter,
  withRowVariant,
  withCellVariant,
  withDisabledRows,
  withMaxHeight,
}: Props) {
  const [data, setData] = useState(!isTableEmpty ? initialData : []);
  const [activeRow, setActiveRow] = useState<number>();
  const [selectedRowIds, setSelectedRowsIds] = useState<string[]>([]);

  const optionalProps: Pick<
    TableProps<DataRow>,
    | "rowHeight"
    | "hasColumnSeparator"
    | "getRowVariant"
    | "getIsRowDisabled"
    | "maxHeight"
    | "selectedRowIds"
    | "onRowSelectionChange"
    | "onAllRowsSelectionChange"
  > = {
    ...(isCompact && { rowHeight: "compact" }),
    ...(withColumnSeparator && { hasColumnSeparator: true }),
    ...(withFooter &&
      data.length < initialData.length + additionalData.length && {
        footer: (
          <Button
            variant="secondaryNeutral"
            text="Load more"
            onClick={() => {
              setData([...data, ...additionalData]);
            }}
          />
        ),
      }),
    ...(withDisabledRows && {
      getIsRowDisabled: (row: DataRow) => row.id === 0 || row.id === 2,
    }),
    ...(withMaxHeight && { maxHeight: 160 }),
    ...(isSelectable && {
      selectedRowIds,
      onRowSelectionChange: (_, id, checked) => {
        setSelectedRowsIds((options) => {
          if (checked) {
            return options.concat(id);
          }
          return options.filter((optionId) => optionId !== id);
        });
      },
      onAllRowsSelectionChange: (_, ids, checked) => {
        setSelectedRowsIds(checked ? ids : []);
      },
    }),
    ...(isSortable && { columns: columnsWithSort }),
    ...(withCellVariant && { columns: columnsWithCellVariant }),
    ...(withRowVariant && {
      getRowVariant: ({ supplierName }) => {
        if (supplierName === "Airbnb") return "warning";
        if (supplierName === "Mailchimp") return "info";
        return undefined;
      },
    }),
  };

  return (
    // @ts-ignore
    <Table
      data={data}
      columns={columns}
      getRowId={(row: DataRow) => String(row.id)}
      onRowClick={(row) => setActiveRow(row.id)}
      getIsRowActive={(row) => row.id === activeRow}
      emptyState={{
        title: "There are no payables in this example",
        subtitle: "Try looking in another example",
      }}
      {...optionalProps}
    />
  );
}
