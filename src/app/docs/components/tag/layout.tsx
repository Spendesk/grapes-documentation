"use client";

import { useQueryParamsTab } from "@/lib/useQueryParamsTab/useQueryParamsTab";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";

export default function Layout(props: {
  children: React.ReactNode;
  props: React.ReactNode;
  usage: React.ReactNode;
}) {
  const [defaultTabIndex, setQueryParams] = useQueryParamsTab(
    ["usage", "props"],
    "usage"
  );

  return (
    <>
      {props.children}
      <Tabs onChange={setQueryParams} defaultTabIndex={defaultTabIndex}>
        <TabList>
          <Tab>Usage</Tab>
          <Tab>Props</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{props.usage}</TabPanel>
          <TabPanel>{props.props}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
