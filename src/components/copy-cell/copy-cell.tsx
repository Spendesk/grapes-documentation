"use client";

import { CopyButton } from "@/components/copy-button/copy-button";
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
