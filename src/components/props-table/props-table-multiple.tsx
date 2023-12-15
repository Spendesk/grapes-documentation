"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";

import { PropsTableComponent } from "./props-table-component";
import { sortProps } from "./utils";

import allProps from "../../../json/props.json";
import styles from "./props-table-multiple.module.css";

type Props = {
  names: string[];
};

export function PropsTableMultiple({ names }: Props) {
  const components = allProps.props.filter((d) =>
    names.includes(d.displayName)
  );
  if (!components) {
    return null;
  }
  const props = components.map((component) =>
    sortProps(Object.values(component.props))
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
            <PropsTableComponent className={styles.table} props={prop} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
