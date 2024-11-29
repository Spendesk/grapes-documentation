"use client";

import { useEffect, useRef, useState } from "react";
import { sizingTokens } from "./types";

export function SizingTokens() {
  return (
    <div className="grid grid-cols-4 gap-16 text-center items-end box">
      {sizingTokens.map((token) => (
        <SizingBox key={token} token={token} />
      ))}
    </div>
  );
}

function SizingBox({ token }: { token: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [sizing, setSizing] = useState("");

  useEffect(() => {
    if (ref.current) {
      setSizing(window.getComputedStyle(ref.current).getPropertyValue("width"));
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
      <div className="text-content-secondary-bg-secondary">{sizing}</div>
    </div>
  );
}
