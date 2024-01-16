"use client";

import { Preview } from "@/components/preview/preview";
import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeaderWithIcon,
  ModalOverlay,
} from "@dev-spendesk/grapes";
import { useState } from "react";

export function WithLowerLevelConstructModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Preview>
      <Button text="Open the modal" onClick={() => setIsOpen(true)} />
      <ModalOverlay isOpen={isOpen}>
        <ModalContent
          aria-labelledby="grapes-id"
          onClose={() => setIsOpen(false)}
        >
          <ModalHeaderWithIcon
            title="Adopt a smooth transition"
            iconName="swap"
            iconVariant="info"
            titleId="grapes-id"
          />
          <ModalBody>We recommend closing first before switching.</ModalBody>
          <ModalFooter>
            <Button
              key="cancel"
              variant="secondary"
              text="Cancel"
              onClick={() => setIsOpen(false)}
            />
            <Button
              key="switch"
              variant="primary"
              text="Switch"
              onClick={() => setIsOpen(false)}
            />
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Preview>
  );
}
