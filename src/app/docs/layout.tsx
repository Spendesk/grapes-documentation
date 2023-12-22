"use client";

import { Icon, colors } from "@dev-spendesk/grapes";
import Link from "next/link";
import React, { ReactNode } from "react";

import { Search } from "@/components/search/search";
import { SideBar } from "@/components/sidebar/sidebar";
import { TableOfContents } from "@/components/table-of-contents/table-of-contents";

import "highlight.js/styles/stackoverflow-dark.min.css";

import "./layout.css";

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
      <header className="docs-header">
        <div className="docs-header-wrapper">
          <Link href="/" key="grapes" className=" flex gap-xs items-center">
            <Icon color={colors.primary} size="l" name="spendesk" />
            <div className="text-primary title-l">Grapes</div>
          </Link>
          <Search key="search" />
        </div>
      </header>
      <div className="docs-layout body-m">
        <div className="docs-sidebar">
          <div className="docs-sidebar-inner">
            <SideBar />
          </div>
        </div>
        <div className="docs-content">{children}</div>
        <div className="docs-toc">
          <TableOfContents />
        </div>
      </div>
    </>
  );
}
