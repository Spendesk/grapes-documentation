"use client";

import { Button, PageModal } from "@dev-spendesk/grapes";
import { useState } from "react";

export function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        text="Open the modal"
        onClick={() => setIsOpen(true)}
      />
      <PageModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <p>This is a page modal.</p>
        </div>
      </PageModal>
    </>
  );
}
