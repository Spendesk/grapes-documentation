"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  DATE_FORMAT,
  HighlightIcon,
  IconName,
  Table,
  TableColumn,
  useDateFormatter,
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
  withFooter?: boolean;
  withRowVariant?: boolean;
  withCellVariant?: boolean;
  withDisabledRows?: boolean;
  withMaxHeight?: boolean;
};

export function DemoTableMini() {
  return (
    <Table.Mini
      columns={[
        {
          id: "label",
          renderCell: (cell) => cell.label,
        },
        {
          id: "value",
          renderCell: (cell) => cell.value,
        },
      ]}
      data={[
        {
          id: 0,
          label: "Address",
          value: "51 rue de Londres",
        },
        {
          id: 1,
          label: "Postal code",
          value: "75008",
        },
        {
          id: 2,
          label: "City",
          value: "Paris",
        },
      ]}
      getRowId={(row) => String(row.id)}
    />
  );
}

export function DemoTable({
  isTableEmpty,
  isCompact,
  isSortable,
  isSelectable,
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
    | "getRowVariant"
    | "getIsRowDisabled"
    | "maxHeight"
    | "selectedRowIds"
    | "onRowSelectionChange"
    | "onAllRowsSelectionChange"
  > = {
    ...(isCompact && { rowHeight: "compact" }),
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

export function DemoGroupedTable() {
  const nf = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });
  const dateFormatter = useDateFormatter();

  return (
    <Table
      columns={[
        {
          id: "date",
          renderCell: (cell) =>
            dateFormatter(new Date(cell.date), DATE_FORMAT.MEDIUM),
          header: "Date",
        },
        {
          id: "description",
          renderCell: (cell) => cell.description,
          header: "Description",
        },
        {
          id: "amount",
          renderCell: (cell) => nf.format(cell.amount),
          header: "Amount",
        },
      ]}
      data={[
        {
          id: 0,
          avatar: "/jean.webp",
          description: "Supplies for workshop",
          amount: 50.5,
          employeeName: "Lewis Barker",
          employeeId: 1,
          date: "2025-01-15",
        },
        {
          id: 1,
          avatar: "/jean.webp",
          description: "Team lunch for 11 persons",
          amount: 150.51,
          employeeName: "Lewis Barker",
          date: "2024-12-15",
          employeeId: 1,
        },
        {
          id: 2,
          avatar: "/laurent.webp",
          description: "Laptop charger",
          amount: 90.5,
          employeeName: "Nicolas Harvey",
          employeeId: 2,
          date: "2024-01-03",
        },
      ]}
      getRowId={(row) => String(row.id)}
      groupBy={(row) => `${row.employeeId}`}
      renderGroupedRowHeader={(_, aggregatedRows) => {
        const { avatar, employeeName } = aggregatedRows[0];
        const sum = aggregatedRows.reduce((acc, row) => acc + row.amount, 0);
        return (
          <div className="flex items-center gap-8 py-8">
            <Avatar src={avatar} text={employeeName} />
            <p className="grow body-m text-primary">{employeeName}</p>
            <p>{`${aggregatedRows.length} requests`}</p>
            <Button
              variant="secondaryNeutral"
              text={`Approve ${nf.format(sum)}`}
            />
          </div>
        );
      }}
    />
  );
}
