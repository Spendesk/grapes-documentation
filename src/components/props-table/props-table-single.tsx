"use client";

import { Table, Tag } from "@dev-spendesk/grapes";

import allProps from "../../../json/props.json";

import styles from "./props-table-single.module.css";

type PropsDoc = {
  name: string;
  description: string;
  required: boolean;
  defaultValue: { value: string | boolean } | null;
  type: { name: string };
};

type Props = {
  name: string;
};

export function PropsTableSingle({ name }: Props) {
  const component = allProps.props.find((d) => d.displayName === name);
  if (!component) {
    return;
  }
  const props = Object.values(component.props).sort((a, b) => {
    if (a.required && !b.required) {
      return -1;
    }
    if (b.required && !a.required) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  }) as PropsDoc[];

  return (
    <Table
      className={styles.table}
      columns={[
        {
          header: "Name",
          id: "name",
          width: "20%",
          renderCell: ({ name, required }) => (
            <>
              <span>{name}</span>{" "}
              <span className="text-alert font-bold">
                {required ? "*" : ""}
              </span>
            </>
          ),
        },
        {
          header: "Type",
          id: "type",
          width: "20%",
          renderCell: ({ type }) => type.name,
        },
        {
          header: "Description",
          id: "description",
          width: "40%",
          renderCell: ({ defaultValue, description }) => (
            <div className="py-xs">
              <div>{description}</div>
              {defaultValue && (
                <Tag className="mt-xxs" variant="neutral">
                  Default: {`${defaultValue.value}`}
                </Tag>
              )}
            </div>
          ),
        },
      ]}
      data={props}
    />
  );
}
