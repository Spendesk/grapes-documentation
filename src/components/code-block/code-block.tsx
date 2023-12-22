"use client";

import { useEffect, useState } from "react";
import { IconButton } from "@dev-spendesk/grapes";
import hljs from "highlight.js";

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
    <div className="relative mt-s">
      <pre>
        <code className={`${language} rounded-xs body-s`}>{children}</code>
      </pre>
      <IconButton
        className="absolute top-xs right-xs"
        iconName="copy"
        variant="border"
        aria-label={hasBeenCopied ? "Copied" : "Copy"}
        onClick={() => {
          setHasBeenCopied(true);
          navigator.clipboard.writeText(children as string);
          setTimeout(() => {
            setHasBeenCopied(false);
          }, 3000);
        }}
      />
    </div>
  );
}
