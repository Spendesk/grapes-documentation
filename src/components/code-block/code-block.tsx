"use client";

import { useEffect, useState } from "react";
import { IconButton } from "@dev-spendesk/grapes";
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
      <IconButton
        className="docs-cta-copy"
        variant="border"
        iconName={hasBeenCopied ? "success" : "copy"}
        aria-label={hasBeenCopied ? "Copied" : "Copy"}
        onClick={() => {
          setHasBeenCopied(true);
          navigator.clipboard.writeText(children as string);
          setTimeout(() => {
            setHasBeenCopied(false);
          }, 1_500);
        }}
      />
    </pre>
  );
}
