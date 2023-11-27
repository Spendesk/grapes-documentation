"use client";

import { useState } from "react";
import {
  CollapsibleList as GrapesCollapsibleList,
  CollapsibleListItem,
} from "@dev-spendesk/grapes";

export function CollapsibleList() {
  const [activeListItem, setActiveListItem] = useState<number | null>(null);

  return (
    <div className="w-[360px]">
      <GrapesCollapsibleList
        renderHeader={(toggle, isCollapsed) => (
          <CollapsibleListItem
            asHeader
            isCollapsed={isCollapsed}
            onClick={toggle}
          >
            Header
          </CollapsibleListItem>
        )}
      >
        <CollapsibleListItem
          isActive={activeListItem === 0}
          onClick={() => setActiveListItem(0)}
        >
          Item 1
        </CollapsibleListItem>
        <CollapsibleListItem
          isActive={activeListItem === 1}
          onClick={() => setActiveListItem(1)}
        >
          Item 2
        </CollapsibleListItem>
      </GrapesCollapsibleList>
    </div>
  );
}
