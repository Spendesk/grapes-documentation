"use client";

import { Preview } from "@/components/preview/preview";
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
        iconName="swap"
        iconVariant="info"
        actions={[
          <Button
            key="cancel"
            variant="secondary"
            text="Cancel"
            onClick={() => setIsOpen(false)}
          />,
          <Button
            key="switch"
            variant="primary"
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
