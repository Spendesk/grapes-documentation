"use client";

import { IconButton, Tooltip, colors } from "@dev-spendesk/grapes";
import { useState } from "react";

type CopyButtonProps = {
  content: string;
};
export function CopyButton({ content }: CopyButtonProps) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);

  return (
    <Tooltip
      triggerAsChild
      content="Copied"
      isOpen={hasBeenCopied}
      placement="left"
    >
      <IconButton
        className="docs-cta-copy"
        variant="borderless"
        iconName={hasBeenCopied ? "success" : "copy"}
        iconColor={hasBeenCopied ? colors.successLightest : colors.white}
        aria-label={hasBeenCopied ? "Copied" : "Copy"}
        onClick={() => {
          setHasBeenCopied(true);
          navigator.clipboard.writeText(content);
          setTimeout(() => {
            setHasBeenCopied(false);
          }, 1_500);
        }}
      />
    </Tooltip>
  );
}
