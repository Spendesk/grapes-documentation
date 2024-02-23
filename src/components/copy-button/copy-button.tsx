"use client";

import { IconButton, Tooltip, colors } from "@dev-spendesk/grapes";
import { useState } from "react";

type CopyButtonProps = {
  content: string;
  className?: string;
  colorScheme?: "light" | "dark";
};
export function CopyButton({
  content,
  className,
  colorScheme = "light",
}: CopyButtonProps) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);
  const defaultColor =
    colorScheme === "light" ? colors.white : colors.neutralDark;
  const successColor =
    colorScheme === "light" ? colors.successLightest : colors.success;

  return (
    <Tooltip
      triggerAsChild
      content="Copied"
      isOpen={hasBeenCopied}
      placement="top"
    >
      <IconButton
        className={className}
        variant="borderless"
        iconName={hasBeenCopied ? "success" : "copy"}
        iconColor={hasBeenCopied ? successColor : defaultColor}
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
