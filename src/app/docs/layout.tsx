"use client";

import { SideBar } from "@/components/sidebar/sidebar";
import { TableOfContents } from "@/components/table-of-contents/table-of-contents";
import { routes } from "@/config/routes";
import { GridContainer, GridItem, Navigation } from "@dev-spendesk/grapes";
import React from "react";

import "highlight.js/styles/stackoverflow-dark.min.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation
        leftNavigationItems={[
          <div key="grapes" className="text-white">
            Grapes
          </div>,
        ]}
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
            <main>{children}</main>
          </GridItem>
          <GridItem
            columnSpan={2}
            className="h-[calc(100vh-68px)] overflow-y-auto"
          >
            <TableOfContents />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
