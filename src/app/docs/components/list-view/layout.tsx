"use client";

import { useQueryParamsTab } from "@/lib/useQueryParamsTab/useQueryParamsTab";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";

const TABS = ["usage", "props", "accessibility"];
export default function Layout(props: {
  children: React.ReactNode;
  props: React.ReactNode;
  usage: React.ReactNode;
  accessibility: React.ReactNode;
}) {
  const [defaultTabIndex, setQueryParams] = useQueryParamsTab(TABS, "usage");

  return (
    <>
      {props.children}
      <Tabs onChange={setQueryParams} defaultTabIndex={defaultTabIndex}>
        <TabList className="docs-tabs">
          <Tab>Usage</Tab>
          <Tab>Props</Tab>
          <Tab>Accessbility</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{props.usage}</TabPanel>
          <TabPanel>{props.props}</TabPanel>
          <TabPanel>{props.accessibility}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
