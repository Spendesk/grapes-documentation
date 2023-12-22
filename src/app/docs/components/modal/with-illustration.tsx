"use client";

import { Button, Modal } from "@dev-spendesk/grapes";
import { useState } from "react";

export function WithIllustration() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box">
      <Button text="Open the modal" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Adopt a smooth transition"
        illustration={<img src="/illustration-2.webp" alt="" />}
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
    </div>
  );
}
