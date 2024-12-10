"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoControlledTabs() {
  const [value, setValue] = useState(2);

  return (
    <>
      <input
        className="appearance-auto"
        type="range"
        min="0"
        max="2"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Tabs tabIndex={value} onChange={setValue}>
        <TabList>
          <Tab>Tab One</Tab>
          <Tab>Tab Two</Tab>
          <Tab>Tab Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>First panel</TabPanel>
          <TabPanel>Second panel</TabPanel>
          <TabPanel>Third panel</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
