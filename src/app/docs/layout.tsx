import React, { ReactNode, Suspense } from "react";

import { SideBar } from "@/lib/sidebar/sidebar";
import { TableOfContents } from "@/lib/table-of-contents/table-of-contents";

import "./layout.css";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="docs-layout">
      <nav className="docs-sidebar">
        <div className="docs-sidebar-inner">
          <Suspense>
            <SideBar />
          </Suspense>
        </div>
      </nav>
      <main className="docs-content content">{children}</main>
      <aside className="docs-toc">
        <Suspense>
          <TableOfContents />
        </Suspense>
      </aside>
    </div>
  );
}
