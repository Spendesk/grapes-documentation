"use client";

import { useEffect, useRef, useState } from "react";
import { borderRadiusTokens } from "./types";

export function BorderRadiusTokens() {
  return (
    <div className="flex gap-32 box text-center">
      {borderRadiusTokens.map((token) => (
        <BorderRadiusBox key={token} token={token} />
      ))}
    </div>
  );
}

function BorderRadiusBox({ token }: { token: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [borderRadius, setBorderRadius] = useState("");

  useEffect(() => {
    if (ref.current) {
      setBorderRadius(
        window.getComputedStyle(ref.current).getPropertyValue("border-radius"),
      );
    }
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ borderRadius: `var(${token})` }}
        className="w-[160px] h-[120px] bg-background-secondary-brand-default"
      />
      <div className="title-m mt-8">{token}</div>
      <div className="text-content-secondary-bg-secondary">{borderRadius}</div>
    </div>
  );
}
