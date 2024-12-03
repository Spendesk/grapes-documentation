"use client";

import { useState } from "react";
import {
  CollapsibleList,
  CollapsibleListItem,
  Avatar,
  Button,
} from "@dev-spendesk/grapes";

function DemoHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-8 items-center">
        <Avatar text="Michael Murphy" />
        <div>Michael Murphy</div>
      </div>
      <div className="text-right">
        <div className="title-m">€250.00</div>
        <div className="text-content-primary body-s">3 payables</div>
      </div>
    </div>
  );
}

function DemoListItem({
  amount,
  date,
  supplier,
}: {
  amount: string;
  date: string;
  supplier: string;
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <div>{supplier}</div>
        <div className="text-content-primary body-s">Michael Murphy</div>
      </div>
      <div className="text-right">
        <div className="title-m">{amount}</div>
        <div className="text-content-primary body-s">{date}</div>
      </div>
    </div>
  );
}

type Props = {
  isInitialOpen?: boolean;
  withFooter?: boolean;
  withVariant?: boolean;
};

export function DemoCollapsibleList({
  isInitialOpen = false,
  withVariant,
  withFooter,
}: Props) {
  const [activeListItem, setActiveListItem] = useState<number | null>(null);
  const [selectedListItems, setSelectedListItems] = useState<number[]>([]);

  function onSelect(id: number) {
    if (selectedListItems.includes(id)) {
      setSelectedListItems(selectedListItems.filter((item) => item !== id));
    } else {
      setSelectedListItems([...selectedListItems, id]);
    }
  }

  return (
    <div className="w-[360px]">
      <CollapsibleList
        isInitialCollapsed={!isInitialOpen}
        renderHeader={(toggle, isCollapsed) => (
          <CollapsibleListItem
            asHeader
            isCollapsed={isCollapsed}
            onClick={toggle}
            isSelected={selectedListItems.length === 3}
            isIndeterminate={
              selectedListItems.length > 0 && selectedListItems.length < 3
            }
            onSelect={() => {
              if (selectedListItems.length < 3) {
                setSelectedListItems([0, 1, 2]);
              } else {
                setSelectedListItems([]);
              }
            }}
          >
            <DemoHeader />
          </CollapsibleListItem>
        )}
        footer={
          withFooter && (
            <Button
              text="Load more"
              variant="secondaryNeutral"
              onClick={() => console.log("Load more")}
            />
          )
        }
      >
        <CollapsibleListItem
          isActive={activeListItem === 0}
          onClick={() => setActiveListItem(0)}
          isSelected={selectedListItems.includes(0)}
          onSelect={() => onSelect(0)}
        >
          <DemoListItem
            supplier="Carrefour"
            amount="€125.00"
            date="10 Nov 2023"
          />
        </CollapsibleListItem>
        <CollapsibleListItem
          isActive={activeListItem === 1}
          onClick={() => setActiveListItem(1)}
          isSelected={selectedListItems.includes(1)}
          onSelect={() => onSelect(1)}
          variant={withVariant ? "alert" : undefined}
        >
          <DemoListItem
            supplier="Leclerc"
            amount="€100.00"
            date="14 Dec 2023"
          />
        </CollapsibleListItem>
        <CollapsibleListItem
          isActive={activeListItem === 2}
          onClick={() => setActiveListItem(2)}
          isSelected={selectedListItems.includes(2)}
          onSelect={() => onSelect(2)}
        >
          <DemoListItem supplier="Ikea" amount="€25.00" date="9 Jan 2024" />
        </CollapsibleListItem>
      </CollapsibleList>
    </div>
  );
}
