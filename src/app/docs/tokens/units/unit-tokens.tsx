"use client";

import { useEffect, useRef, useState } from "react";
import { unitTokens } from "./types";

export function UnitTokens() {
  return (
    <div className="grid grid-cols-4 gap-16 text-center items-end box">
      {unitTokens.map((token) => (
        <UnitBox key={token} token={token} />
      ))}
    </div>
  );
}

function UnitBox({ token }: { token: string }) {
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
        className="aspect-square mx-auto bg-secondary-brand-default border border-dashed border-transparent"
      />
      <div className="title-m mt-8">{token}</div>
      <div className="text-secondary-bg-secondary">{spacing}</div>
    </div>
  );
}
