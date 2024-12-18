"use client";

import { Preview } from "@/lib/preview/preview";
import { Button, Modal } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Preview>
      <Button text="Open the modal" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Adopt a smooth transition"
        iconName="arrow-left-right"
        iconVariant="info"
        actions={[
          <Button
            key="cancel"
            variant="secondaryNeutral"
            text="Cancel"
            onClick={() => setIsOpen(false)}
          />,
          <Button
            key="switch"
            variant="primaryBrand"
            text="Switch"
            onClick={() => setIsOpen(false)}
          />,
        ]}
      >
        We recommend closing first before switching.
      </Modal>
    </Preview>
  );
}
