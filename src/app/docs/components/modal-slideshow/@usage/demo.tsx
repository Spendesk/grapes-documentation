"use client";

/* eslint-disable @next/next/no-img-element */

import { Button, ModalSlideshow } from "@dev-spendesk/grapes";
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
      <ModalSlideshow
        slides={[
          {
            title: "Title slide 1",
            content:
              "This is placeholder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks.",
            illustration: <img src="/slide-1.webp" alt="" />,
          },
          {
            title: "Title slide 2",
            content: "This is placeholder text.",
            illustration: <img src="/slide-2.webp" alt="" />,
          },
          {
            title: "Title slide 3",
            content:
              "This is placeholder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks.",
            illustration: <img src="/slide-3.webp" alt="" />,
          },
        ]}
        translations={{
          cancel: "Cancel",
          previous: "Back",
          next: "Next",
          done: "Action wording",
        }}
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        onDone={() => setIsOpen(false)}
      />
    </>
  );
}
