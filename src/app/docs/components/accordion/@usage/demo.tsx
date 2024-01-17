"use client";

import {
  Accordion,
  AccordionHandle,
  AccordionItem,
  Button,
} from "@dev-spendesk/grapes";

import styles from "./demo.module.css";
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
            variant="primary"
            text="Open accordion"
            onClick={() => openAccordion()}
          />
          <Button
            variant="primary"
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
        className={styles.accordion}
      >
        {accordionItems.map((accordionItem) => (
          <AccordionItem
            key={accordionItem}
            renderHeader={() => <div>{accordionItem}</div>}
          >
            <div className="p-m pt-xs text-neutral-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              lectus sed sem porttitor viverra. Vestibulum magna leo.
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
