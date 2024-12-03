"use client";

import {
  Accordion,
  AccordionHandle,
  AccordionItem,
  Button,
} from "@dev-spendesk/grapes";
import { useRef } from "react";

const accordionItems = [
  "Invite team members",
  "Make a first payment",
  "Order physical cards",
];

type Props = {
  withMultipleOpenItems?: boolean;
  withDefaultOpenItems?: boolean;
  withOpenClose?: boolean;
};

export function DemoAccordion({
  withMultipleOpenItems,
  withDefaultOpenItems,
  withOpenClose,
}: Props) {
  const accordionRef = useRef<AccordionHandle | null>(null);
  const openAccordion = () => {
    accordionRef.current?.openAccordion(new Set([0, 1, 2]));
  };
  const closeAccordion = () => {
    accordionRef.current?.closeAccordion();
  };

  return (
    <>
      {withOpenClose && (
        <>
          <Button
            variant="primaryBrand"
            text="Open accordion"
            onClick={() => openAccordion()}
          />
          <Button
            variant="primaryBrand"
            text="Close accordion"
            onClick={() => closeAccordion()}
          />
        </>
      )}
      <Accordion
        ref={accordionRef}
        allowMultipleOpenItems={withMultipleOpenItems}
        defaultAccordionItemIndexes={
          withDefaultOpenItems ? new Set([0, 2]) : undefined
        }
        className="w-full overflow-hidden"
      >
        {accordionItems.map((accordionItem) => (
          <AccordionItem
            key={accordionItem}
            renderHeader={() => <div>{accordionItem}</div>}
          >
            <div className="p-24 pt-8 text-content-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              lectus sed sem porttitor viverra. Vestibulum magna leo.
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
