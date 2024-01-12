import React, { Suspense } from "react";

import { classNames } from "@/utils/classNames";

import "./preview.css";

type PreviewProps = {
  children: React.ReactNode;
  className?: string;
};

export function Preview({ children, className }: PreviewProps) {
  return (
    <div className={classNames("docs-preview", className)}>
      <Suspense>{children}</Suspense>
    </div>
  );
}
