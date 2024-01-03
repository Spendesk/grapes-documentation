import React from "react";

import "./preview.css";

type PreviewProps = {
  children: React.ReactNode;
};

export function Preview({ children }: PreviewProps) {
  return <div className="docs-preview">{children}</div>;
}
