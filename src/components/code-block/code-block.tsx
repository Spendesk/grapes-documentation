"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";
import { Button } from "@dev-spendesk/grapes";

type Props = {
  language?: string;
  children: React.ReactNode;
};

export function CodeBlock({ language = "js", children }: Props) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="relative">
      <pre>
        <code className={`language-${language}`}>{children}</code>
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
