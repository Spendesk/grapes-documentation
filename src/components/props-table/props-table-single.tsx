"use client";

import { Table } from "@dev-spendesk/grapes";
import { useEffect, useState } from "react";

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
  const [props, setProps] = useState<PropsDoc[]>([]);

  useEffect(() => {
    fetch("/api/props")
      .then((res) => res.json())
      .then((data) => {
        const component = data.find((d: any) => d.displayName === name);
        if (!component) {
          return;
        }
        setProps(Object.values(component.props) as PropsDoc[]);
      });
  }, [name]);

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
