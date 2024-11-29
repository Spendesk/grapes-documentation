"use client";

import { useEffect, useRef, useState } from "react";
import { spacingTokens } from "./types";

export function SpacingTokens() {
  return (
    <div className="grid grid-cols-4 gap-16 text-center items-end box">
      {spacingTokens.map((token) => (
        <SpacingBox key={token} token={token} />
      ))}
    </div>
  );
}

function SpacingBox({ token }: { token: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [spacing, setSpacing] = useState("");

  useEffect(() => {
    if (ref.current) {
      setSpacing(
        window.getComputedStyle(ref.current).getPropertyValue("width"),
      );
    }
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ width: `var(${token})` }}
        className="aspect-square mx-auto bg-background-secondary-brand-default border border-dashed border-transparent"
      />
      <div className="title-m mt-8">{token}</div>
      <div className="text-content-secondary-bg-secondary">{spacing}</div>
    </div>
  );
}
