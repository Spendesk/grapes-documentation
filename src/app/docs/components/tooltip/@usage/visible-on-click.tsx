"use client";

import { Preview } from "@/components/preview/preview";
import { Button, Tooltip } from "@dev-spendesk/grapes";
import { useState } from "react";

export function VisibleOnClick() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Preview>
      <Tooltip content="Copied" isOpen={isVisible} triggerAsChild>
        <Button
          variant="primary"
          text="Click to copy"
          onClick={() => {
            setIsVisible(true);
            setTimeout(() => {
              setIsVisible(false);
            }, 2000);
          }}
        />
      </Tooltip>
    </Preview>
  );
}
``;
