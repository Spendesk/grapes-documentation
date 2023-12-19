"use client";

import { sizingTokens } from "./types";

export function SizingTokens() {
  if (typeof window === "undefined") {
    return null;
  }

  const style = window.getComputedStyle(document.documentElement);
  return (
    <div className="grid grid-cols-4 gap-s text-center items-end box">
      {sizingTokens.map((token) => {
        const value = style.getPropertyValue(token);
        return (
          <div key={token}>
            <div
              style={{ width: `var(${token})` }}
              className="aspect-square mx-auto bg-primary-lighter border border-dashed border-primary-light"
            />
            <div className="title-m mt-xs">{token}</div>
            <div className="text-neutral">{value}</div>
          </div>
        );
      })}
    </div>
  );
}
