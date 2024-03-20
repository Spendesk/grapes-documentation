"use client";

import { Preview } from "@/lib/preview/preview";
import { Button, Modal } from "@dev-spendesk/grapes";
import Image from "next/image";
import { useState } from "react";

export function WithIllustration() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Preview>
      <Button text="Open the modal" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Adopt a smooth transition"
        illustration={
          <div className="w-full h-full relative">
            <Image fill src="/illustration-2.webp" alt="" />
          </div>
        }
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
