"use client";

import {
  GrapesProvider,
  GridContainer,
  GridItem,
  Icon,
  Navigation,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  colors,
} from "@dev-spendesk/grapes";
import React, { ReactNode } from "react";

import { PropsTable } from "../props-table/props-table";
import { Search } from "@/components/search/search";
import { SideBar } from "@/components/sidebar/sidebar";
import { TableOfContents } from "@/components/table-of-contents/table-of-contents";
import { routes } from "@/config/routes";

import "highlight.js/styles/stackoverflow-dark.min.css";
import { PageHeader } from "../page-header/page-header";

type Props = {
  children: ReactNode;
  metadata: {
    title: string;
    props?: string | string[];
  };
};

export function MdxLayout({ children, metadata }: Props) {
  return (
    <GrapesProvider
      locale="en-US"
      localesDefinition={{
        locales: {
          "en-US": {
            cancel: "Cancel",
            close: "Close",
            nextMonth: "Next month",
            previousMonth: "Previous month",
            openCalendar: "Open calendar",
            hide: "Hide",
            show: "Show",
          },
        },
      }}
    >
      <Navigation
        leftNavigationItems={[
          <div
            key="grapes"
            className="text-white title-l flex gap-xs items-center"
          >
            <Icon color={colors.white} size="l" name="spendesk" />
            <div>Grapes</div>
          </div>,
        ]}
        rightNavigationItems={[<Search key="search" />]}
      />
      <div className="max-w-[1400px] mx-auto">
        <GridContainer className="justify-between">
          <GridItem
            columnSpan={2}
            className="h-[calc(100vh-68px)] overflow-y-auto"
          >
            <SideBar routes={routes} />
          </GridItem>
          <GridItem
            columnSpan={8}
            className="h-[calc(100vh-68px)] overflow-y-auto py-l px-m"
          >
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
                      <PropsTable props={metadata.props} />
                    </TabPanel>
                  )}
                </TabPanels>
              </Tabs>
            </main>
          </GridItem>
          <GridItem
            columnSpan={2}
            className="h-[calc(100vh-68px)] overflow-y-auto"
          >
            <TableOfContents />
          </GridItem>
        </GridContainer>
      </div>
    </GrapesProvider>
  );
}
