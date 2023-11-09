"use client";

import { Table } from "@dev-spendesk/grapes";
import { useEffect, useState } from "react";

type PropsDoc = {
  name: string;
  description: string;
  defaultValue: string | null;
};

type Props = {
  name: string;
};

export function PropsTable({ name }: Props) {
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
  }, []);
  return (
    <>
      <div>{name}</div>
      <Table
        columns={[
          {
            header: "name",
            id: "Name",
            width: "30%",
            renderCell: ({ name }) => name,
          },
          {
            header: "defaultValue",
            id: "Default value",
            width: "20%",
            renderCell: ({ defaultValue }) => defaultValue ?? "",
          },
          {
            header: "description",
            id: "Description",
            width: "50%",
            renderCell: ({ description }) => description,
          },
        ]}
        data={props}
      />
    </>
  );
}
