"use client";

import { Preview } from "@/lib/preview/preview";
import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeaderWithIcon,
  ModalOverlay,
} from "@dev-spendesk/grapes";
import { useReducer, useState } from "react";

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
            iconName="circle-information"
            iconVariant="info"
            titleId="grapes-id"
          />
          <ModalBody>We recommend closing first before switching.</ModalBody>
          <ModalFooter>
            <Button
              key="cancel"
              variant="secondaryNeutral"
              text="Cancel"
              onClick={() => setIsOpen(false)}
            />
            <Button
              key="switch"
              variant="primaryBrand"
              text="Switch"
              onClick={() => setIsOpen(false)}
            />
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Preview>
  );
}

type Action = "next" | "previous" | "open" | "close";
function reducer(state: number, action: Action) {
  switch (action) {
    case "next":
      return state === STATE.lastModal ? STATE.close : state + 1;
    case "previous":
      return state === STATE.firstModal ? -1 : state - 1;
    case "open":
      return STATE.firstModal;
    case "close":
      return STATE.close;
  }
}

const STATE = {
  close: -1,
  firstModal: 0,
  secondModal: 1,
  lastModal: 2,
};
export function ModalFlow() {
  const [state, setState] = useReducer(reducer, STATE.close);

  return (
    <>
      <Button text="Open the modal" onClick={() => setState("open")} />
      <ModalOverlay isOpen={state !== STATE.close}>
        <ModalContent
          aria-labelledby="grapes-id"
          onClose={() => setState("close")}
        >
          {state === STATE.firstModal && (
            <>
              <ModalHeaderWithIcon
                title="Modal 1"
                iconName="triangle-warning"
                iconVariant="info"
                titleId="grapes-id"
              />
              <ModalBody>Content of the first Modal</ModalBody>
            </>
          )}
          {state === STATE.secondModal && (
            <>
              <ModalHeaderWithIcon
                title="Modal 2"
                iconName="triangle-warning"
                iconVariant="warning"
                titleId="grapes-id"
              />
              <ModalBody>Content of the second Modal</ModalBody>
            </>
          )}
          {state === STATE.lastModal && (
            <>
              <ModalHeaderWithIcon
                title="Modal 3"
                iconName="circle-check"
                iconVariant="success"
                titleId="grapes-id"
              />
              <ModalBody>Content of the third Modal</ModalBody>
            </>
          )}

          <ModalFooter>
            <Button
              key="cancel"
              variant="secondaryNeutral"
              text={state === STATE.firstModal ? "Close" : "Previous"}
              iconPosition="left"
              iconName={state === STATE.firstModal ? undefined : "arrow-left"}
              onClick={() => setState("previous")}
            />
            <Button
              key="switch"
              variant="primaryBrand"
              text={state === STATE.lastModal ? "Confirm" : "next"}
              iconPosition="right"
              iconName={state === STATE.lastModal ? undefined : "arrow-right"}
              onClick={() => setState("next")}
            />
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </>
  );
}
