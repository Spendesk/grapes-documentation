"use client";

import { Table, Tag } from "@dev-spendesk/grapes";
import { classNames } from "@/utils/classNames";

import { getSortedProps } from "./utils";

import styles from "./props-table.module.css";
import { Fragment } from "react";

type Props = {
  components: string[];
};

export function PropsTable({ components }: Props) {
  return (
    <div className="mt-s">
      {components.map((component, index) => (
        <Fragment key={index}>
          {components.length > 1 && <h2 id={component}>{component}</h2>}
          <Table
            className={classNames(
              styles.table,
              components.length > 0 && "mt-m"
            )}
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
            data={getSortedProps(component)}
          />
        </Fragment>
      ))}
    </div>
  );
}
