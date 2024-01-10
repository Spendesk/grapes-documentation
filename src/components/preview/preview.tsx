import React, { Suspense } from "react";

import { classNames } from "@/utils/classNames";

import "./preview.css";

type PreviewProps = {
  children: React.ReactNode;
  isInteractive?: boolean;
};

export function Preview({ children, isInteractive = true }: PreviewProps) {
  return (
    <div
      className={classNames(
        "docs-preview",
        !isInteractive && "pointer-events-none"
      )}
    >
      <Suspense>{children}</Suspense>
    </div>
  );
}
