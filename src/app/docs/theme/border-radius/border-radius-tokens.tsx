"use client";

import { borderRadiusTokens } from "./types";

export function BorderRadiusTokens() {
  if (typeof window === "undefined") {
    return null;
  }

  const style = window.getComputedStyle(document.documentElement);
  return (
    <div className="flex gap-l box text-center">
      {borderRadiusTokens.map((token) => {
        const value = style.getPropertyValue(token);
        return (
          <div key={token}>
            <div
              style={{ borderRadius: `var(${token})` }}
              className="w-[160px] h-[120px] bg-primary-lighter"
            />
            <div className="title-m mt-xs">{token}</div>
            <div className="text-neutral">{value}</div>
          </div>
        );
      })}
    </div>
  );
}
