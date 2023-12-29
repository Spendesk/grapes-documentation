"use client";

import { useEffect, useState } from "react";
import { IconButton, colors, Tooltip } from "@dev-spendesk/grapes";
import hljs from "highlight.js";

import "./code-block.css";

type Props = {
  language?: string;
  children: React.ReactNode;
};

export function CodeBlock({ language, children }: Props) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="docs-code">
      <code className={`${language} rounded-xs`}>{children}</code>
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
            navigator.clipboard.writeText(children as string);
            setTimeout(() => {
              setHasBeenCopied(false);
            }, 1_500);
          }}
        />
      </Tooltip>
    </pre>
  );
}
