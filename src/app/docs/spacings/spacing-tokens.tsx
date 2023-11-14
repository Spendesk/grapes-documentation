"use client";

import { spacingTokens } from "./types";

export function SpacingTokens() {
  return (
    <div className="grid grid-cols-4 gap-s text-center items-end">
      {spacingTokens.map((token) => {
        const value = getComputedStyle(
          document.documentElement
        ).getPropertyValue(token);
        return (
          <div key={token}>
            <div
              style={{ width: `var(${token})` }}
              className="aspect-square mx-auto bg-primary-lighter border border-dashed border-primary-light"
            />
            <div className="title-m mt-xs">{token}</div>
            <div style={{ color: "var(--color-neutral)" }}>{value}</div>
          </div>
        );
      })}
    </div>
  );
}
