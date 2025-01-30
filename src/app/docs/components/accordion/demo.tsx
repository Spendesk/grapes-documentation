"use client";

import { Accordion, AccordionItem, Button } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoAccordion() {
  return (
    <Accordion className="w-full overflow-hidden">
      <AccordionItem renderHeader={() => "Invite team members"}>
        <div className="p-24 pt-8 text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lectus sed sem porttitor viverra. Vestibulum magna leo.
        </div>
      </AccordionItem>
      <AccordionItem renderHeader={() => "Make a first payment"}>
        <div className="p-24 pt-8 text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lectus sed sem porttitor viverra. Vestibulum magna leo.
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export function DemoOpen() {
  return (
    <Accordion className="w-full text-primary">
      <AccordionItem open renderHeader={() => "Invite team members"}>
        <div className="p-24 pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lectus sed sem porttitor viverra. Vestibulum magna leo.
        </div>
      </AccordionItem>
      <AccordionItem renderHeader={() => "Make a first payment"}>
        <div className="p-24 pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lectus sed sem porttitor viverra. Vestibulum magna leo.
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export function DemoControlledAccordion() {
  const [indexOpen, setIndexOpen] = useState("close"); // [!code highlight]

  return (
    <>
      <Button
        variant="primaryBrand"
        text="Open accordion"
        onClick={() => setIndexOpen("open")}
      />
      <Button
        variant="primaryBrand"
        text="Close accordion"
        onClick={() => setIndexOpen("close")}
      />
      <Accordion className="w-full overflow-hidden">
        <AccordionItem
          open={"open" === indexOpen} // [!code highlight]
          renderHeader={() => "Invite team members"}
        >
          <div className="p-24 pt-8 text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            lectus sed sem porttitor viverra. Vestibulum magna leo.
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}
