"use client";

import { CopyButton } from "@/lib/copy-button/copy-button";
import "./copy-cell.css";

type Props = {
  content: string;
};

export function CopyCell({ content }: Props) {
  return (
    <div className="docs-cell-copy">
      {content}
      <CopyButton colorScheme="dark" content={content} />
    </div>
  );
}
