"use client";

import { Table } from "@dev-spendesk/grapes";
import allProps from "../../../json/props.json";

import styles from "./props-table-single.module.css";

type PropsDoc = {
  name: string;
  description: string;
  defaultValue: { value: string | boolean } | null;
};

type Props = {
  name: string;
};

export function PropsTableSingle({ name }: Props) {
  const component = allProps.props.find((d) => d.displayName === name);
  if (!component) {
    return;
  }
  const props = Object.values(component.props) as PropsDoc[];

  return (
    <Table
      className={styles.table}
      columns={[
        {
          header: "Name",
          id: "name",
          width: "30%",
          renderCell: ({ name }) => name,
        },
        {
          header: "Default value",
          id: "defaultValue",
          width: "20%",
          renderCell: ({ defaultValue }) =>
            defaultValue ? `${defaultValue.value}` : "",
        },
        {
          header: "Description",
          id: "description",
          width: "50%",
          renderCell: ({ description }) => description,
        },
      ]}
      data={props}
    />
  );
}
