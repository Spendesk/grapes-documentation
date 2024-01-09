"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";
import allProps from "../../../props.json";
import { PropsTableComponent } from "./props-table-component";
import { sortProps } from "./utils";

import styles from "./props-table.module.css";

type Props = {
  component: string | string[];
};

export function PropsTable({ component }: Props) {
  const filteredProps = allProps.props.filter((d) =>
    typeof component === "string"
      ? component === d.displayName
      : component.includes(d.displayName)
  );
  if (!filteredProps) {
    return null;
  }
  const sortedProps = filteredProps.map(({ props }) =>
    sortProps(Object.values(props))
  );
  if (sortedProps.length === 0) {
    return null;
  }

  return (
    <div className="mt-s">
      {typeof component === "string" ? (
        <PropsTableComponent props={sortedProps[0]} />
      ) : (
        <Tabs>
          <TabList className={styles.tabList}>
            {component.map((name) => (
              <Tab key={name}>{name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {sortedProps.map((props, index) => (
              <TabPanel key={index}>
                <PropsTableComponent className={styles.table} props={props} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </div>
  );
}
