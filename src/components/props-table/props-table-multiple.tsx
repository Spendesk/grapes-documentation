"use client";

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
} from "@dev-spendesk/grapes";

import * as allProps from "../../../json/props.json";

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
  const components = allProps.filter((d) => names.includes(d.displayName));
  if (!components) {
    return;
  }
  const props = components.map(
    (component) => Object.values(component.props) as PropsDoc[]
  );

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
