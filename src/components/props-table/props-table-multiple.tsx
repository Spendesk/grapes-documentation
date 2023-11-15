"use client";

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
} from "@dev-spendesk/grapes";
import { useEffect, useState } from "react";

import styles from "./props-table-multiple.module.css";

type PropsDoc = {
  name: string;
  description: string;
  defaultValue: { value: string | boolean } | null;
};

type Props = {
  names: string[];
};

export function PropsTableMultiple({ names }: Props) {
  const [props, setProps] = useState<PropsDoc[][]>([]);

  useEffect(() => {
    fetch("/api/props")
      .then((res) => res.json())
      .then((data) => {
        const components = data.filter((d: any) =>
          names.includes(d.displayName)
        );
        if (!components) {
          return;
        }
        console.log(components);
        setProps(
          components.map(
            (component: { props: any[] }) =>
              Object.values(component.props) as PropsDoc[]
          )
        );
      });
  }, [names]);

  return (
    <Tabs>
      <TabList className={styles.tabList}>
        {names.map((name) => (
          <Tab key={name}>{name}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {props.map((prop, index) => (
          <TabPanel key={index}>
            <Table
              className={styles.table}
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
                  renderCell: ({ defaultValue }) =>
                    defaultValue ? `${defaultValue.value}` : "",
                },
                {
                  header: "description",
                  id: "Description",
                  width: "50%",
                  renderCell: ({ description }) => description,
                },
              ]}
              data={prop}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
