import React, { ReactNode } from "react";

import { SideBar } from "@/components/sidebar/sidebar";
import { TableOfContents } from "@/components/table-of-contents/table-of-contents";
import { DocsHeader } from "@/components/docs-header/docs-header";

import "./layout.css";

type Props = {
  children: ReactNode;
};

export const metadata = {
  metadataBase: new URL("https://grapes.spendesk.design"),
  title: {
    template: "%s | Docs",
    default: "Docs",
  },
};

export default function Layout({ children }: Props) {
  return (
    <>
      <DocsHeader />
      <div className="docs-layout">
        <nav className="docs-sidebar">
          <div className="docs-sidebar-inner">
            <SideBar />
          </div>
        </nav>
        <main className="docs-content">{children}</main>
        <aside className="docs-toc">
          <TableOfContents />
        </aside>
      </div>
    </>
  );
}
