import React, { Suspense } from "react";

import "./preview.css";

type PreviewProps = {
  children: React.ReactNode;
};

export function Preview({ children }: PreviewProps) {
  return (
    <div className="docs-preview">
      <Suspense>{children}</Suspense>
    </div>
  );
}
