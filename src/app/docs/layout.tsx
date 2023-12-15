"use client";

import { Icon, Navigation, colors } from "@dev-spendesk/grapes";
import React, { ReactNode } from "react";

import { Search } from "@/components/search/search";
import { SideBar } from "@/components/sidebar/sidebar";
import { TableOfContents } from "@/components/table-of-contents/table-of-contents";
import { classNames } from "@/utils/classNames";

import "highlight.js/styles/stackoverflow-dark.min.css";

import styles from "./layout.module.css";

type Props = {
  children: ReactNode;
  metadata: {
    title: string;
    props?: string | string[];
  };
};

export default function Layout({ children, metadata }: Props) {
  return (
    <>
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
      <div className={styles.layout}>
        <div className={styles.layoutItem}>
          <SideBar />
        </div>
        <div className={classNames(styles.layoutItem, "py-m px-s")}>
          {children}
        </div>
        <div className={styles.layoutItem}>
          <TableOfContents />
        </div>
      </div>
    </>
  );
}
