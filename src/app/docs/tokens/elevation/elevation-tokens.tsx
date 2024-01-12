"use client";

import { elevationTokens } from "./types";

export function ElevationTokens() {
  return (
    <div className="grid grid-cols-4 gap-s text-center items-end box">
      {elevationTokens.map((token) => {
        return (
          <div key={token}>
            <div style={{ boxShadow: `var(${token})` }} className="h-[160px]" />
            <div className="title-m mt-xs">{token}</div>
          </div>
        );
      })}
    </div>
  );
}
