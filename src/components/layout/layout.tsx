"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@dev-spendesk/grapes";
import React, { ReactNode, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { PropsTable } from "../props-table/props-table";

type Props = {
  children: ReactNode;
  metadata: {
    title: string;
    props?: string | string[];
  };
};

const tabs = ["usage", "props"];

export function MdxLayout({ children, metadata }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") ?? "usage";
  const defaultTabIndex = tabs.indexOf(tab);

  const callback = useCallback(
    (index: number) => {
      router.push(`${pathname}?tab=${tabs[index]}`);
    },
    [pathname, router]
  );

  return (
    <>
      <h1>{metadata.title}</h1>
      <Tabs onChange={callback} defaultTabIndex={defaultTabIndex}>
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
    </>
  );
}
