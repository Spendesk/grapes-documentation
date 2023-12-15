"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";
import React, { ReactNode } from "react";

import { PropsTable } from "../props-table/props-table";
import { PageHeader } from "../page-header/page-header";

import "highlight.js/styles/stackoverflow-dark.min.css";

type Props = {
  children: ReactNode;
  metadata: {
    title: string;
    props?: string | string[];
  };
};

export function MdxLayout({ children, metadata }: Props) {
  return (
    <main>
      <PageHeader title={metadata.title} />
      <Tabs>
        <TabList>
          <Tab>Usage</Tab>
          {metadata.props && <Tab>Props</Tab>}
        </TabList>
        <TabPanels>
          <TabPanel>{children}</TabPanel>
          {metadata.props && (
            <TabPanel>
              <PropsTable component={metadata.props} />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </main>
  );
}
