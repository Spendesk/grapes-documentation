"use client";

import { useEffect, useRef, useState } from "react";
import { sizingTokens } from "./types";

export function SizingTokens() {
  return (
    <div className="grid grid-cols-4 gap-s text-center items-end box">
      {sizingTokens.map((token) => (
        <SizingBox key={token} token={token} />
      ))}
    </div>
  );
}

function SizingBox({ token }: { token: string }) {
  const ref = useRef(null);
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
        className="aspect-square mx-auto bg-primary-lighter border border-dashed border-primary-light"
      />
      <div className="title-m mt-xs">{token}</div>
      <div className="text-neutral">{sizing}</div>
    </div>
  );
}
