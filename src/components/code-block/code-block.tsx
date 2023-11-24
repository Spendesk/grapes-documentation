"use client";

import { useEffect, useState } from "react";
import { Button } from "@dev-spendesk/grapes";
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
        <code className={`${language} rounded-xs`}>{children}</code>
      </pre>
      <Button
        className="absolute top-xs right-xs"
        variant="contrasted"
        text={hasBeenCopied ? "Copied" : "Copy"}
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
