import Link from "next/link";
import React, { ReactNode } from "react";

import { Search } from "@/components/search/search";
import { SideBar } from "@/components/sidebar/sidebar";
import { TableOfContents } from "@/components/table-of-contents/table-of-contents";

import "highlight.js/styles/stackoverflow-dark.min.css";

import "./layout.css";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <header className="docs-header">
        <div className="docs-header-wrapper">
          <Link href="/" key="grapes" className=" flex gap-xs items-center">
            <img src="/logo.svg" alt="Grapes" className="logo" />
          </Link>
          <Search key="search" />
        </div>
      </header>
      <div className="docs-layout">
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
