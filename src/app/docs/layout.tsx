"use client";

import {
  GrapesProvider,
  GridContainer,
  GridItem,
  Icon,
  Navigation,
  colors,
} from "@dev-spendesk/grapes";
import React, { ReactNode } from "react";

import { Search } from "@/components/search/search";
import { SideBar } from "@/components/sidebar/sidebar";
import { TableOfContents } from "@/components/table-of-contents/table-of-contents";

import "highlight.js/styles/stackoverflow-dark.min.css";

type Props = {
  children: ReactNode;
  metadata: {
    title: string;
    props?: string | string[];
  };
};

export default function Layout({ children, metadata }: Props) {
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
            <SideBar />
          </GridItem>
          <GridItem
            columnSpan={8}
            className="h-[calc(100vh-68px)] overflow-y-auto py-l px-m"
          >
            {children}
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
