import { Table, Tag } from "@dev-spendesk/grapes";

import { classNames } from "@/utils/classNames";

import styles from "./props-table-component.module.css";

type PropsDoc = {
  name: string;
  description: string;
  required: boolean;
  defaultValue: { value: string | boolean } | null;
  type: { name: string };
};

type Props = {
  props: PropsDoc[];
  className?: string;
};

export function PropsTableComponent({ className, props }: Props) {
  return (
    <Table
      className={classNames(styles.table, className)}
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
