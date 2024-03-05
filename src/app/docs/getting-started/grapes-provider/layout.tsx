"use client";

import { useQueryParamsTab } from "@/components/useQueryParamsTab/useQueryParamsTab";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";
import { Suspense } from "react";

const TABS = ["usage", "props"];
function Container(props: {
  children: React.ReactNode;
  props: React.ReactNode;
  usage: React.ReactNode;
}) {
  const [defaultTabIndex, setQueryParams] = useQueryParamsTab(TABS, "usage");

  return (
    <>
      {props.children}
      <Tabs onChange={setQueryParams} defaultTabIndex={defaultTabIndex}>
        <TabList className="docs-tabs">
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

export default function Layout(props: {
  children: React.ReactNode;
  props: React.ReactNode;
  usage: React.ReactNode;
}) {
  return (
    <Suspense>
      <Container {...props} />
    </Suspense>
  );
}
